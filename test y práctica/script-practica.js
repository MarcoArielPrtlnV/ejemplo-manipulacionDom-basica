const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafoClase = document.getElementsByClassName('parrafoClase');
const parrafoId = document.getElementById('parrafoId');
const input = document.querySelector('input');

console.log(input.value);


console.log({
    h1,
    p,
    parrafoClase,
    parrafoId,
    input
});


h1.innerHTML = 'Cambiando contenido del h1';
p.innerHTML = 'Cambiando contenido del párrafo';

console.log(h1.getAttribute('class')); 

h1.setAttribute('class', 'otroAtributo');


h1.classList.add('header');
h1.classList.remove('otroAtributo');

const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/2159106/pexels-photo-2159106.jpeg?auto=compress&cs=tinysrgb&w=600');
console.log(img);


parrafoId.innerHTML = '';
parrafoId.appendChild(img);


