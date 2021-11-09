const names = document.querySelectorAll("div.names");
const simpleBtn = document.getElementById('simple')
const inpt = document.getElementById("ipt")

console.log(names)

for (var i = 0; i < names.length; i++) {  
    names[i].addEventListener('click', function(event) {
        alert(`Hello my name is ${names[i].innerHTML}`)
    });
}

// Grid 3 Image 
const img = document.getElementById('image');
function onM(){
    img.style.backgroundImage =" url('./car.jpg')"
}

function onOut(){
    img.style.backgroundImage = "url('./flower.jpg')"
}
// Grid 3 Click Button
function clicked(){
    alert("You Clicked ME!")
}

// Grid 3 3rd Div Stop typing 
function preventType(){
    alert('Sorry you cannot type here');
    setTimeout(() => {
        inpt.value = ""
    }, 500);
}