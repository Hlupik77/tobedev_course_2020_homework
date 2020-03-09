const chalk = require('chalk');// подключили npm библиотеку chalk https://www.npmjs.com/package/chalk

// подсказки - синий и жирный
async function printTooltip(message) {
    console.log(chalk.blue.bold(message));
}

// ошибки - красный на черном фоне
async function printError(message) {
    console.log(chalk.red.bgBlack(message));
}

// сообщения - HEX код 00ffea
async function printMessage(message) {
    console.log(chalk.hex('#00ffea')(message));
}

module.exports.printTooltip = printTooltip;
module.exports.printError = printError;
module.exports.printMessage = printMessage;