import { ipa } from './main.js';
    let val= ipa();

function orderDetails(){

    var reqform=document.getElementById("req-form");
    
    var uid=document.getElementById("uid").value;
    var pdateValue=document.getElementById("pdate").value;
    var ddateValue=document.getElementById("ddate").value;
    var tWearValue=document.getElementById("tWear").value;
    var bWearValue=document.getElementById("bWear").value;
    var sareeValue=document.getElementById("saree").value;
    var wclothValue=document.getElementById("wcloth").value;
    var otherValue=document.getElementById("other").value;
    var serviceValue=document.getElementById("service").value;
    var descrValue=document.getElementById("descr").value;

    var order={};
    order['uid']=uid;
    order['pdate']=pdateValue;
    order['ddate']=ddateValue;
    order['tWear']=tWearValue;
    order['bWear']=bWearValue;
    order['saree']=sareeValue;
    order['wcloth']=wclothValue;
    order['other']=otherValue;
    order['service']=serviceValue;
    order['descr']=descrValue;

     let optionOr={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body : JSON.stringify(order)
        }
    let fetchOrder=fetch("${val}:8080/lmso",optionOr);
    fetchOrder.then(res =>res.json()).then(o => {
        console.log(o)
    })
    alert("Order Accepted");
}