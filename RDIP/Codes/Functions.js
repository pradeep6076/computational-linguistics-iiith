function check()
{
  var English =
    '{"english":[' +
    '{"a":"John ate an apple before afternoon <br>","b":"before afternoon John ate an apple <br>","c":"John before afternoon ate an apple <br>" },' +
    '{"a":"some students like to study in the night<br>","b":"at night some students like to study" },' +
    '{"a":"John and Mary went to church <br>","b":"Mary and John went to church" },' +
    '{"a":"John went to church after eating <br>","b":"after eating John went to church <br>" ,"c":"John after eating went to church"},' +
    '{"a":"John ate an apple so did she <br>","b":"she ate an apple so did John" },' +
    '{"a":"John goes to the library and studies <br>","b":"John studies and goes to the library<br>" },' +
    '{"a":"the teacher returned the book after she noticed the error <br>","b":"the teacher noticed the error after she returned the book<br>","c":"after the teacher returned the book she noticed the error<br>","d":"after the teacher noticed the error she returned the book<br>","e":"she returned the book after the teacher noticed the error<br>","f":"she noticed the error after the teacher returned the book<br>","g":" after she returned the book the teacher noticed the error<br>","h":" after she noticed the error the teacher returned the book<br>"},' +
    '{"a":"the woman who called my sister sells cosmetics<br>","b":"the woman who sells cosmetics called my sister<br>" ,"c":"my sister who sells cosmetics called the woman<br>","d":"my sister who called the woman sells cosmetics"}]}';

   
  obj = JSON.parse(English);
  document.getElementById("output").innerHTML =
    obj.english[0].a + " " + obj.english[0].b + obj.english[0].c;

  document.getElementById("output1").innerHTML =
    obj.english[1].a + " " + obj.english[1].b;
  document.getElementById("output2").innerHTML =
    obj.english[2].a + " " + obj.english[2].b;
  document.getElementById("output3").innerHTML =
    obj.english[3].a + " " + obj.english[3].b + " " + obj.english[3].c;
  document.getElementById("output4").innerHTML =
    obj.english[4].a + " " + obj.english[4].b;

 /* document.getElementById("output5").innerHTML =
    
    obj.english[5].a +
    " " +
    obj.english[5].b +
    " " +
    obj.english[5].c +
    " " +
    obj.english[5].d ;
    
  document.getElementById("output6").innerHTML =
    obj.english[6].a +
    " " +
    obj.english[6].b ;
  
  document.getElementById("output7").innerHTML =
    obj.employees[7].a +
    " " +
    obj.employees[7].b;
    
document.getElementById("output8").innerHTML =
    
    obj.english[8].a +
    " " +
    obj.english[8].b +
    " " +
    obj.english[8].c +
    " " +
    obj.english[8].d +
" "+

    obj.english[8].e +
    " " +
    obj.english[8].f +
    " " +
    obj.english[8].g +
    " " +
    obj.english[8].h ;
  
document.getElementById("output9").innerHTML =
    
    obj.english[9].a +
    " " +
    obj.english[9].b +
    " " +
    obj.english[9].c +
    " " +
    obj.english[9].d +
" "+

    obj.english[9].e +
    " " +
    obj.english[9].f ;
    
    
    
    
    




  var Hindi ='{"hindi": ['+
    '{"a":"राम और श्याम बाजार गयें <br>",
  "b":  "  राम और श्याम गयें बाजार<br>",
   "c": "बाजार गयें राम और श्याम<br>",
  "d":  " गयें बाजार राम और श्याम<br><br>"},'+

  '{"a":  " राम सोया और श्याम भी<br>",
 "b":   "श्याम सोया और राम भी<br>",
 "c":   "  सोया श्याम और राम भी<br>",
"d":    " सोया राम और श्याम भी<br><br>"},'+

  '{"a":  " मैंने उसे बताया कि राम सो रहा है<br>",
 "b":   "मैंने उसे बताया कि सो रहा है राम<br>",
 "c":   "उसे मैंने बताया कि राम सो रहा है<br>",
  "d":  "उसे मैंने बताया कि सो रहा है राम<br>",
   "e": "मैंने बताया उसे कि राम सो रहा है<br>",
  "f":  "मैंने बताया उसे कि सो रहा है राम<br>",
  "g":  "उसे बताया मैंने कि राम सो रहा है<br>",
"h":    "उसे बताया मैंने कि सो रहा है राम<br>",
  "i":  "बताया मैंने उसे कि राम सो रहा है<br>",
 "j":   "बताया मैंने उसे कि सो रहा है राम<br>",
 "k":   "बताया उसे मैंने कि राम सो रहा है<br>",
  "l":  "बताया उसे मैंने कि सो रहा है राम<br><br>"},'+

  '{"a":  "राम खाकर सोया<br>",
    "b":"खाकर राम सोया<br>",
  "c":  "राम सोया खाकर<br>",
  "d":  "खाकर सोया राम<br>",
  "e":  "सोया राम खाकर<br>",
  "f":  "सोया खाकर राम<br><br>"},'+

  '{"a":  "बिल्लियों को मारकर कुत्ता सो गया<br>",
 "b":   "मारकर बिल्लियों को कुत्ता सो गया	<br>",
  "c":  "बिल्लियों को मारकर सो गया कुत्ता	<br>",
  "d":  "मारकर बिल्लियों को सो गया कुत्ता<br>",
   "e": "कुत्ता सो गया बिल्लियों को मारकर	<br>",
  "f":  "कुत्ता सो गया मारकर बिल्लियों को	<br>",
  "g":  "सो गया कुत्ता बिल्लियों को मारकर<br>",
  "h":  "सो गया कुत्ता मारकर बिल्लियों को<br><br>"},'+

   '{"a": "एक लाल किताब वहाँ है<br>",
   "b": "एक लाल किताब है वहाँ<br>",
 "c":   "वहाँ है एक लाल किताब<br>",
   "d": "है वहाँ एक लाल किताब<br><br>"},'+

'{"a":    "एक बड़ी सी किताब वहाँ है	<br>",
"b":    "एक बड़ी सी किताब है वहाँ<br>",
"c":    "बड़ी सी एक किताब वहाँ है<br>",
 "d":   "बड़ी सी एक किताब है वहाँ<br>",
"e":    "वहाँ है एक बड़ी सी किताब<br>",
 "f":   "वहाँ है बड़ी सी एक किताब<br>",
 "g":   "है वहाँ एक बड़ी सी किताब<br>",
  "h":  "है वहाँ बड़ी सी एक किताब<br>"}]}';




  obj = JSON.parse(Hindi);
  
  document.getElementById("output10").innerHTML =
    
    obj.hindi[0].a +
    " " +
    obj.hindi[0].b +
    " " +
    obj.hindi[0].c +
    " " +
    obj.hindi[0].d ;


  document.getElementById("output11").innerHTML =
    
    obj.hindi[1].a +
    " " +
    obj.hindi[1].b +
    " " +
    obj.hindi[1].c +
    " " +
    obj.hindi[1].d ;



  document.getElementById("output12").innerHTML =
    
    obj.hindi[2].a +
    " " +
    obj.hindi[2].b +
    " " +
    obj.hindi[2].c +
    " " +
    obj.hindi[2].d +
" "+

    obj.hindi[2].e +
    " " +
    obj.hindi[2].f +
    " " +
    obj.hindi[2].g +
    " " +
    obj.hindi[2].h +
" "+

    obj.hindi[2].i +
    " " +
    obj.hindi[2].j +
    " " +
    obj.hindi[2].k +
    " " +
    obj.hindi[2].l ;



  document.getElementById("output13").innerHTML =
    
    obj.hindi[3].a +
    " " +
    obj.hindi[3].b +
    " " +
    obj.hindi[3].c +
    " " +
    obj.hindi[3].d +
" "+

    obj.hindi[3].e +
    " " +
    obj.hindi[3].f ;




  
  document.getElementById("output14").innerHTML =
    
    obj.hindi[4].a +
    " " +
    obj.hindi[4].b +
    " " +
    obj.hindi[4].c +
    " " +
    obj.hindi[4].d +
" "+

    obj.hindi[4].e +
    " " +
    obj.hindi[4].f +
    " " +
    obj.hindi[4].g +
    " " +
    obj.hindi[4].h ;



  document.getElementById("output15").innerHTML =
    
    obj.hindi[5].a +
    " " +
    obj.hindi[5].b +
    " " +
    obj.hindi[5].c +
    " " +
    obj.hindi[5].d ;




  document.getElementById("output16").innerHTML =
    
    obj.hindi[6].a +
    " " +
    obj.hindi[6].b +
    " " +
    obj.hindi[6].c +
    " " +
    obj.hindi[6].d +
" "+

    obj.hindi[6].e +
    " " +
    obj.hindi[6].f +
    " " +
    obj.hindi[6].g +
    " " +
    obj.hindi[6].h ; */



}




