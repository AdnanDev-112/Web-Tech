function validate() {
    var username = document.getElementById('usrname');
    var password = document.getElementById('passwd');

    // if(username.value.trim() == "" || password.value.trim() == "" ){
    //     alert('Please Enter Valid Username and Password ');
    //     return false;

    // }else{
    //     return true
    // }


    if(username.value.trim() == ""){
        document.getElementById('lbl1').style.display = "inline-block";
        username.style.border = "2px solid red"
        return false
    }
    else if( password.value.trim().length < 5){
        alert('Password is too Short ')
        return false ;
    }
    else{
        return true
    }
}