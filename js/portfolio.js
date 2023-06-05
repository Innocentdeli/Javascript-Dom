let h1 = document.querySelector('.header-main');
let exx = document.querySelector('.experience');
let cont = document.querySelector('.header-new-container');
let work = document.querySelector('.header-main-link');
let section = document.querySelector('.section');

const mouseoverHandler = ()=>{
    cont.style.transform = 'translateY(0)';
    cont.style.opacity = '1';
    h1.style.opacity = '0';
}
work.addEventListener('mouseover', mouseoverHandler );

section.addEventListener('mouseover', function(){
    if(cont.style.opacity == '1'){
        cont.style.transform = 'translateY(59rem)';
        cont.style.opacity = '0';
        h1.style.opacity = '1';
    }
})