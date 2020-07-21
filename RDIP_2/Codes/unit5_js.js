var english=["The child liked the chocolate.","She was stopped by the bravest knight.","Mary baked a cake for his birthday","She decorated the cake carefully","Mary wore a dress with polka dots."];

var hindi=["राम ने सीता के लिए फल तोड़ा।","छोटे बच्चे पाठशाला जल्दी आयेंगे।","मेहनत का फल मीठा होता है।","वाह! वह खूबसूरत है।","पेड़ से पत्ते गिर गए।"];

//console.log(english[1]);




$(document).ready(function(){
				


			  $("#lang").change(function(){

			  	document.getElementById("ecorpusdiv").style.display="none";
			  	document.getElementById("hcorpusdiv").style.display="none";
			  	document.getElementById("corpdisp").innerHTML="";

			  	

		        if(lang.value=="e"){

		             document.getElementById("ecorpusdiv").style.display="block"; 
                     
		               $("#ecorpus").change(function(){
		               	
                         var val=ecorpus.value;

                         document.getElementById("corpdisp").innerHTML=english[val];
		                });
		         }
		       
		         else if(lang.value=="h"){
		             document.getElementById("hcorpusdiv").style.display="block"; 

		             $("#hcorpus").change(function(){
		             	 var val=hcorpus.value;

                         document.getElementById("corpdisp").innerHTML=hindi[val];

		                });

		         }

	 });
		 
});
