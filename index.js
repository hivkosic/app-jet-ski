
function add (){
    counter +=1;
    numOfPass.innerHTML=counter;
}

function save() {
    todaysRides.push(counter);
    numOfRides.textContent=`Današnje vožnje (broj putnika): ${todaysRides.join('-')}`;
    // numOfRides.innerHTML+=counter+'-';
    // counter=0;
    // numOfPass.innerHTML=0;
}

function reset (){
    counter=0;
    todaysRides=[]
    numOfPass.innerHTML=counter;
    numOfRides.textContent=`Današnje vožnje (broj putnika): ${counter}`;  
}

let counter = 0;
let todaysRides=[];
let numOfPass=document.getElementById('number-of-passengers');
let numOfRides=document.getElementById('number-of-rides');
