let ageTable = document.getElementById('age-table');
ageTable.style.background = 'red';
ageTable.style.border = '3px solid gray';

let label = document.querySelectorAll('label');
for(let i=0; i<label.length; i++){
    label[i].style.fontSize = '20px';
    label[i].style.color = 'purple';
}

let age = document.querySelector('td');
age.style.fontWeight = 'bolder';

let form = document.querySelector('form[name="search"]');
form.style.background = '#12ab34'

let input1 = form.querySelector('input');
input1.style.background = '#000000';
input1.style.border = '3px solid red';
input1.style.borderRadius = '50px';

let linput = document.querySelector('input[name="info2"]');
linput.style.background = '#ff12ff';
linput.style.border = '3px dashed #ffffff';
linput.style.borderRadius = '50px';


