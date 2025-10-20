const path = require('path');

// get directory name 
console.log('Directory name: ', path.dirname(__filename))
// C:\Users\v-jayamannem\Desktop\TechStack\Node JS\4.path-module

// get filename 
console.log('File name: ', path.basename(__filename)) // index.js

// get file extension
console.log("File Extension: ", path.extname(__filename)); // .js

// join paths
const joinPath = path.join("/user", "documents", "node", "projects");
console.log("Join Path: ", joinPath) //  \user\documents\node\projects

// Resolve Path 
const resolvePath = path.resolve("users", "documents", "node", "projects");
console.log("Resolve Path: ", resolvePath)
// C:\Users\v-jayamannem\Desktop\TechStack\Node JS\4.path-module\users\documents\node\projects

// Normalize a path
const normalizePath = path.normalize("/user/.documents/../node/projects");
console.log("Normalize Path", normalizePath) // \user\node\projects

