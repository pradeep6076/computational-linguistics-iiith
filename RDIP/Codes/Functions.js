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
var sh1=[["राम", "और", "श्याम", "बाजार", "गयें"],["राम", "और", "श्याम", "गयें", "बाजार"],["बाजार", "गयें", "राम", "और", "श्याम"],["गयें", "बाजार", "राम", "और", "श्याम"]]
var sh2=[["राम", "सोया", "और", "श्याम", "भी"],["श्याम", "सोया", "और", "राम", "भी"],["सोया", "श्याम", "और", "राम", "भी"],["सोया", "राम", "और", "श्याम", "भी"]]
var sh3=[['मैंने', 'उसे', 'बताया', 'कि', 'राम', 'सो', 'रहा', 'है'],['मैंने', 'उसे', 'बताया', 'कि', 'सो', 'रहा', 'है', 'राम'],['उसे', 'मैंने', 'बताया', 'कि', 'राम', 'सो', 'रहा', 'है'],['उसे', 'मैंने', 'बताया', 'कि', 'सो', 'रहा', 'है', 'राम'],['मैंने', 'बताया', 'उसे', 'कि', 'राम', 'सो', 'रहा', 'है'],['मैंने', 'बताया', 'उसे', 'कि', 'सो', 'रहा', 'है', 'राम'],['उसे', 'बताया', 'मैंने', 'कि', 'राम', 'सो', 'रहा', 'है'],['उसे', 'बताया', 'मैंने', 'कि', 'सो', 'रहा', 'है', 'राम'],['बताया', 'मैंने', 'उसे', 'कि', 'राम', 'सो', 'रहा', 'है'],['बताया', 'मैंने', 'उसे', 'कि', 'सो', 'रहा', 'है', 'राम'],['बताया', 'उसे', 'मैंने', 'कि', 'राम', 'सो', 'रहा', 'है'],['बताया', 'उसे', 'मैंने', 'कि', 'सो', 'रहा', 'है', 'राम']];
var sh4=[['राम', 'खाकर', 'सोया'],['खाकर', 'राम', 'सोया'],['राम', 'सोया', 'खाकर'],['खाकर', 'सोया', 'राम'],['सोया', 'राम', 'खाकर'],['सोया', 'खाकर', 'राम']];
var sh5=[['बिल्लियों', 'को', 'मारकर', 'कुत्ता', 'सो', 'गया'],['मारकर', 'बिल्लियों', 'को', 'कुत्ता', 'सो', 'गया'],['बिल्लियों', 'को', 'मारकर', 'सो', 'गया', 'कुत्ता'],['मारकर', 'बिल्लियों', 'को', 'सो', 'गया', 'कुत्ता'],['कुत्ता', 'सो', 'गया', 'बिल्लियों', 'को', 'मारकर'],['कुत्ता', 'सो', 'गया', 'मारकर', 'बिल्लियों', 'को'],['सो', 'गया', 'कुत्ता', 'बिल्लियों', 'को', 'मारकर'],['सो', 'गया', 'कुत्ता', 'मारकर', 'बिल्लियों', 'को']];
var sh6=[['एक', 'लाल', 'किताब', 'वहाँ', 'है'],['एक', 'लाल', 'किताब', 'है', 'वहाँ'],['वहाँ', 'है', 'एक', 'लाल', 'किताब'],['है', 'वहाँ', 'एक', 'लाल', 'किताब']];
var sh7=[['एक', 'बड़ी', 'सी', 'किताब', 'वहाँ', 'है'],['एक', 'बड़ी', 'सी', 'किताब', 'है', 'वहाँ'],['बड़ी', 'सी', 'एक', 'किताब', 'वहाँ', 'है'],['बड़ी', 'सी', 'एक', 'किताब', 'है', 'वहाँ'],['वहाँ', 'है', 'एक', 'बड़ी', 'सी', 'किताब'],['वहाँ', 'है', 'बड़ी', 'सी', 'एक', 'किताब'],['है', 'वहाँ', 'एक', 'बड़ी', 'सी', 'किताब'],['है', 'वहाँ', 'बड़ी', 'सी', 'एक', 'किताब']];
var hindiArray=[sh1,sh2,sh3,sh4,sh5,sh6,sh7];
var correctSentences=[];
var finalSentence="";
function choose(){
  document.getElementById("random").innerHTML="";
document.getElementById("second").innerHTML="";
document.getElementById("reform").innerHTML="";
document.getElementById("form").innerHTML="";
document.getElementById("wrong").innerHTML="";
document.getElementById("correct").innerHTML="";
document.getElementById("getAnswer").innerHTML="";
document.getElementById("list").innerHTML="";
document.getElementById("hide").innerHTML="";
document.getElementById("getAnswer1").innerHTML="";


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
document.getElementById("wrong").innerHTML="";
document.getElementById("correct").innerHTML="";
document.getElementById("getAnswer").innerHTML="";
document.getElementById("correctnessBtn").innerHTML="";
document.getElementById("list").innerHTML="";
document.getElementById("hide").innerHTML="";
document.getElementById("getAnswer1").innerHTML="";

	
for (var i = 0; i < shuffle.length; i++) {
document.getElementById("random").innerHTML += "<button id='"+i+"' class='wordBtn' onclick='my("+i+")'>" + shuffle[i] + "</button>";
	}
}

