// First Function
function hello() {
    document.write("Hello World")
    
}


// Second Function
function test(name,age) {
    document.write(name , age);
}

// Third Function
function nested(name,age) {
    function inside() {
        document.write(name +" Age is"+ age);
        
    }
    inside()
    
}