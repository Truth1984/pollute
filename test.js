let m = require("./map");

let item1 = m({ a: 15, b: 13 });
let item2 = m({ c: 3, d: 156 });

//dirty equal
let de = (v1, v2) => JSON.stringify(v1) !== JSON.stringify(v2);

item1.add({ e: 13 }).add({ f: 324 });
if (de(item1, { a: 15, b: 13, e: 13, f: 324 })) throw "add failed";

let item3 = item2.get("d").add({ g: 16 });
if (de(item3, { d: 156, g: 16 })) throw "get failed";

if (!item1.has("c") !== true) throw "has failed";

if (de(item1.remove("a", "c", "f"), { b: 13, e: 13 })) throw "remove failed";

if (de(item1.getExist("b", "k"), { b: 13 })) throw "getExist failed";

if (de(item1.getExcept("c", "e"), { b: 13 })) throw "getExcept failed";

if (
  de(
    item1.map((key, val) => [key, val + 10]),
    { b: 23, e: 23 }
  )
)
  throw "map failed";

console.log("all test passed");