function check(){
var language=document.getElementById("choose").value;

var flag=false;
if(language=='English'){
	
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
}
if(language=='Hindi'){
	
for(var x=0; x<hindiArray.length; x++){
if(flag==true){
break;
} else{
for(var y=0; y<hindiArray[x].length; y++){
if(flag==true){
break;
} else{
for(var j=0; j<hindiArray[x][y].length; j++){

if(display[j] == hindiArray[x][y][j]){
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
}

if(flag == true){
document.getElementById("wrong").innerHTML="";
document.getElementById("correct").innerHTML="Correct answer"+" "+"<i class='fa fa-smile-o' aria-hidden='true'></i>";
} else{
document.getElementById("correct").innerHTML="";
document.getElementById("wrong").innerHTML="Wrong answer"+" "+"<i class='fa fa-frown-o' aria-hidden='true'></i>";
document.getElementById("getAnswer").innerHTML="<button class='correctAnsBtn' onclick='get()'>"+"GET CORRECT SENTENCE"+"</button>";

}
}
function get(){
  correctSentences=[];
  var count=0;
  var isFound=false;
 var answerExists= document.getElementById("list").textContent;
var languageArray=document.getElementById("choose").value;

if(languageArray == 'English'){
if(answerExists == ""){ 
  for(var k=0; k<englishArray.length+1; k++)
   
  {
	
if(isFound==true && count== englishArray[k-1][0].length)
   {
         
	var z = k;
          
if (z==1)
         {
	for(p=0; p<englishArray[z-1].length;p++)
            {
                 correctSentences[p]=(englishArray[z-1][p]);
                  
               }
            }
		if (z>1)
           {
			for(p=0; p<englishArray[z-1].length;p++)
               {
                  correctSentences[p]=(englishArray[k-1][p]);
                
               }
                   
            }
         
            break;
        }
      for(var i=0; i<display.length; i++)
		{
            
            isFound=englishArray[k][0].includes(display[i]);
            //alert("inside for loop :"+ i +": is found flag "+isFound);
			if(isFound==true)
            {
              count++;
              
            }

            if(isFound==false)
            {
              count= 0;
              break;
              
            }

          }
}
  //alert(correctSentences[0]);
    //alert(correctSentences[1]);

  //alert(correctSentences);
  for(j=0; j<correctSentences.length;j++)
  {
	//alert("Found correct sentences :"+correctSentences[j]);
    document.getElementById("list").innerHTML+=correctSentences[j].join(" ")+"<br>";
  }
  document.getElementById("hide").innerHTML="<button class='hide' onclick='hideAnswers()'>"+ "hide the correct sentence" + "</button>";
  document.getElementById("getAnswer").innerHTML="";
}
}

if(languageArray == 'Hindi'){
if(answerExists == ""){ 
  for(var k=0; k<hindiArray.length+1; k++)   
  {
	
	if(isFound==true && count== hindiArray[k-1][0].length)
        {
          //alert(" found is true and the first value of K is :"+k);
			var z = k;
          //alert("value of z is set to :" +z);
		if (z==1)
           {
			for(p=0; p<hindiArray[z-1].length;p++)
               {
                  correctSentences[p]=(hindiArray[z-1][p]);
                  //alert("Inside for loop to get correctSentences when z=1 and loop number is :"+p+"  : and the value of correctSentences is ; "+correctSentences);
                  //alert("value of z is :"+z);
               }
            }
		if (z>1)
           {
			for(p=0; p<hindiArray[z-1].length;p++)
               {
                  correctSentences[p]=(hindiArray[k-1][p]);
                 // alert("Inside for loop to get correctSentences when z>1 and p loop number is :"+p+"  : and the value of correctSentences is ; "+correctSentences);
                  //alert("value of z is :"+z);
               }
                   
            }
         
            break;
        }
      	for(var i=0; i<display.length; i++)
		{
            //alert("Inside for loop and the first element of englishArray is : "+englishArray[k][0]);
            //alert("inside for loop :"+ i +": and displayArray element is :"+displayArray[i]);
            isFound=hindiArray[k][0].includes(display[i]);
            //alert("inside for loop :"+ i +": is found flag "+isFound);
			if(isFound==true)
            {
              count++;
              //alert("Increasing Count : "+ count);
            }

            if(isFound==false)
            {
              count= 0;
              break;
              
            }

          }
}
  //alert(correctSentences[0]);
    //alert(correctSentences[1]);

  //alert(correctSentences);
  for(j=0; j<correctSentences.length;j++)
  {
	//alert("Found correct sentences :"+correctSentences[j]);
    document.getElementById("list").innerHTML+=correctSentences[j].join(" ")+"<br>";
  }
 document.getElementById("hide").innerHTML="<button class='hide' onclick='hideAnswers()'>"+ "hide the correct sentence" + "</button>";
  document.getElementById("getAnswer").innerHTML="";
}	
}
}

function hideAnswers(){
	var x=document.getElementById("list");
	x.style.display="none";
	document.getElementById("hide").innerHTML="";
	document.getElementById("getAnswer1").innerHTML="<button class='correctAnsBtn' onclick='showAnswers()'>"+"Get Answers"+"</button>";
}

function showAnswers(){
	var v=document.getElementById("list");
	v.style.display="block";
	document.getElementById("getAnswer1").innerHTML="";
  document.getElementById("hide").innerHTML="<button class='hide' onclick='hideAnswers()'>"+ "hide the correct sentence" + "</button>";

}



















		
