const opennav = document.querySelector('.burger');
const closenav = document.querySelector('.close');
const items = document.querySelector('.links');

opennav.addEventListener('click',show);
closenav.addEventListener('click',close);

function show(){ 
    items.style.display = 'block';
    opennav.style.display = 'none';
    closenav.style.display = 'block'
}

function close(){ 
    items.style.display = 'none';
    opennav.style.display = 'initial';
    closenav.style.display = 'none'
}