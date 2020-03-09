const ConsoleReader = require('./ConsoleReader');
const Contact = require('./Contact');
const message = require('./MessagePrinter');

const main = async () => {
   message.printTooltip('Выберите действие.\n\nadd - добавить\nlist - список\ndelete - удалить\nsearch - найти\n\nДля выхода используйте команду - exit\n');
    const command = await ConsoleReader.getLine();
    if (command === 'exit') {
        process.exit(0);
    } else if (command === 'add') {
        await Contact.addContact();
    } else if (command === 'list') {
        await Contact.listContact();
    } else if (command === 'delete') {
        await Contact.deleteContact();
    } else if (command === 'search') {
        await Contact.searchContact();
    } else {
        message.printError('Неизвестная команда');
    }

    main();
};

main();

// console.log(module); // специальный сервиснй обьект который есть в каждом файле js
// https://docs.npmjs.com/files/package.json - будет на экзамене