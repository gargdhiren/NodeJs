import chalk from "chalk";
import validator from "validator";
const res=validator.isEmail("dhiren@gmail.com");
console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res));
