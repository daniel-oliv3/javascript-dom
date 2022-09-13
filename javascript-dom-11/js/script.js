/*1==================================================*/

let div = document.querySelector('.container');

/*
//Adicionando texto antes da div
div.before('AAAA');

//Adicionando dentro do  div, mais no inicio
div.prepend('BBBBB');

//Adicionando dentro do  div, mais no fim
div.append('CCCCC');


//Adicionando depois da div
div.after('DDDDD');

*/

let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');
let p4 = document.createElement('p');
p1.innerText = 'Parágrafo 1';
p2.innerText = 'Parágrafo 2';
p3.innerText = 'Parágrafo 3';
p4.innerText = 'Parágrafo 4';


//colocar o paragrafo antes do div
div.before(p1);

div.prepend(p2);

div.append(p3);

div.after(p4);







/**/

















