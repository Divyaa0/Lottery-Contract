import {resolve , dirname} from 'path';
import fs from 'fs';
import solc from 'solc';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



// TO RESOLVE ISSUE REGARDING PATH WHILE WORKING ON DIFFERENT SYSYTEM.It will redirect it to the main file specified
const projectPath=resolve(__dirname,'contracts','lottery.sol');

// to get the source code from contract file
const source=fs.readFileSync(projectPath,'utf8');



// 1 : states number of contract to compile

console.log(solc.compile(source,1));
// console.log("check",solc.compile(source,1).contracts[':inbox'])

// make module of the "bytecode" present in compiled source code
export default  solc.compile(source,1).contracts[':lottery'];
