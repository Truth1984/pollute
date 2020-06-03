/**
 * @typedef CHAINMAP
 * @property {()=>[]} keys
 * @property {()=>[]} values
 * @property {()=>number} length
 * @property {(...maps:{})=>MAP} add
 * @property {(...items:string)=>MAP} remove
 * @property {(...keys:string)=>MAP} get
 *
 */

/**
 * @typedef MAP
 * @property {()=>[]} keys
 * @property {()=>[]} values
 * @property {()=>number} length
 * @property {(...maps:{})=>CHAINMAP} add
 * @property {(...items:string)=>CHAINMAP} remove
 * @property {(...keys:string)=>CHAINMAP} get
 */