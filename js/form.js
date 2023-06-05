

// function formValidate(){
//     let fname = document.getElementById('firstname').value;
//     let lname = document.getElementById('lastname').value;
//     let email =  document.getElementById('email').value;
//     let error = document.getElementsByTagName('p');

//     if (fname == ''){
//         error[0].style.color = 'red';
//         error[0].innerHTML = 'Please fill up your firstname';
//         //alert('Please fill up your firstname')
//     } else{
//         if(fname.length < 3){
//             error[0].style.color = 'red';
//             error[0].innerHTML = 'length of firtname must be greater than 3'
//            // alert('length of firtname must be greater than 3')
//         }
//     }

//     if (lname == ''){
//         error[1].style.color = 'red';
//         error[1].innerHTML = 'Please fill up your lastname';
//        // alert('Please fill up your lastname')
//     } else{
//         if(lname.length < 3){
//             error[1].style.color = 'red';
//             error[1].innerHTML = 'length of lastname must be greater than 3'
//            //alert('length of lastname must be greater than 3')
//         }
//     }

//     if (email == ''){
//         error[2].style.color = 'red';
//         error[2].innerHTML = 'Please fill up your email';
//         //alert('Please fill up your email')
//     } else{
//         let atpos = email.indexOf('@');
//         let dotpos = email.lastIndexOf('.');

//         if (atpos < 1 || (dotpos - atpos) < 2){
//             error[2].style.color = 'red';
//             error[2].innerHTML = 'Please input a correct email address';
//             //alert('Please input a correct email address')
//          }
//     }
// }


let data = {name:'John Doe', age:40, sex:'Male', nil:'', nbm:67}

function table(){
    let ds = document.getElementById('dd');
    for (let x in data){
        ds.innerHTML += "<td>" +data[x] + "</td>"
    }
}

let num = 0;

document.getElementById('add').innerHTML = num;

function btn() {
  document.getElementById('add').innerHTML = num++;
}

