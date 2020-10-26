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
 * @property {(func:(key, value)=>["key","value"],removeOld?:true)=>MAP} map
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
 * @property {(func:(key, value)=>["key","value"],removeOld?:true)=>CHAINMAP} map
 */

/**
 * @typedef CHAINAOM
 * @property {()=>AOM & []} keys
 * @property {(...items)=>AOM & []} add
 * @property {(...index)=>AOM & []} remove
 * @property {(...index)=>AOM & []} get
 * @property {(...conditions)=>boolean} has
 * @property {(space?:"")=>string} toString
 * @property {()=>AOM & []} clone
 */

/**
 * @typedef AOM
 * @property {()=>CHAINAOM & []} keys
 * @property {(...items)=>CHAINAOM & []} add
 * @property {(...index)=>CHAINAOM & []} remove
 * @property {(...index)=>CHAINAOM & []} get
 * @property {(...conditions)=>boolean} has
 * @property {(space?:"")=>string} toString
 * @property {()=>CHAINAOM & []} clone
 */
