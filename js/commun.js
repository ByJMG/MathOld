// mode standalone IOS
function stand(){
		if (  (navigator.standalone)
              &&
              ((navigator.userAgent.indexOf("iPhone") > -1) || (navigator.userAgent.indexOf("iPad") > -1))
            ) {
            // On bloque les liens quand on est en mode web-app sur iPhone et iPad
            event.preventDefault();
            // On recâble le lien à la main grâce à window.location
            window.location = this.getAttribute("href");
        }
	}
	var sortieElt = document.getElementsByTagName("a");
	for(var i = 0, count = sortieElt.length; i < count; i++) {
    sortieElt[i].addEventListener("click", stand,false);
	};
	
	
// Ouverture Volet Paramètres	
var openParaStatus=false;
function openparameter(){
	if(openParaStatus === false){
		openParaStatus = true;
		document.getElementById('parametreDiv').classList.remove('animation-close-para');
		document.getElementById('parametreDiv').classList.add('animation-open-para');
		document.getElementById("indicator-para").textContent="∧";
	}else{
		openParaStatus = false;
		document.getElementById('parametreDiv').classList.remove('animation-open-para');
		document.getElementById('parametreDiv').classList.add('animation-close-para');
		document.getElementById("indicator-para").textContent="∨";
	}
}

var openpara = document.getElementById("open-para");
openpara.addEventListener("click", openparameter);

// Affichage score a la fin des calculs
function divScore(){
	document.getElementById("essaisRest").style.display = "none";
	pourcent = Math.round((bonneReponse / essais)*100);
	var spanGoodElt = document.createElement("div");
	spanGoodElt.id = "bonnesReponses";
	spanGoodElt.className = "font-size20";
	spanGoodElt.textContent = bonneReponse + " Bonnes reponses";
	spanGoodElt.style.color = "green";
	var spanWrongElt = document.createElement("div");
	spanWrongElt.id = "mauvaisesReponses";
	spanWrongElt.className = "font-size20";
	spanWrongElt.textContent = mauvaiseReponse + " Mauvaises reponses";
	spanWrongElt.style.color = "red";
	var pourcentElt = document.createElement("div");
	pourcentElt.id = "purcentBonnesReponses";
	pourcentElt.className = "font-size20";
	pourcentElt.textContent = pourcent + "% de bonnes reponses";
	document.getElementById("zoneCalcul").appendChild(spanGoodElt);
	document.getElementById("zoneCalcul").appendChild(spanWrongElt);
	document.getElementById("zoneCalcul").appendChild(pourcentElt);
	compteur = 0;
	document.activeElement.blur();
		//saveScore();
		//save();		
	var loadOjet = localStorage.getItem("objet");
	var monobjet = JSON.parse(loadOjet);
	var presSave = localStorage.getItem("save");
	if(presSave != null){
		var mincode = 1000;
		var maxcode = 111000;
		var ncode = Math.floor(Math.random() * (maxcode + 1) + mincode);
		localStorage.setItem("save."+ncode,loadOjet);
								
	}else{
								
		localStorage.setItem("save",loadOjet);
		}
	console.log(monobjet);
	localStorage.removeItem("objet");
}

//Date
function datess(){
	
	date = new Date();
}

// Affiche zone calcul
function affiche(){
	
	if(openParaStatus === true){
		openparameter()
	}
	localStorage.removeItem("objet");
	//save()
	if(document.getElementById('typeCalcul')){document.getElementById('typeCalcul').disabled = true;}
	if(document.getElementById('numberEssais')){document.getElementById('numberEssais').disabled = true;}
    if(document.getElementById('numberMax')){document.getElementById('numberMax').disabled = true;}
    if(document.getElementById('numberMax')){document.getElementById('numberMax').disabled = true;}
    
    document.getElementById("essaisRest").style.display = "block";
    var pBon = document.getElementById('bonnesReponses');
    var ptext = document.getElementById('lanceJeux').textContent;
    
    // mode relancer calcul
    if(ptext === "Relancer"){
	    var verif = prompt("code");
	    // verification code relance calcul
	    if(verif === code){
		    if(pBon != null){
				document.getElementById('bonnesReponses').remove();
				document.getElementById('mauvaisesReponses').remove();
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
		document.getElementById("essaisRestant").textContent = essais;
		//alert("type"+typeCalcul);
		if(document.getElementById('select-sign')){
			//alert("type1 : "+typeCalcul); 
			if(typeCalcul === 1){
			//alert("type2 : "+typeCalcul);
			var small = document.getElementById("small").textContent = "<";
			var big = document.getElementById("big").textContent = ">";
			var equal = document.getElementById("equal").textContent = "=";
	
		}	    
	    
	    
	    }
    
		hasardNumber()
	}
	
}


// bouton pour lancer calcul
var boutonlancerCalcul = document.getElementById("lanceJeux");
boutonlancerCalcul.addEventListener("click", affiche);