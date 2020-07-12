function choose(){
  document.getElementById("random").innerHTML="";
document.getElementById("second").innerHTML="";
document.getElementById("reform").innerHTML="";
document.getElementById("form").innerHTML="";


var x= document.getElementById("choose").value;
var message="";
if(x=='English')
{
message="Form a sentence (Declarative or Interrogative or any other type) from the given words<br>(select the buttons in proper order)";
﻿var  english= [
    ['John', 'ate', 'an', 'apple', 'before', 'afternoon'],
    ['some', 'students', 'like', 'to', 'study', 'at', 'night'],
    ['John', 'and', 'Mary', 'went', 'to', 'church'],
    ['John', 'went', 'to', 'church', 'after', 'eating'],
    ['did', 'he', 'go', 'to', 'market'],
    ['the', 'woman', 'who', 'called', 'my', 'sister', 'sells', 'cosmetics'],
    ['John', 'goes', 'to', 'the', 'library', 'and', 'studies'],
    ['John', 'ate', 'an', 'apple', 'so', 'did', 'she'],
    ['the', 'teacher', 'returned', 'the', 'book', 'after', 'she', 'noticed', 'the', 'error'],
    ['I', 'told', 'her', 'that', 'I', 'bought', 'a', 'book', 'yesterday']
];

var index= english[Math.floor(Math.random() * english.length)];
var shuffle= shuffles(index);
for (var i = 0; i < shuffle.length; i++) {
document.getElementById("random").innerHTML += "<button id='"+i+"' class='wordBtn' onclick='my("+i+")'>" + shuffle[i] + "</button>";
}
}
else if(x=='Hindi'){
message="Form a sentence (Declarative or Interrogative or any other type) from the given words <br>(select the buttons in proper order)";

var hindi= [
    ['राम', 'और', 'श्याम', 'बाजार', 'गयें'],
    ['राम', 'सोया', 'और', 'श्याम', 'भी'],
    ['मैंने', 'उसे', 'बताया', 'कि', 'राम', 'सो', 'रहा', 'है'],
    ['राम', 'खाकर', 'सोया'],
    ['बिल्लियों', 'को', 'मारकर', 'कुत्ता', 'सो', 'गया'],
    ['एक', 'लाल', 'किताब', 'वहाँ', 'है'],
    ['एक', 'बड़ी', 'सी', 'किताब', 'वहाँ', 'है']
];

var index= hindi[Math.floor(Math.random() * hindi.length)];
var shuffle= shuffles(index);
for (var i = 0; i < shuffle.length; i++) {
document.getElementById("random").innerHTML += "<button id='"+i+"' class='wordBtn' onclick='my("+i+")'>" + shuffle[i] + "</button>";
}
}
document.getElementById("displayText").innerHTML=message;
}
function my(x) {
document.getElementById("second").innerHTML="Formed Sentence (after selecting words):";	
  var y = document.getElementById(x);
    y.style.display = "none";
   document.getElementById("form").innerHTML= document.getElementById(x).textContent;
   document.getElementById("reform").innerHTML= "<button>"+"Re-form the sentence"+"</button>"
  }
function shuffles(arr)
{
var len=arr.length;
var t; 
var i;
while(len>0)
{
  i=Math.floor(Math.random() * len);
  len--;
  t=arr[len];
  arr[len]=arr[i];
arr[i]=t;
}
return arr;
}



















		