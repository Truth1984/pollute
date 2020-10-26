require("./typedef");

/**
 * @return { AOM & [] }
 */
let pollute = (input = [], backup = "_") => {
  let array = Array.from(input);
  array.__proto__[backup] = {};
  let p = (name, func) => {
    array.__proto__[name] = func;
    array.__proto__[backup][name] = func;
  };

  p("keys", () => pollute(Object.keys(input), backup));
  p("values", () => pollute(Object.values(input), backup));
  p("add", (...items) => array.concat(...items));
  p("remove", (...index) => {
    index.sort((a, b) => (a > b ? -1 : 1)).map((i) => array.splice(i, 1));
    return array;
  });
  p("get", (...index) =>
    index.reduce((hook, item) => {
      hook.push(array[item]);
      return hook;
    }, pollute())
  );
  p("has", (...conditions) => {
    for (let i of conditions) {
      if (typeof i === "function" && !array.some(i)) return false;
      else if (array.indexOf(i) == -1) return false;
    }
    return true;
  });
  p("toString", (space = "") => JSON.stringify(array, undefined, space));
  p("clone", () => pollute(array, backup));

  return array;
};

module.exports = pollute;