function choose() {
  var x = document.getElementById("choose").value;
  if (x == "English") {
    document.getElementById("randomeng").innerHTML = "";

    document.getElementById("result").innerHTML =
      "Form a sentence (Declarative or Interrogative or any other type) from the given words<br />(select the buttons in proper order)";

    document.getElementById("eng").style.display = "block";
    document.getElementById("hin").style.display = "none";
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

var s= english[Math.floor(Math.random() * english.length)];
    var randomarray= randomize(s);
    for (var x= 0; x < randomarray.length; x++) {
        document.getElementById("randomeng").innerHTML += "<button class='random'>" + randomarray[x] + "</button>";
    }

  } else {
    document.getElementById("randomhin").innerHTML = "";

    document.getElementById("result1").innerHTML =
      "Form a sentence (Declarative or Interrogative or any other type) from the given words<br />(select the buttons in proper order)";

    document.getElementById("hin").style.display = "block";
    document.getElementById("eng").style.display = "none";


var hindi= [
    ['राम', 'और', 'श्याम', 'बाजार', 'गयें'],
    ['राम', 'सोया', 'और', 'श्याम', 'भी'],
    ['मैंने', 'उसे', 'बताया', 'कि', 'राम', 'सो', 'रहा', 'है'],
    ['राम', 'खाकर', 'सोया'],
    ['बिल्लियों', 'को', 'मारकर', 'कुत्ता', 'सो', 'गया'],
    ['एक', 'लाल', 'किताब', 'वहाँ', 'है'],
    ['एक', 'बड़ी', 'सी', 'किताब', 'वहाँ', 'है']
];

var s= hindi[Math.floor(Math.random() * hindi.length)];
    var randomarray= randomize(s);
    for (var x= 0; x < randomarray.length; x++) {
        document.getElementById("randomhin").innerHTML += "<button class='random'>" + randomarray[x] + "</button>";
    }


  }
}

function randomize(arr)
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

