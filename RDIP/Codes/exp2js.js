

var sentences= '{ "english":[{"a":"John ate an apple before afternoon", "b":"before afternoon John ate an apple","c":"John before afternoon ate an apple"},'+
'{"a":"some students like to study in the night","b":"at night some students like to study"},{"a":"John and Mary went to church","b":"Mary and John went to church"}'+
',{"a":"John went to church after eating","b":"after eating John went to church","c":"John after eating went to church"},{"a":"did he go to market","b":"he did go to market"}'+
',{"a":"the woman who called my sister sells cosmetics","b":"the woman who sells cosmetics called my sister","c":"my sister who sells cosmetics called the woman","d":"my sister who called the woman sells cosmetics"},'+
'{"a":"John goes to the library and studies","b":"John studies and goes to the library"},{"a":"John ate an apple so did she","b":"she ate an apple so did John"},{"a":"the teacher returned the book after she noticed the error","b":"the teacher noticed the error after she returned the book","c":"after the teacher returned the book she noticed the error","d":"after the teacher noticed the error she returned the book","e":"she returned the book after the teacher noticed the error","f":"she noticed the error after the teacher returned the book","g":"after she returned the book the teacher noticed the error","h":"after she noticed the error the teacher returned the book"},'+
'{"a":"I told her that I bought a book yesterday","b":"I told her yesterday that I bought a book","c":"yesterday I told her that I bought a book","d":"I bought a book that I told her yesterday","e":"I bought a book yesterday that I told her","f":"yesterday I bought a book that I told her"}]'+
' ,"hindi":[{"a":"राम और श्याम बाजार गयें","b":"राम और श्याम गयें बाजार","c":"बाजार गयें राम और श्याम","d":"गयें बाजार राम और श्याम"},'+
'{"a":"राम सोया और श्याम भी","b":"श्याम सोया और राम भी","c":"सोया श्याम और राम भी","d":"सोया राम और श्याम भी"},{"a":"मैंने उसे बताया कि राम सो रहा है","b":"मैंने उसे बताया कि सो रहा है राम","c":"उसे मैंने बताया कि राम सो रहा है","d":"उसे मैंने बताया कि सो रहा है राम","e":"मैंने बताया उसे कि राम सो रहा है","f":"मैंने बताया उसे कि सो रहा है राम","g":"उसे बताया मैंने कि राम सो रहा है","h":"उसे बताया मैंने कि सो रहा है राम","i":"बताया मैंने उसे कि राम सो रहा है","j":"बताया मैंने उसे कि सो रहा है राम","k":"बताया उसे मैंने कि राम सो रहा है","l":"बताया उसे मैंने कि सो रहा है राम"},{"a":"राम खाकर सोया","b":"खाकर राम सोया","c":"राम सोया खाकर","d":"खाकर सोया राम","e":"सोया राम खाकर","f":"सोया खाकर राम"},'+
'{"a":"बिल्लियों को मारकर कुत्ता सो गया","b":"मारकर बिल्लियों को कुत्ता सो गया","c":"बिल्लियों को मारकर सो गया कुत्ता","d":"मारकर बिल्लियों को सो गया कुत्ता","e":"कुत्ता सो गया बिल्लियों को मारकर","f":"कुत्ता सो गया मारकर बिल्लियों को","g":"सो गया कुत्ता बिल्लियों को मारकर","h":"सो गया कुत्ता मारकर बिल्लियों को"},'+ 
'{"a":"एक लाल किताब वहाँ है","b":"एक लाल किताब है वहाँ","c":"वहाँ है एक लाल किताब","d":"है वहाँ एक लाल किताब"},{"a":"एक बड़ी सी किताब वहाँ है","b":"एक बड़ी सी किताब है वहाँ","c":"बड़ी सी एक किताब वहाँ है","d":"बड़ी सी एक किताब है वहाँ","e":"वहाँ है एक बड़ी सी किताब","f":"वहाँ है बड़ी सी एक किताब","g":"है वहाँ एक बड़ी सी किताब","h":"है वहाँ बड़ी सी एक किताब"}]'+ 
'}';

obj = JSON.parse(sentences);

//document.write(obj.hindi[1].b);

//there are 10 English and 7 Hindi sentences

function shuffle(arr){
      var length=arr.length;

      for(var i=0; i<arr.length ;i++){
      	 var ran=Math.floor(Math.random() * length);
      	 temp=arr[i];
      	 arr[i]=arr[ran];
      	 arr[ran]=temp;
      }
      return arr;

}
var w="";
var count=50;
var final_sen="";
var num_keys=50;
var lang="";
var ran=50;

function btnfunc(bid,bvalue,words){
	document.getElementById("formedsentmes").innerHTML="Formed Sentence (After selecting words): <br/>";
    document.getElementById("sent").innerHTML+= " " + bvalue;
     document.getElementById(bid).style.display="none";
      document.getElementById("reform").style.display="block";
      count--;

      if(count==0){
      	final_sen=document.getElementById("sent").innerHTML; //final sentence
      	final_sen=final_sen.trim();
  	     document.getElementById("checkcor").style.display="block";
      }

}

