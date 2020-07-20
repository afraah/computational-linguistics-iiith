

var corpuses= '{"corpus1":"A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. \\"How shall I climb out?\\" said the mouse. \\"oh, how shall I climb out?\\" Just then a rat came along, and he heard the mouse. \\"Mouse,\\" said the rat, \\"if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.",'+
' "corpus2":"A wolf carried off a lamb. The lamb said, \\" I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself.\\" The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.",'+
' "corpus3":"A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. \\"Why does he not make a pet of me?\\" said the donkey. \\"It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair.\\" Then the donkey said to himself, \\"If I do what the dog does, he may make a pet of me.\\" So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, \\"Help! Help!\\" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. \\"I only did what the dog does,\\" said the donkey,\\" and yet they make a pet of the dog, and they beat me with sticks. It is not fair."}';
	
	obj = JSON.parse(corpuses);


//document.write(obj.corpus1);


//INCLUDING SNOWBALL

//var Snowball = require('snowball');
var stemmer = new Snowball('English');
//stemmer.setCurrent('abbreviations');     -----> Word given to code as abbreviations
//stemmer.stem();
//console.log(stemmer.getCurrent());      -----> Gives output as abbrebi


var token_ans=0;
var type_ans=0;
var arr;

$(document).ready(function(){
				


			  $("#corpus").change(function(){

			  	 document.getElementById("mes").innerHTML="";

			     document.getElementById("table1").style.display="none";

			     document.getElementById("btn1").style.display="none";
			      document.getElementById("btn2").style.display="none";
			       document.getElementById("btn3").style.display="none";
			     document.getElementById("ans").innerHTML="";
			     document.getElementById("tokens").style.backgroundColor="white";
			     document.getElementById("types").style.backgroundColor="white";
			     	document.getElementById("types").value="";
			     	document.getElementById("tokens").value="";
			     	document.getElementById("mes2").innerHTML="";
			     	 document.getElementById("newtypes").style.display="none";
			     	 document.getElementById("finans").innerHTML="";
			     	 document.getElementById("newtypes").style.backgroundColor="white";
		           document.getElementById("finans").innerHTML="";
		            document.getElementById("newtypes").value="";
                    	




			  	if(corpus.value=="c1") {
			  	document.getElementById("c").innerHTML=obj.corpus1; 
			  }
			  else 	if(corpus.value=="c2") {
			  	document.getElementById("c").innerHTML=obj.corpus2; 
			  }

			  else if(corpus.value=="c3") {
			  	document.getElementById("c").innerHTML=obj.corpus3; 
			  }

			  document.getElementById("mes").innerHTML="<b> Enter the number of tokens and types for the above corpus: </b>";

			  document.getElementById("table1").style.display="inline";

			  document.getElementById("btn1").style.display="inline";

			 

			  //document.write(tokens);
              

		 });
			 
});


function calc1(){

	         var corp=document.getElementById("c").innerHTML.replace(/"/g,"");
              corp=corp.replace(/,/g,"");
              corp=corp.replace(/\./g,"");
             corp=corp.replace(/\?/g,"");
             corp=corp.replace(/\!/g,"");
              corp=corp.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
             

              //document.write(corp);
              corp=corp.trim();

              arr=corp.toLowerCase().split(" ");

               
			  token_ans=arr.length;
               var st="start<br/>";
			  
			  /*for(var i=0; i<arr.length;i++){
			  	st=st+"<br/>"+arr[i];
			  }
			  document.write(st);*/
			  
 
			  //map?
              type_ans=token_ans;

               var map=new Map();
                var str="";

               for(var i=0; i<arr.length;i++){
               		if(map.has(arr[i])){
               			type_ans--;
               		}
               		else{
               			map.set(arr[i],1);
               			str=str+" "+arr[i];
               		}
               }

               type_ans=map.size;

			  var inp_token=document.getElementById("tokens").value;
			  var inp_type=document.getElementById("types").value;

			  if(inp_token==token_ans ){

			  	document.getElementById("tokens").value=inp_token;

			  	document.getElementById("tokens").style.backgroundColor="green";
			  	
			  	//document.getElementById("tokens").value="RIGHT";

			  }
			  else{
			  	    document.getElementById("tokens").style.backgroundColor="red";
			  		//document.write(inp_token+" "+token_ans);
			  }

			  if(inp_type==type_ans ){

			  	document.getElementById("types").value=inp_type;

			  	document.getElementById("types").style.backgroundColor="green";
			  	
			  	//document.getElementById("tokens").value="RIGHT";

			  }
			  else{
			  	    document.getElementById("types").style.backgroundColor="red";
			  		//document.write(inp_token+" "+token_ans);
			  }

              if(inp_token==token_ans && inp_type==type_ans  ){
              	document.getElementById("ans").innerHTML="Right Answer!";
              	document.getElementById("ans").style.color="green";
              	document.getElementById("btn2").style.display="inline";

              }
              else{
              		document.getElementById("ans").innerHTML="Wrong Answer!";
              		document.getElementById("ans").style.color="red";
              }

			 // document.getElementById("checker").innerHTML="checked!"+map.size+" "+str;

			  return false;
			  
}

function cont(){
	              document.getElementById("btn1").style.display="none";
			      document.getElementById("btn2").style.display="none";
			      document.getElementById("ans").innerHTML="";
			      document.getElementById("mes2").innerHTML="Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types.<br/> #new types: <br/>";

			      document.getElementById("newtypes").style.display="inline";
			      document.getElementById("btn3").style.display="inline";
    
}



function stem(){
	  var str=[];
	  var set1 = new Set(["to","of","the","does","very","off","me","you","did","than","can","up","xyz"]);
	    for(i=0 ; i<arr.length ; i++){
	    	if(set1.has(arr[i])){
			continue;
		}
		stemmer.setCurrent(arr[i]);
		stemmer.stem();
		//str[i] = stemmer.getCurrent();
		  str.push(stemmer.getCurrent());
	}
	str = new Set(str);
	str = Array.from(str);
	//console.log(str)
	//console.log(str) //Unique words are printed in the console

	if(document.getElementById("newtypes").value==str.length){
			document.getElementById("newtypes").style.backgroundColor="green";
				document.getElementById("finans").innerHTML="Right Answer!";
              	document.getElementById("finans").style.color="green";
	}
	else{
		document.getElementById("newtypes").style.backgroundColor="red";
		    document.getElementById("finans").innerHTML="Wrong Answer!";
              	document.getElementById("finans").style.color="red";
	}
}


