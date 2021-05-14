let display = document.querySelector('.display');
let keys = document.querySelectorAll('.key');
let clear = document.querySelector('.clear');


for (let key of keys) {
  key.onclick = function () {
  display.textContent = display.textContent + key.textContent;
       };
}

clear.onclick = function () {
  display.textContent = '';
       };





/*
Кнопки с буквами и «пробел» имеют класс key, а дисплей — класс display.

При клике на кнопку с буквой или пробелом текстовое содержимое этой кнопки должно добавляться к текстовому содержимому дисплея.

Кнопка очистки имеет класс clear. При клике на неё весь текст внутри дисплея должен удаляться, для этого в текстовое содержимое дисплея нужно записать пустую строку.

МОЯ ГЛАВНАЯ ОШИБКА - 
key.onclick = function () {
display.textContent = display.textContent + keys.textContent;
(писал вместо новой переменной key старое имя коллекции keys)
что значит плюс? дисплей показывает уже данное содержание кнопки плюс новой добавленное содержание новой кнопки, не удаляя старого содержания. И так до бесконечности. 
*/
