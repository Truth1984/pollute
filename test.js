let m = require("./map");

let item1 = m({ a: 15, b: 13 });
let item2 = m({ c: 3, d: 156 });

// mm.add({ sda: 13 });
// console.log(mm, pp);

// pp.add({ f: 12 }, { c: 13 }, { c: 15 });

// console.log(pp.keys(), mm.keys(), mm.values(), pp);

// let kk = m({ v: 10 });
// console.log(kk.add({ d: 12 }).length());

// pp.keys().add(1, 2).add(3, 4);

item1.add({ e: 13 }).add({ f: 324 });
let item3 = item2.get("d").add({ g: 16 });
item2.add({ h: 323 }, { h: 33 });

console.log(item1, item2, item3);
// console.log(item1.has("a", "b", "d"));
console.log(item1.toString());
item3.toString();
item3.add({ v: 14 });
console.log(item3);

console.log(item1.getExcept("b", "c", "a", "d"));
item3.clone().add({ v: 18 });
console.log(item3);
