function cheSS(){

    function blaCk(){
        for(i=1; i<9; i++){
            var a=document.createElement("div");
            chess_desk.appendChild(a);
            if(i%2==0){
                a.className='black';


            }else{a.className='white';}
        }

    }

    function whiTe(){
        for(y=0; y<8; y++){
            var a=document.createElement("div");
            chess_desk.appendChild(a);

            if(y%2!=0){
                a.className='white white#';

            }else{
                a.className='black';

            }
        }
    }
    for ( var j=1; j<=8 ;j++){
        if(j%2==0){
            blaCk();

        }
        else {
            whiTe();
        }



    }
}
cheSS();
