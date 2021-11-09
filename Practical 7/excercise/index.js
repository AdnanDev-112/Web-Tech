const names = document.querySelectorAll("div.names");
const inpt = document.getElementById("ipt") ;
const box1 = document.getElementById("box1") ;
const box4 = document.getElementById("box4") ;



const nameList = [];
for (let i = 0; i < names.length; i++) { 
    nameList.push( names[i].innerHTML);         
    names[i].addEventListener('click', function() {
        alert(`Hello my name is ${nameList[i]}`);
    });
}

// Grid 3 Image 
const img = document.getElementById('image');
function onM(){
    img.style.backgroundImage = "url('./car.jpg')"
}

function onOut(){
    img.style.backgroundImage = "url('./flower.jpg')"
}


// Grid 3 3rd Div Stop typing 
function preventType(){
    alert('Sorry you cannot type here');
    setTimeout(() => {
        inpt.value = ""
    }, 1);
}


// Grid Box 1 && 4 Click Events
function colorClick1(){
    alert("You have clicked Red Color");
}

function colorClick2(){
    alert("You have clicked Orange Color");
}
function colorClick3(){
    alert("You have clicked Green Color");
}