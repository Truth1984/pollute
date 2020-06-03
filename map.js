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
  p("remove", (...items) => items.map((val) => delete map[val]));
  p("get", (...keys) => keys.reduce((hook, item) => Object.assign(hook, { [item]: map[item] }), pollute({})));

  return map;
};

module.exports = pollute;
