document.getElementById("Data").innerHTML= new Date();

document.getElementById("btn-1").onclick = function () {
   // var input = document.getElementById("Data").value;
   // var Textbar = document.getElementById("Textbar").value;
   var Output = new Date().getDay();
   var weeks = ["Sunday","Monday","Tudesday","Wednesday","Thursday","Friday","Saturday"]
   if(Ouput=weeks){
   document.getElementById("Text").innerHTML = weeks[Output];
}}

document.getElementById("btn-2").onclick = function () {
   // var input = document.getElementById("Data").value;
   let Textbar = document.getElementById("Textbar").value;
   let BD = new Date(Textbar);
   console.log(BD)
   let time = new Date();
   console.log(time)
   let Days = time.getTime() - BD.getTime();
   let DoB = Days / (1000 * 60 * 60 * 24);
   let Ouput = Math.floor(DoB);
   document.getElementById("Text").innerHTML = Ouput + " " + "Days have been Passed since you born";
}
document.getElementById("btn-3").onclick = function () {
   // var input = document.getElementById("Data").value;
   let Textbar = document.getElementById("Textbar").value;
   let BD = new Date(Textbar);
   console.log(BD)
   let time = new Date();
   console.log(time)
   let Days = BD.getTime() - time.getTime();
   let DoB = Days / (1000 * 60 * 60 * 24);
   let Ouput = Math.floor(DoB);
   document.getElementById("Text").innerHTML = Ouput + " " + "Days left in Yor Birthday";
}

document.getElementById("btn-4").onclick = function () {
   // var input = document.getElementById("Data").valu
   // var Textbar = document.getElementById("Textbar").value;
   var Name = prompt('Enter Your Name');
   var UName = Name.toUpperCase();
   var time = new Date()
   var result = time.getHours();
   if(result <= 12){
   document.getElementById("Text").innerHTML = "GOOD MORNING"+" "+UName;
}
if(result >= 13){
   document.getElementById("Text").innerHTML = "GOOD EVENING"+" "+UName;
}}

document.getElementById("btn-5").onclick = function () {
   var time = new Date();
   var Hour = time.getHours();
   var Mint = time.getMinutes();
   var Sec = time.getSeconds();
   document.getElementById("Text").innerHTML = "You Click the button at:" + " " +Hour+":"+Mint+":"+Sec;
}

document.getElementById("btn-6").onclick = function () {
   var time = new Date();
   var Hour = time.getHours();
   var Mint = time.getMinutes();
   var Sec = time.getSeconds();
   document.getElementById("Text").innerHTML = "You Click the button at:" + " " +Hour+":"+Mint+":"+Sec;
}

document.getElementById("btn-7").onclick = function () {
   var time = new Date();
   var Hour = time.getHours();
   var Mint = time.getMinutes();
   var Sec = time.getSeconds();
   document.getElementById("Text").innerHTML = "You Click the button at:" + " " +Hour+":"+Mint+":"+Sec;
}

document.getElementById("btn-8").onclick = function(){
   var Input = prompt('Enter Price');
   if(Input >= 1000){
   var tax = 16;
   var Aftertax = Input * tax / 100;
   document.getElementById("Text").innerHTML = "Tax: "+Aftertax;
} else{
   var tax = 8;
   var Aftertax = Input * tax / 100;
   document.getElementById("Text").innerHTML = "Tax: "+Aftertax;
}}

document.getElementById("btn-9").onclick = function(){
   var Input = prompt('Enter Price');
   if(Input >= 1000){
   var tax = 16;
   var Aftertax = Input * tax / 100;
   var Input = Number(Input);
   var Tex = Number(Aftertax);
   var Ouput = Input + Tex
   document.getElementById("Text").innerHTML = Ouput;
} else{
   var tax = 8;
   var Aftertax = Input * tax / 100;
   var Input = Number(Input);
   var Tex = Number(Aftertax);
   Ouput = Input + Tex
   document.getElementById("Text").innerHTML = Ouput;
}}