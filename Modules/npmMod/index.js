import chalk from "chalk";
import validator from "validator";
const res=validator.isEmail("dhirengmail.com");
console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res));
