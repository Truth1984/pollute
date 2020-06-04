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

## notice

`{}` is already polluted `console.log(typeof {}["constructor"]);` output `function`

## api

#### constructor

map(input = {}, backup = "\_")

in case the value inside input was overwritten by user, you can still use backup function. i.e.

```js
let item = m({ get: 10 }, "_");
item.get; // output 10;
item._.get; // output a function
item._.get("get").keys(); //output ["get"]
item._.get("get", "udf")._.keys(); //output ["get", "udf"]
Object.keys(item); // output ["get"]
```

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

#### has

(...keys:string)=>boolean

#### toString

(space?:"")=>string

#### clone

deep copy

()=>MAP

#### getExist

(...keys:string)=>MAP

#### getExcept

(...keys:string)=>MAP

#### map (_verb._)

(func:(key, value)=>["key","value"],removeOld?:true)=>MAP

the output should return an array, and array[0] is key, array[1] is value

if removeOld is true then the old value will be deleted

else

```js
let item = m({ a: 10, b: 20 }, "_");
item.map((key, val) => [key + 10, val], false); // output {a: 10, b: 20, a10: 10, b10: 20}
```
