



    var prNum = Math.round((Math.random() * (9999 - 1000) + 1000));
    console.log(prNum);
    var i=confirm('Я хочу сыграть с тобой в игру, Тебе надо угадать число!');

    var colNum=1;




    while (true) {
        num = prompt('Введи число: ');

        if (num == prNum) {

            alert('вы угадали за ' + colNum + 'попыток');
            break;
        } else if (num > prNum) {

            alert('введите число  меньше и это твоя  ' + colNum + 'попытка');
        } else {

            alert(' введите число больше и это твоя   ' + colNum + 'попытка');
        }


        colNum++;
        if (colNum == 11) {

            alert('Игра окончена у тебя было 10 попыток');
            break;

        }
    }





