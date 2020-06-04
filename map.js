require("./typedef");

/**
 * @return {MAP}
 */
let pollute = (input = {}, backup = "_") => {
  let map = Object.assign(Object.create({}), input);
  map.__proto__[backup] = {};
  let p = (name, func) => {
    map.__proto__[name] = func;
    map.__proto__[backup][name] = func;
  };

  p("keys", () => Object.keys(map));
  p("values", () => Object.values(map));
  p("length", () => Object.keys(map).length);
  p("add", (...maps) => maps.reduce((hook, item) => Object.assign(hook, item), map));
  p("remove", (...items) => {
    items.map((val) => delete map[val]);
    return map;
  });
  p("get", (...keys) => keys.reduce((hook, item) => Object.assign(hook, { [item]: map[item] }), pollute({}, backup)));
  p("has", (...keys) => keys.find((i) => map[i] === undefined || map[i] === null) === undefined);
  p("toString", (space = "") => JSON.stringify(map, undefined, space));
  p("clone", () => Object.assign(pollute({}, backup), map));
  p("getExist", (...keys) =>
    keys.reduce(
      (hook, item) => (!map.has(item) ? hook : Object.assign(hook, { [item]: map[item] })),
      pollute({}, backup)
    )
  );
  p("getExcept", (...keys) => map.clone().remove(...keys));
  p("map", (func, removeOld = true) => {
    for (let [key, value] of Object.entries(map)) {
      if (removeOld) delete map[key];
      let [rkey, rvalue] = func(key, value);
      map[rkey] = rvalue;
    }
    return map;
  });

  return map;
};

module.exports = pollute;
