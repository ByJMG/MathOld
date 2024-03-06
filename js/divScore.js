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


// Affichage score a la fin des calculs
function divScoreDos(){
	document.getElementById("essaisRest").style.display = "none";
	pourcent = Math.round((bonneReponse / essais)*100);
	var spanGoodElt = document.createElement("div");
	nbCoup = bonneReponse+mauvaiseReponse;
	spanGoodElt.id = "bonnesReponses";
	spanGoodElt.className = "font-size20";
	if(nbCoup === 1){
		
		spanGoodElt.textContent ="Formidable ! tu as trouver du premier coup";
		spanGoodElt.style.color = "green";
	}else if(nbCoup < essais){
		
		spanGoodElt.textContent ="Bravo ! tu as trouver en " +nbCoup+" essais";
		spanGoodElt.style.color = "green";
	}else{
		spanGoodElt.textContent = "Dommage tu n'as pas trouver le Nombre Mystére au bout "+essais+" essais";
		spanGoodElt.style.color = "red";
	}
	var pourcentElt = document.createElement("div");
	pourcentElt.id = "purcentBonnesReponses";
	pourcentElt.className = "font-size20";
	pourcentElt.textContent = "Nombre Mystére : "+NombreMAxCalcul;
	document.getElementById("zoneCalcul").appendChild(pourcentElt);
	document.getElementById("zoneCalcul").appendChild(spanGoodElt);
	
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
