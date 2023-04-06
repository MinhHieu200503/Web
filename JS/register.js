// regex
let inputName = /^[\S][\S]{7,11}$/; //login name need 8-12 character or number
let inputPass = /^[\S][\S]{7,11}$/

// get input form text

let btn_submit = document.getElementsByClassName('btn_logIN');
// add event
btn_submit[0].addEventListener('click',function(){
    if(checkSubmit()){
        alert("Đăng kí thành công");
    }
    
})

function checkSubmit(){
    let loginText =  document.querySelector('.input_User').value;
    let logInPass = document.querySelector('.input_Pass').value;
    let passAgain = document.getElementById('again_pass').value;
    if(inputName.test(loginText)===false){
        alert("Tên đăng kí không hợp lệ !!! mật khẩu là 8-12 chữ, số, kí tự không gồm dấu cách");
        return false;
    } 
    if(inputPass.test(logInPass)===false){
        alert("Mật khẩu không hợp lệ !!! mật khẩu là 8-12 chữ, số, kí tự không gồm dấu cách");
        return false;
    }
    if(passAgain !== logInPass){
        alert("Mật khẩu nhập lại cần trùng với mật khẩu trên");
        return false;
    }
    return true;
}