function add (){
    counter +=1;
    numOfPass.innerHTML=counter;
}

function save() {
    numOfRides.textContent+=counter+'-';
    counter=0;
    numOfPass.innerHTML=0;
}

function reset (){
    counter=0;
    numOfPass.innerHTML=0;
    numOfRides.textContent='Današnje vožnje (broj putnika): ';
}

let counter = 0;

let numOfPass=document.getElementById('number-of-passengers');
let numOfRides=document.getElementById('number-of-rides');
// let addBtn=document.getElementById('add-btn');

// document.getElementById('save-btn');
// document.getElementById('reset-btn');

