
//* ======================================================
//Atributos

let elemento = document.querySelector('h3');

//hasAttribute, verifica se tem ou não atributo
if(elemento.hasAttribute('id')){
    console.log("sim");
}

//getAttribute vai buscar o valor do atributo
console.log(elemento.getAttribute('id'));


//setAttribute permite definir um atributo que o elemento não tem(pop up)
elemento.setAttribute('title', 'Titulo do sumário');


//removeAttribute (removendo a imagem)
//let imagem = document.querySelector('img');
//imagem.removeAttribute('src');


//attributes
let imagem = document.querySelector('img');
//console.log(imagem.attributes);
//console.log(imagem.attributes[0]);
//console.log(imagem.attributes[1]);
//console.log(imagem.attributes['src']);
console.log(imagem.attributes['alt']);



/**/

