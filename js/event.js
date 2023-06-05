let menu = document.querySelector('#sweeties');
let title = menu.querySelector('.title');

title.onclick = function(){
    menu.classList.toggle('open');
    document.querySelector('.rarr').style.display = 'none';
   
}

let i = 1;
for(let li of carousel.querySelectorAll('li')){
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

let width = 130;
let count = 3;

let list = carousel.querySelector('ul');
let listElem = carousel.querySelectorAll('li');

let position = 0;

carousel.querySelector('.prev').onclick = function(){
    position += width * count;

    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function(){
    position -+ width * count;

    position = Math.max(position, -width * (listElem.length - count));
    list.style.marginLeft = position + 'px';
}
