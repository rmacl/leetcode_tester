let fs = require('fs');

let fileName = process.argv[2];
let functionName = process.argv[3];

let jsExtension = '.js';
let jestExtension = '.test.js';
let fileContents = createFileContents(functionName);
let testContents = createTestContents(functionName, fileName);


let jsFileName = fileName + jsExtension;
let jestFileName = fileName + jestExtension;
fs.writeFile(jsFileName, fileContents , function (err) {
  if (err) throw err;
  console.log(jsFileName , ' Saved');
});

fs.writeFile(jestFileName, testContents, function (err) {
    if (err) throw err;
    console.log(jestFileName, '  Saved!');
});

function createFileContents(functionName){
    let fileContents = '';
    fileContents += `function ${functionName}() { \n } \n\n\n`;
    fileContents += `module.exports = ${functionName};`;
    return fileContents;
}

function createTestContents(functionName , fileName){
    let textContents = '';
    textContents += `const ${functionName} = require('./${fileName}'); \n\n`;
    textContents += `test('leetcode test', () => {   
      expect(${functionName}()).toBe();\n`;  
    textContents += `});  \n `;
    return textContents;
}
