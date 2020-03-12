const ConsoleReader = require('./ConsoleReader');
const PhoneBook = require('./PhoneBook');
const message = require('./MessagePrinter');

// Добавить новое имя и телефон
async function addContact() {
    message.printTooltip('Введите имя');
    const name = await ConsoleReader.getLine();
    message.printTooltip('Введите номер телефона');
    const phone = await ConsoleReader.getLine();
    PhoneBook[name] = phone;
    message.printTooltip(`Вы добавили контакт c именем ${name} с номером ${PhoneBook[name]}`);
};

//Показать телефонную книгу
async function listContact() {
    message.printMessage(`\n---`);
    for (let key in PhoneBook) {
        message.printMessage(`Контакт с именем ${key} и номером ${PhoneBook[key]}`);
    }
    message.printMessage(`---\n`);
}

// Удаление контактов
async function deleteContact() {
    message.printTooltip('Введите имя контакта, который хотите удалить');
    const name = await ConsoleReader.getLine();
    delete PhoneBook[name];
    message.printMessage(`Вы удалили контакт с именем ${name}`);
}

// Поиск контактов
async function searchContact() {
    message.printTooltip('Введите имя контакта, который хотите найти');
    const name = await ConsoleReader.getLine();

    if (PhoneBook[name] === undefined) {
        message.printError('Такого имени нет в телефонной книге');
    } else {
        message.printMessage(`Контакт с именем ${name} и номером ${PhoneBook[name]}`);
    }
}

module.exports.addContact = addContact;
module.exports.listContact = listContact;
module.exports.deleteContact = deleteContact;
module.exports.searchContact = searchContact;