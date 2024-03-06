var selection = 0;
var essaisPlus=0;
var bonneReponse = 0;
var mauvaiseReponse = 0;
var pourcent=0;
var code = "a";
var arrayObjCalcul = [];
var arrayScore = [];
var jsonTwo;
var date;
var compteur=0;
var openParaStatus=false;
//Parametres



//Nombre de calcul
essais = document.getElementById("numberEssais").value;
document.getElementById("reportNbCalcul").textContent = "Nb Calcul : "+essais;

//Nombre d'essais input
document.getElementById("numberEssais").addEventListener("blur", function (e) {
	essais = document.getElementById("numberEssais").value;
	document.getElementById("essaisRestant").textContent = essais;
	document.getElementById("reportNbCalcul").textContent = "Nb Calcul : "+essais;
});


// Operation + ou -
function alacon(){
	document.getElementById("operation").textContent = '';
	if(parseInt(selection) === 0){
		document.getElementById("operation").textContent += "+";
		selection = 0;
	}else if(parseInt(selection) === 1){
		document.getElementById("operation").textContent += "-";
		selection = 1;
	}
	
}


// nouveau calcul
function hasardNumber(){
		document.getElementById("operation").textContent = '';
		document.getElementById("operation").textContent += "+";
	
	//alacon()
	
	var arrCalcul = [];
	
	document.getElementById("result").value = '';
	document.getElementById('result').focus();
			
	//objet Calcul
	var num = {
		minNumber: "",
		maxNumber: "",
		
		numHas: function () {
			        var nId = Math.floor(Math.random() * (this.maxNumber + 1) + this.minNumber); // la fonction magique
			        return nId;
			    }
		};
			
	//var nbReset = Object.create(num);
	num.minNumber = 0;
	num.maxNumber = 10;
			
	numberOne = num.numHas();
	//var numberTwoS = num.numHas();
	
	// si soustraction on inverse nombre si numberOneS < numberTwoS pour eviter les - dans resultats		
	/*if((numberOneS < numberTwoS) && selection === 1){
		numberOne = numberTwoS
		//numberTwo = numberOneS
	}else{
		numberOne = numberOneS
		//numberTwo = numberTwoS
	}*/
			
	document.getElementById("numberOne").textContent = '';
	document.getElementById("numberOne").textContent += numberOne;
	//document.getElementById("numberTwo").textContent = '';
	//document.getElementById("numberTwo").textContent += numberTwo;
			
}


function li(essaisPlus){
	var flexDivElt = document.createElement("div");
	flexDivElt.className = "flexAdd";
	
	var divCorElt = document.createElement("div");
	divCorElt.className = "faux";
	
	if(valueResult === "faux"){
		divCorElt.textContent = "Rép : "+calcul;
	}
	compteur += 1;
	var spanElt = document.createElement("div");
	spanElt.className = "addPlus";
	spanElt.style.color = styleResult;
	spanElt.textContent = valueResult;
	
	var divCompteurElt = document.createElement("div");
	divCompteurElt.className = "compteur";
	divCompteurElt.textContent = compteur;
	
	var pythonElt = document.createElement("div");
	pythonElt.className = "add";
	if(selection === 0){
			pythonElt.textContent = numberOne +" + "+ mdp +" = 10";
	}else if(selection === 1){
			pythonElt.textContent = numberOne +" - "+ mdp +" = "+ mdp;
	}
	
	ajout()
	//save()
	flexDivElt.appendChild(divCompteurElt);
	flexDivElt.appendChild(pythonElt);
	flexDivElt.appendChild(spanElt);
	flexDivElt.appendChild(divCorElt);
	document.getElementById("zoneResult").insertBefore(flexDivElt,document.getElementById("zoneResult").firstChild);
}



function valider(evt) {
	
	
	evt.preventDefault();
	// value du resultat entree dans 
	mdp = document.getElementById("result").value;
						
	if(mdp === ""){
					
		alert("Veuillez entrer un nombre");
	}else{		
						
		if(selection === 0){
				calcul = 10 - numberOne;
		}else if(selection === 1){
				calcul = numberOne - numberTwo;
		}
						
		if(parseInt(mdp) === parseInt(calcul)){
				valueResult = "bon";
				styleResult = "green";
				bonneReponse += 1;
		}else{
							//alert("Faux");
				valueResult = "faux";
				styleResult = "red";
				mauvaiseReponse += 1;
		}
						
		var essais = document.getElementById("essaisRestant").textContent;
		essaisjson = essais;
		essais = essais-1;
		essaisPlus = essaisPlus+1;
		document.getElementById("essaisRestant").textContent = essais;
						
		li(essaisPlus)
		// Condition si dernier calcul
		if(essais <= 0){
							
				document.getElementById("zoneForm").style.display = "none";
				document.getElementById("essaisRestant").textContent = essais;
				divScore()
				document.getElementById('numberEssais').disabled = false;
				document.getElementById('lanceJeux').disabled = false;
				document.getElementById("lanceJeux").textContent = "Relancer";
							
		}else{
				hasardNumber();
			}
	}		
						
						
};

// bouton pour Valider calcul
var boutonNewCalcul = document.getElementById("newCalcul");
boutonNewCalcul.addEventListener("click", valider);


