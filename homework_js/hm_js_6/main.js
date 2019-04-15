/************************************  Крестики нолики *****************************/

for (let i = 0; i<9; i++){
    document.getElementById('game').innerHTML+='<div class="items"></div>';



}

let step = 0;

    document.getElementById('game').onclick= function(event){

        if(event.target.className =='items'){
            if(step%2==0){


                event.target.innerHTML='x';







            }else{
                event.target.innerHTML='o';

            }

            step++;
            checkWin()
        }
}

function checkWin() {

    let all = document.getElementsByClassName("items");

    if(all[0].innerHTML === 'x' && all[1].innerHTML === 'x' && all[2].innerHTML === 'x') {return alert("Первый игрок выйграл");}
    if(all[3].innerHTML === 'x' && all[4].innerHTML === 'x' && all[5].innerHTML === 'x') {return alert("Первый игрок выйграл");}
    if(all[6].innerHTML === 'x' && all[7].innerHTML === 'x' && all[8].innerHTML === 'x') {return alert("Первый игрок выйграл");}
    if(all[0].innerHTML === 'x' && all[4].innerHTML === 'x' && all[8].innerHTML === 'x') {return alert("Первый игрок выйграл");}
    if(all[2].innerHTML === 'x' && all[4].innerHTML === 'x' && all[6].innerHTML === 'x') {return alert("Первый игрок выйграл");}

    if(all[0].innerHTML === 'o' && all[1].innerHTML === 'o' && all[2].innerHTML === 'o') {return alert("Второй игрок выйграл");}
    if(all[3].innerHTML === 'o' && all[4].innerHTML === 'o' && all[5].innerHTML === 'o') {return alert("Второй игрок выйграл");}
    if(all[6].innerHTML === 'o' && all[7].innerHTML === 'o' && all[8].innerHTML === 'o') {return alert("Второй игрок выйграл");}
    if(all[0].innerHTML === 'o' && all[4].innerHTML === 'o' && all[8].innerHTML === 'o') {return alert("Второй игрок выйграл");}
    if(all[2].innerHTML === 'o' && all[4].innerHTML === 'o' && all[6].innerHTML === 'o') {return alert("Второй игрок выйграл");}


}