function checkcor(){
//use final_sen global variable

		//for(var i=0;i<num_keys;i++){
			// var str=obj.hindi[ran].a;
           //if(){
           //	  document.getElementById("ans").innerHTML="Correct Answer!";
           //}
		//}
		if(lang=="e")
        	var temp_obj= obj.english[ran];
        else if(lang=="h")
        	var temp_obj=obj.hindi[ran];

		for(var key in temp_obj){
            var val=temp_obj[key];
            console.log(val);
            if(val.trim()==final_sen){
  				document.getElementById("ans").innerHTML="Correct Answer!";
  				 document.getElementById("ans").style.color="green";
  				return false;
            }
		}
  document.getElementById("ans").innerHTML="Wrong Answer!";
  document.getElementById("ans").style.color="red";
    document.getElementById("getcor").style.display="block"; 

    //displaying the Get Correct Sentence Button 
}


function getcor(){

	//if( document.getElementById("getcor").value=="getcorrect")
	if( document.getElementById("getcor").innerHTML=="Get Correct Sentence" || document.getElementById("getcor").innerHTML=="Get Answers"){

				if(lang=="e")
		        	var temp_obj= obj.english[ran];
		        else if(lang=="h")
		        	var temp_obj=obj.hindi[ran];

		        for(var key in temp_obj){
		            var val=temp_obj[key];
		            //console.log(val);
		            document.getElementById("anslist").innerHTML+=val+"<br/>";
		        }

		        document.getElementById("getcor").innerHTML="Hide the Correct Sentence";
		  }

		  else if( document.getElementById("getcor").innerHTML=="Hide the Correct Sentence"){
		  	     document.getElementById("anslist").innerHTML="";
		  	      document.getElementById("getcor").innerHTML="Get Answers";
		  }


} 



function reform(){ //Here is the reform button's functionality
	     document.getElementById("buttons").innerHTML="";

	 for(var i=0;i<w.length;i++)
                {
       document.getElementById("buttons").innerHTML += "<button id='btn"+i+"' value='"+w[i]+"' onclick='btnfunc(this.id, this.value);'>"+w[i]+"</button> &nbsp; &nbsp;  ";
                   
    }
    count=w.length;
    document.getElementById("formedsentmes").innerHTML="";
    document.getElementById("sent").innerHTML="";
       document.getElementById("reform").style.display="none";
        document.getElementById("checkcor").style.display="none";
        document.getElementById("ans").innerHTML="";
         document.getElementById("getcor").style.display="none";
          document.getElementById("anslist").innerHTML="";
          document.getElementById("getcor").innerHTML="Get Correct Sentence";

}

$(document).ready(function(){
				

			  $("#language").change(function(){
			  	if(language.value=="hindi") {
			  	document.getElementById("buttons").innerHTML=""; //emptying all prev buttons
			  	  document.getElementById("formedsentmes").innerHTML="";
                document.getElementById("sent").innerHTML="";
                   document.getElementById("reform").style.display="none";
                   document.getElementById("checkcor").style.display="none";
                   document.getElementById("ans").innerHTML="";
                   document.getElementById("getcor").style.display="none";
                   document.getElementById("anslist").innerHTML="";
                   document.getElementById("getcor").innerHTML="Get Correct Sentence";


			    document.getElementById("instr").innerHTML="<b>Form a sentence (Declarative or Interrogative or any other type) from the given words.</b> <br/> (Select the buttons in proper order.)";
			    
			    ran= Math.floor(Math.random() * 7);   // returns a random integer from 0 to 6
                lang="h";
			     var str=obj.hindi[ran].a;
			      num_keys=Object.keys(obj.hindi[ran]).length;

			     // document.getElementById("words").innerHTML=str;
			     var words=str.split(" ");

			     words=shuffle(words);
			     w=words;
			     count=words.length;
                 
                 //document.getElementById("words").innerHTML=words;

                 
			     for(var i=0;i<words.length;i++)
                {
                    document.getElementById("buttons").innerHTML += "<button id='btn"+i+"' value='"+words[i]+"' onclick='btnfunc(this.id, this.value);'>"+words[i]+"</button> &nbsp; &nbsp;  ";
                   
                }
			 }

			 else if(language.value=="english"){
			 	 document.getElementById("buttons").innerHTML=""; ////emptying all prev buttons
			 	   document.getElementById("formedsentmes").innerHTML="";
                  document.getElementById("sent").innerHTML="";
                  document.getElementById("reform").style.display="none";
                   document.getElementById("checkcor").style.display="none";
                   document.getElementById("ans").innerHTML="";
                   document.getElementById("getcor").style.display="none";
                   document.getElementById("anslist").innerHTML="";
                   document.getElementById("getcor").innerHTML="Get Correct Sentence"; 


			    	document.getElementById("instr").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words. <br/> (Select the buttons in proper order.)";
			      ran= Math.floor(Math.random() * 10);   // returns a random integer from 0 to 9
                  lang="e";
			     var str=obj.english[ran].a;

			     num_keys=Object.keys(obj.english[ran]).length;

			     //document.write(str+" "+num);

			     words=str.split(" ");

			     words=shuffle(words);
                 w=words;
                  count=words.length;
			     //document.getElementById("words").innerHTML=words;

			     for(var i=0;i<words.length;i++)
                {
                    document.getElementById("buttons").innerHTML += "<button id='btn"+i+"' value='"+words[i]+"' onclick='btnfunc(this.id, this.value);'>"+words[i]+"</button> &nbsp; &nbsp;  ";
                   
                }

     

			 }
	 });


			 
});


