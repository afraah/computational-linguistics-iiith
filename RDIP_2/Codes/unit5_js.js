var english=["The child liked the chocolate.","She was stopped by the bravest knight.","Mary baked a cake for his birthday","She decorated the cake carefully","Mary wore a dress with polka dots."];

var hindi=["राम ने सीता के लिए फल तोड़ा।","छोटे बच्चे पाठशाला जल्दी आयेंगे।","मेहनत का फल मीठा होता है।","वाह! वह खूबसूरत है।","पेड़ से पत्ते गिर गए।"];

//console.log(english[1]);

alert("hello");

var pos = require('pos');
var words = new pos.Lexer().lex('This is some sample text. This text can contain multiple sentences.'); //You have to enter the sentences here
var tagger = new pos.Tagger();
var taggedWords = tagger.tag(words);
for (i in taggedWords) {
    var taggedWord = taggedWords[i];
    var word = taggedWord[0];
    var tag = taggedWord[1];
    console.log(word + " /" + tag);
}



var corp;
var arr;
var l;

$(document).ready(function(){
				
 	    

			  $("#lang").change(function(){

			  	document.getElementById("ecorpusdiv").style.display="none";
			  	document.getElementById("hcorpusdiv").style.display="none";
			  	document.getElementById("corpdisp").innerHTML="";
			  	document.getElementById("table").style.display="none";
			    document.getElementById("submit").style.display="none";

			  	

		        if(lang.value=="e"){

		             document.getElementById("ecorpusdiv").style.display="block"; 
                     
		               $("#ecorpus").change(function(){
		               	document.getElementById("table").style.display="none";
		               	document.getElementById("submit").style.display="none";
		               	
                         var val=ecorpus.value;
                         
                         document.getElementById("corpdisp").innerHTML="Select the POS tag for corresponding words<br/>";//english[val];
                         corp= english[val];
                         l="e";
                         tablecreate();
                        
		                });
		         }
		       
		         else if(lang.value=="h"){
		             document.getElementById("hcorpusdiv").style.display="block"; 

		             $("#hcorpus").change(function(){
		             	document.getElementById("table").style.display="none";
		             	 	document.getElementById("submit").style.display="none";

		             	 var val=hcorpus.value;
										
                         document.getElementById("corpdisp").innerHTML="Select the POS tag for corresponding words<br/>";//hindi[val];
                           corp=hindi[val];
                            l="h";
                           corp=corp.substring(0,hindi[val].length-1);
                            tablecreate();

		                });

		         }

		   
          

	 });
		 
});


function tablecreate(){
		        document.getElementById("table").style.display="inline-block";
	 			varcorp=corp.replace(/,/g,"");
                  corp=corp.replace(/\./g,"");
                corp=corp.replace(/\?/g,"");
                 corp=corp.replace(/\!/g,""); 
                  corp=corp.replace(/\|/g,""); 
                
                 corp=corp.trim();
                  arr=corp.split(" ");

	           var col = "<tr id='rowh'><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";

               var dd;

	           if(l=="e"){
                dd=
			
			"<option value='noun' selected='selected' >Noun</option>"+
			"<option value='verb'>Verb</option>"+
			"<option value='pronoun'>Pronoun</option>"+
			"<option value='conjunction'>Conjunction</option>"+
			"<option value='interjection'>Interjection</option>"+
			"<option value='determiner'>Determiner</option>"+
			"<option value='adjective'>Adjective</option>"+
			"<option value='adverb'>Adverb</option>"+
			"<option value='preposition'>Preposition</option>"+
		    "</select>";
	           }
	           else if(l=="h"){
	           	dd=
			
			"<option value='noun' selected='selected'>Noun</option>"+
			"<option value='verb'>Verb</option>"+
			"<option value='pronoun'>Pronoun</option>"+
			"<option value='conjunction'>Conjunction</option>"+
			"<option value='interjection'>Interjection</option>"+
			"<option value='determiner'>Determiner</option>"+
			"<option value='adjective'>Adjective</option>"+
			"<option value='adverb'>Adverb</option>"+
			"<option value='postposition'>Postposition</option>"+
		    "</select>";
               
	           }
	           console.log("hello");
		       console.log(dd);

			    for (var i = 0; i < arr.length; i++){
			        col = col + "<tr id='id" + i + "'><td>" + arr[i] + "</td><td>"+"<select id='pos"+i+"' name='pos' >"+dd+"</td><td></td><td></td></tr>";
			    }
			    document.getElementById('table').innerHTML = col;

			    document.getElementById("submit").style.display="inline-block";
}
