const lodash = require("lodash");

const names = ['jaya', 'mannem', 'jaswik', 'rachana'];
const capitalize = lodash.map(names, lodash.capitalize);
console.log(capitalize) 

// [ 'Jaya', 'Mannem', 'Jaswik', 'Rachana' ]