string = 'Hello';
var str = '';

for (var i = 0; i < string.length; i++) {
    str += string.slice(string.length - i - 1, string.length - i);
}

console.log(str);

// Что лучше - объявить переменную и записать в нее длину строки или использовать свойство .length? В данном случае скорость исполнения кода выше во 2м варианте, но всегда ли так будет? Есть ли общее правило? (для аналогичных случаев, например, с длиной массива и т.п.)