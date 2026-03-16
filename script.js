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

let verifyURL=
"https://real-gaurav.github.io/Hackathon-project/verify.html?name="
+encodeURIComponent(name)
+"&role="+encodeURIComponent(role)
+"&ngo="+encodeURIComponent(ngo);

document.getElementById("qrcode").innerHTML="";

new QRCode(document.getElementById("qrcode"),verifyURL);

}
