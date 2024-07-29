// import if the type = module
// import { apiKey } from './util.js';
// importing a default export value
// import varName from './util.js';


// console.log(varName);
// console.log(apiKey);

//importing multiple vars
import { var1, var2, var3 } from './util.js';

//importing multiple vars as a JS group (object)
import * as util from './util.js';

// to assign alias
// import { var1, var2 as renaming} from './util.js'; 



console.log(var1);
console.log(var2);
console.log(var3);
console.log(util);
console.log(util.var1);
console.log(renaming);