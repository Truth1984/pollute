/**
 * @typedef CHAINMAP
 * @property {()=>[]} keys
 * @property {()=>[]} values
 * @property {()=>number} length
 * @property {(...maps:{})=>MAP} add
 * @property {(...items:string)=>MAP} remove
 * @property {(...keys:string)=>MAP} get
 * @property {(...keys:string)=>boolean} has
 * @property {(space?:"")=>string}  toString
 * @property {()=>MAP} clone
 * @property {(...keys:string)=>MAP} getExist
 * @property {(...keys:string)=>MAP} getExcept
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
 * @property {(...keys:string)=>boolean} has
 * @property {(space?:"")=>string} toString
 * @property {()=>CHAINMAP} clone
 * @property {(...keys:string)=>CHAINMAP} getExist
 * @property {(...keys:string)=>CHAINMAP} getExcept
 *
 */
