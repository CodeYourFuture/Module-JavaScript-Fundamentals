// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

//Initiation should access before the declaration.
 //error message: Error: Cannot find module '/Users/rogerger1220/Documents/CYF/Module-JavaScript-Fundamentals/Sprint-2/2.js'
 //   at Module._resolveFilename (node:internal/modules/cjs/loader:1564:15)
 //   at wrapResolveFilename (node:internal/modules/cjs/loader:1118:27)
 //   at defaultResolveImplForCJSLoading (node:internal/modules/cjs/loader:1142:10)
 //   at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1169:12)
 //   at Module._load (node:internal/modules/cjs/loader:1341:5)
 //   at wrapModuleLoad (node:internal/modules/cjs/loader:261:19)
 //   at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
 //   at node:internal/main/run_main_module:33:47 {
 // code: 'MODULE_NOT_FOUND',
 // requireStack: []
}

// Node.js v24.21.0