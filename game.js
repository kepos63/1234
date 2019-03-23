var mass = [ 1, 2 , 3, 4, 5 , 6, 7 , 8, 9 ]//добавить элемент в центр массива
var num;
var newmass;
var i;

//console.log(mass.length);

num=((mass.length/2));
if(mass.length%2==0){

    num=((mass.length/2));
    i==2;
} else {num=((mass.length/2));
    i=num;}



mass.splice(num, 1, 'g') ;

//console.log(num);
console.log(mass);


console.log(/n);

var a;//пирамида
var d = "";
for (a = 0; a < 20; a++) {

    d+="x"
    console.log(d);
}

console.log(/n);

var i;//for без тела

for(i = 0;  i < 10 ; i++) console.log(i);

console.log(/n);
var i=0;//простые числа
while(i<100){

    if(i>1&&i%2!=0){
        console.log(i);
    }
    i++;
}
console.log(/n);
var a=0;//Четные и нечетные числа



do{

    if (a==0){
        console.log('число '+a+' = ноль');
    }else if(a%2==0){
        console.log('число '+a+'  четное');
    }else{
        console.log('число '+a+' нечетное');
    }
    a++;
} while(a<=10);

