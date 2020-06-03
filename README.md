# pollute

map utils, boost productivity, prototype pollution, working progress

## example

```js
let { map } = require("pollute");
let m = map;

let item1 = m({ a: 15, b: 13 });
let item2 = m({ c: 3, d: 156 });

item1.add({ e: 13 }).add({ f: 324 });
let item3 = item2.get("d").add({ g: 16 });
item2.add({ h: 323 }, { h: 33 });

console.log(item1, item2, item3);
// { a: 15, b: 13, e: 13, f: 324 } { c: 3, d: 156, h: 33 } { d: 156, g: 16 }
```

## api

#### keys

()=>[]

#### values

()=>[]

#### length

()=>number

#### add

(...maps:{})=>MAP

#### remove

(...items:string)=>MAP

#### get

(...keys:string)=>MAP
