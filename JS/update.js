import { ipa } from './main.js';
    let val= ipa();
    
function updateDetails(){
    var formElement=document.getElementById("home-form");

    var user_idV=document.getElementById("user_id").value;
    var nameValue=document.getElementById("username").value;
    var emailValue=document.getElementById("email").value;
    var noValue=document.getElementById("contact").value;
    var pwdValue=document.getElementById("pwd").value;
    var addrValue=document.getElementById("address").value;
    var pinValue=document.getElementById("pincode").value;

    var update = {};
    update['user_id']=user_idV;
    update['username']=nameValue;
    update['email']=emailValue;
    update['contact']=noValue;
    update['pwd']=pwdValue;
    update['address']=addrValue;
    update['pincode']=pinValue;

    let optionUp = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    body : JSON.stringify(update)
    }

    let fetchUp=fetch("${val}:8080/lmsl",optionUp);
    fetchUp.then(res =>res.json()).then(u => {
        console.log(u)
    })
    alert("Details updates succesfully!")
}	