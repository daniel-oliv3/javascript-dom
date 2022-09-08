//1* ======================================================
//let elemento = document.querySelector('#titulo');
//let elemento = document.querySelector('.noticia');
//let elemento = document.querySelector('div');
//let elemento = document.querySelectorAll('div');

/*alterando a cor do texto com javascript*/
//let elemento = document.querySelector('#titulo > i > u');
//elemento.style.color = "gold";


//alterando a cor de fundo
//elemento.style.backgroundColor = "blue";

//console.log(elemento);
/**/



//2* ======================================================
let elemento = document.querySelector(".noticia > h1");


//console.log(elemento.innerText);
//console.log(elemento.innerHTML);

//alterando o texto
//elemento.innerText = "Sapup3 na área!"; //apresenta no console o texto junto com a tag <u></u>

elemento.innerText = "Sapup3 na <u>área!</u>"; //apresenta no console o texto sem tag <u></u>

console.log(elemento.outerHTML);










/**/

