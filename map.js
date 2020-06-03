require("./typedef");

/**
 * @return {MAP}
 */
let pollute = (input = {}) => {
  let map = Object.assign(Object.create({}), input);
  let p = (name, func) => (map.__proto__[name] = func);

  p("keys", () => Object.keys(map));
  p("values", () => Object.values(map));
  p("length", () => Object.keys(map).length);
  p("add", (...maps) => maps.reduce((hook, item) => Object.assign(hook, item), map));
  p("remove", (...items) => {
    items.map((val) => delete map[val]);
    return map;
  });
  p("get", (...keys) => keys.reduce((hook, item) => Object.assign(hook, { [item]: map[item] }), pollute({})));
  p("has", (...keys) => keys.find((i) => map[i] === undefined || map[i] === null) === undefined);
  p("toString", (space = "") => JSON.stringify(map, undefined, space));
  p("clone", () => Object.assign(pollute({}), map));
  p("getExist", (...keys) =>
    keys.reduce((hook, item) => (!map.has(item) ? hook : Object.assign(hook, { [item]: map[item] })), pollute({}))
  );
  p("getExcept", (...keys) => map.clone().remove(...keys));

  return map;
};

module.exports = pollute;
