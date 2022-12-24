import { ipa } from './main.js';
    let val= ipa();

function sendDetails(){
    var formElement=document.getElementById("home-form");
    var uid=document.getElementById("uid").value;
    var nameValue=document.getElementById("username").value;
    var emailValue=document.getElementById("email").value;
    var noValue=document.getElementById("contact").value;
    var pwdValue=document.getElementById("pwd").value;
    var addrValue=document.getElementById("address").value;
    var pinValue=document.getElementById("pincode").value;

    var user = {};
    user['uid']=uid;
    user['username']=nameValue;
    user['email']=emailValue;
    user['contact']=noValue;
    user['pwd']=pwdValue;
    user['address']=addrValue;
    user['pincode']=pinValue;

    let option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body : JSON.stringify(user)
    }

    let fetchRes=fetch("${val}:8080/lmsl",option);
    fetchRes.then(res =>res.json()).then(d => {
        console.log(d)
    })
    alert("Registration Successful!")
}