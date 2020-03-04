'use strict'

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

const phoneBook = {};

//добавление контактов
const addUser = async () => {
    console.log('Введите имя:');
    const name = await getLine();
    console.log('Введите номер телефона:');
    const phone = await getLine();
    phoneBook[name] = phone;
    console.log(`Пользователь ${name} успешно добавлен`);
}

//удаление контакта по имени
const removeUser = async () => {
    console.log('Введите имя');
    const name = await getLine();
    delete phoneBook[name];
    console.log(`Пользователь ${name} успешно удален`);
}

//отображение списка
const getUserList = async () => {
    console.log('Список всех пользователей:');
    console.table(phoneBook);
}

//поиск контакта по имени.
const getUser = async () => {
    console.log('Введите имя');
    const name = await getLine();
    const phone = phoneBook[name];
    console.log(`Пользователь ${name}, номер телефона ${phone}`);
};


// функция старта программы
const main = async () => {
    console.log('\n Введите команду.\n add - добавление нового пользователя \n remove - удаление пользователя \n user - получение пользователя \n list - список всех пользователей \n\n Для выхода используйте команду - exit');

    const command = await getLine();
    if (command === 'exit') {
        console.log('Конец');
        process.exit(0);
    } else if (command === 'add') {
        await addUser();
    } else if (command === 'remove') {
        await removeUser();
    } else if (command === 'user') {
        await getUser();
    } else if (command === 'list') {
        await getUserList();
    } else {
        console.log('Неизвестаня команда');
    }
    main();
};

main();
