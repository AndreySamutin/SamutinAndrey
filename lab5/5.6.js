function replaceString (text, searchString, replacementString) {
    if (text && searchString && replacementString) {
        if (text.includes(searchString)) {
            while(text.includes(searchString)) {
                text = text.replace(searchString, replacementString);
            }
            return text;
        } else {
            return false;
        }
    }
}

let text = 'Создайте функцию replaceString, которая принимает в качестве параметров некоторый произвольный текст, ' +
    'искомую строку и строку на которую мы меняем искомую строку. Функция должна вернуть измененный текст, ' +
    'если искомая строка не найдена false. Функция должна иметь проверку входных параметров.';

console.log(replaceString(text, 'Функция', 'Какой-то другой текст'));