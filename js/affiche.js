function affiche(){
	
	if(openParaStatus === true){
		openparameter()
	}
	localStorage.removeItem("objet");
	//save()
	if(document.getElementById('typeCalcul')){ document.getElementById('typeCalcul').disabled = true;}
	if(document.getElementById('numberEssais')){ document.getElementById('numberEssais').disabled = true;}
   
    if(document.getElementById('numberMax')){document.getElementById('numberMax').disabled = true;}
    //alert("type"+typeCalcul);
    if(document.getElementById('select-sign')){
	   //alert("type1"+typeCalcul); 
	    if(typeCalcul === 1){
			//alert("type2"+typeCalcul);
			document.getElementById("small").value = "<";
			document.getElementById("big").value = ">";
			document.getElementById("equal").value = "=";
	
		}	    
	    
	    
	    }
	if(document.getElementById("essaisRest")){ document.getElementById("essaisRest").style.display = "block";}
    //document.getElementById("essaisRest").style.display = "block";
    var pBon = document.getElementById('bonnesReponses');
    var ptext = document.getElementById('lanceJeux').textContent;
    
    // mode relancer calcul
    if(ptext === "Relancer"){
	    var verif = prompt("code");
	    // verification code relance calcul
	    if(verif === code){
		    if(pBon != null){
				document.getElementById('bonnesReponses').remove();
				if(document.getElementById('mauvaisesReponses')){ document.getElementById('mauvaisesReponses').remove();}
				document.getElementById('purcentBonnesReponses').remove();
				document.getElementById('zoneResult').textContent = "";
			}
			bonneReponse = 0;
			mauvaiseReponse = 0;
			document.getElementById("zoneCalcul").style.display = "block";
			document.getElementById("zoneForm").style.display = "block";
			document.getElementById('lanceJeux').disabled = true;
			document.getElementById("essaisRestant").textContent = essais;
    
			hasardNumber()
		    
			}else{
		    	alert("Code Incorrect");
	    }
	    
    }else{
	    
	    document.getElementById("zoneCalcul").style.display = "block";
		document.getElementById("zoneForm").style.display = "block";
		document.getElementById('lanceJeux').disabled = true;
		//document.getElementById("essaisRestant").textContent = essais;
		if(document.getElementById('essaisRestant')){ document.getElementById("essaisRestant").textContent = essais;}
    
		hasardNumber()
	}
	
}


// bouton pour lancer calcul
var boutonlancerCalcul = document.getElementById("lanceJeux");
boutonlancerCalcul.addEventListener("click", affiche);