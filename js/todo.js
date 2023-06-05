import {gat} from './test.js'
let ul = document.querySelector('#items');
let btn = document.querySelector('#btn');
let input = document.querySelector('#input');
let h1 = document.querySelector('h1');
let div;
// let item;


const inputHandler = () => {
    return input.value;
}

const notify = ()=>{
    div = document.createElement('div');
    div.className = 'notify';
    div.innerHTML = `<strong>Hi there!</strong> ${inputHandler()} has been added to your list`;
    return h1.before(div);
}

const addHandler = ()=>{
    let li = document.createElement('li');
    li.className = 'item';
    li.innerHTML = inputHandler();
    ul.append(li)
    notify()
    input.value = '';

    setTimeout(()=> div.remove(), 2000);
    
}




// const removeHandler = ()=>{
//     item = document.querySelector('.item');
//     item.remove()
// }

// item.addEventListener('click', removeHandler);

console.log(gat)