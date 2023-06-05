// // let colors = ['red','green','yellow', 'blue','magenta','cyan', 'white'];


// // const randomNum = () => {
// //     let rndnum = Math.floor(Math.random() * 7);
// //     return rndnum;
// // }


// // const mycolor = () =>{
// //     let div = document.querySelectorAll('div');
// //     for(let i = 0; i <= div.length-1; i++){
// //         div[i].style.background = colors[randomNum()];
// //     }

// // }

// // setInterval(mycolor, 2000)

// // let ptag = document.querySelectorAll('p');
// //  for (let x of ptag){
// //     x.setAttribute('class', 'txthead')
// //  }

// //Dom Manipulation

// let div = document.createElement('div');
// div.className = 'alert';
// div.innerHTML = "<strong>Hi there!</strong> You've read an important message."

// document.body.append(div)

// let p = document.createElement('p');
// p.innerHTML = 'Hi there';
// document.querySelector('h1').append(p);

// ol.before('Number List');
// ol.after('After List items');

// let li = document.createElement('li');
// li.innerHTML = 'prepending'
// ol.prepend(li)

// //Write an interface to create a list from user input.
// //For every list item:
// //Ask a user about its content using prompt.
// ////Create the <li> with it and add it to <ul>.
// //Continue until the user cancels the input 
// //(by pressing Esc or via an empty entry).
// //All elements should be created dynamically.

// let task = prompt('Enter task');
// let ul = document.createElement('ul')
// document.body.append(ul)
// while(task){
//     let li = document.createElement('li');
//     li.innerHTML = task;
//     ul.append(li);
//     task = prompt('Enter task');lovers
// }


// setTimeout(()=> div.remove(), 3000);
//document.body.className = 'loading';
// alert(document.body.className);

// document.body.classList.add('loading');

// alert(document.body.className);

// document.body.classList.remove('main-page');

// alert(document.body.className)

// document.body.classList.toggle('main-page')
// alert(document.body.className)

//Write a function showNotification(options) that creates a 
//notification: <div class="notification"> with the given content. 
//The notification should automatically disappear after 1.5 seconds.

//The options are:

// shows an element with the text "Hello" near the right-top of the window
//showNotification({
  //top: 10, // 10px from the top of the window (by default 0px)
 // right: 10, // 10px from the right edge of the window (by default 0px)
    //html: "Hello!", // the HTML of notification
  //className: "welcome" // an additional class for the div (optional)
//});

//Use CSS positioning to show the element at given top/right coordinates. 

const showNotification = (options)=>{
    //let {top, right, html, className} = options;
    let div = document.createElement('div');
    div.className = options.className;
    div.classList.toggle('notification');
    div.innerHTML = options.html;
    div.style.position = 'absolute';
    div.style.right = options.right + 'px';
    div.style.top = options.top + 'px';
    div.style.backgroundColor = '#fff';
    div.style.color='red';
    div.style.fontSize = '30px'
    document.body.append(div);

}

showNotification({top: 10, right: 10, html:'Hello!', className:'welcome'}  );

const countRabbitsHandler = ()=>{
    for(let i=1; i<=3; i++){
        alert("Rabbit number " + i);
    }
}

// elem.onclick= function(){
//     alert('Thank You');
// }



//element.addEventListener(event, handler)
//element.removeEventListener(event, handler)

// elem.addEventListener("click", ()=> alert('Thanks!'));
// elem.removeEventListener("click", ()=> alert('Thanks!'));

// function handler(){
//     alert('Thanks');
// }

// elem.addEventListener("click", handler);
// elem.removeEventListener("click", handler);

function handler1(){
        alert('Thanks');
    }
    function handler2(){
        alert('Thanks Again');
    }

elem.onclick = () => alert("Hello");
elem.addEventListener("click", handler1);
elem.addEventListener("click", handler2)

//Add JavaScript to the button to make <div id="text"> disappear when we click it.

//Create a button that hides itself on click.

//Create a menu that opens/collapses on click:

//There’s a list of messages.
//Use JavaScript to add a closing button to the right-upper corner of each message.

//Create a “carousel” – a ribbon of images that can be scrolled by clicking on arrows.