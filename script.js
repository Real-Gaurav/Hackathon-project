function generateID(){

let name=document.getElementById("name").value;
let role=document.getElementById("role").value;
let ngo=document.getElementById("ngo").value;

if(name=="" || role=="" || ngo==""){
alert("Please fill all fields");
return;
}

document.getElementById("card").style.display="block";

document.getElementById("staffDetails").innerHTML=
"Name: "+name+"<br>"+
"Role: "+role+"<br>"+
"NGO: "+ngo;

startDynamicQR(name,role,ngo);

}

function startDynamicQR(name,role,ngo){

function updateQR(){

let timestamp=Math.floor(Date.now()/30000); 
// changes every 30 seconds

let verifyURL=
"https://real-gaurav.github.io/Hackathon-project/verify.html?name="
+encodeURIComponent(name)
+"&role="+encodeURIComponent(role)
+"&ngo="+encodeURIComponent(ngo)
+"&token="+timestamp;

document.getElementById("qrcode").innerHTML="";

new QRCode(document.getElementById("qrcode"),verifyURL);

}

updateQR();

setInterval(updateQR,30000);
let seconds=30;

setInterval(function(){

seconds--;

document.getElementById("timer").innerText=
"QR refreshes in "+seconds+"s";

if(seconds<=0){
seconds=30;
}

},1000);
}
