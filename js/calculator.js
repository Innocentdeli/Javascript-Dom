function Solve(val){
    let resp = document.getElementById('resp');
    resp.value += val;
}

function Result(){
    let num1 = document.getElementById('resp').value;
    let num2 = eval(num1)
    document.getElementById('resp').value = num2;
}

function Clear(){
    let inp = document.getElementById('resp');
    inp.value = '';
}

function Back(){
    let bck = document.getElementById('resp');
    bck.value = bck.value.slice(0, -1);
}