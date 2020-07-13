var shuffle="";
var display=[];
var se1=[["John", "ate", "an", "apple", "before", "afternoon"],["before", "afternoon", "John", "ate", "an", "apple"],["John", "before", "afternoon", "ate", "an", "apple"]];
var se2=[["some", "students", "like", "to", "study", "at", "night"],["at", "night", "some", "students", "like", "to", "study"]];
var se3=[["John", "and", "Mary", "went", "to", "church"],["Mary", "and", "John", "went", "to", "church"]];
var se4=[["John", "went", "to", "church", "after", "eating"],["after", "eating", "John", "went", "to", "church"],["John", "after", "eating", "went", "to", "church"]];
var se5=[["did", "he", "go", "to", "market"],["he", "did", "go", "to", "market"]];
var se6=[["the", "woman", "who", "called", "my", "sister", "sells", "cosmetics"],["the", "woman", "who", "sells", "cosmetics", "called", "my", "sister"],["my", "sister", "who", "sells", "cosmetics", "called", "the", "woman"],["my", "sister", "who", "called", "the", "woman", "sells", "cosmetics"]];
var se7=[["John", "goes", "to", "the", "library", "and", "studies"],["John", "studies", "and", "goes", "to", "the", "library"]];
var se8=[["John", "ate", "an", "apple", "so", "did", "she"],["she", "ate", "an", "apple", "so", "did", "John"]];
var se9=[["the", "teacher", "returned", "the", "book", "after", "she", "noticed", "the", "error"],["the", "teacher", "noticed", "the", "error", "after", "she", "returned", "the", "book"],["after", "the", "teacher", "returned", "the", "book", "she", "noticed", "the", "error"],["after", "the", "teacher", "noticed", "the", "error", "she", "returned", "the", "book"],["she", "returned", "the", "book", "after", "the", "teacher", "noticed", "the", "error"],["she", "noticed", "the", "error", "after", "the", "teacher", "returned", "the", "book"],["after", "she", "returned", "the", "book", "the", "teacher", "noticed", "the", "error"],["after", "she", "noticed", "the", "error", "the", "teacher", "returned", "the", "book"]];
var se10=[["I", "told", "her", "that", "I", "bought", "a", "book", "yesterday"],["I", "told", "her", "yesterday", "that", "I", "bought", "a", "book"],["yesterday", "I", "told", "her", "that", "I", "bought", "a", "book"],["I", "bought", "a", "book", "that", "I", "told", "her", "yesterday"],["I", "bought", "a", "book", "yesterday", "that", "I", "told", "her"],["yesterday", "I", "bought", "a", "book", "that", "I", "told", "her"]];
var englishArray=[se1,se2,se3,se4,se5,se6,se7,se8,se8,se9,se10];
var finalSentence="";
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
display=[];
document.getElementById("correctnessBtn").innerHTML="";

var index= english[Math.floor(Math.random() * english.length)];
 shuffle= shuffles(index);
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
display=[];
document.getElementById("correctnessBtn").innerHTML="";

var index= hindi[Math.floor(Math.random() * hindi.length)];
 shuffle= shuffles(index);
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
display.push(document.getElementById(x).textContent);
finalSentence= display.join(' ');
document.getElementById("form").innerHTML= finalSentence;

   
   document.getElementById("reform").innerHTML= "<button id='reform' onclick='resets()'>"+"Re-form the sentence"+"</button>"
    if(display.length == shuffle.length){
    			document.getElementById("correctnessBtn").innerHTML = "<button class='correctBtn' onclick='check()'>" +"Check correctness of the sentence"+ "</button>";
    }

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
function resets()
{
display=[];
document.getElementById("random").innerHTML="";
document.getElementById("second").innerHTML="";
document.getElementById("reform").innerHTML="";
document.getElementById("form").innerHTML=""; 
for (var i = 0; i < shuffle.length; i++) {
document.getElementById("random").innerHTML += "<button id='"+i+"' class='wordBtn' onclick='my("+i+")'>" + shuffle[i] + "</button>";
	}
}

function check(){

var flag=false;
for(var x=0; x<englishArray.length; x++){
if(flag==true){
break;
} else{
for(var y=0; y<englishArray[x].length; y++){
if(flag==true){
break;
} else{
for(var j=0; j<englishArray[x][y].length; j++){

if(display[j] == englishArray[x][y][j]){
flag=true;
} else{
flag=false;
break;
}
}
}
}
}
}
if(flag == true){
document.getElementById("wrongA").innerHTML="";
document.getElementById("correctA").innerHTML="Correct answer"+" "+"<i class='fa fa-smile-o' aria-hidden='true'></i>";
} else{
document.getElementById("correctA").innerHTML="";
document.getElementById("wrongA").innerHTML="Wrong answer"+" "+"<i class='fa fa-frown-o' aria-hidden='true'></i>";
}
}



















		
