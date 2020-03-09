const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const getLine = (function () {
    const getLineGen = (async function* () {
        for await (const line of rl) {
            yield line;
        }
    })();
    return async () => ((await getLineGen.next()).value);
})();

module.exports.getLine = getLine; // создали библиотеку с названием ConsoleReader которую можно вызвать в другом файле используяConsoleReader.getLine()

