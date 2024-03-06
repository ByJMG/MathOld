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


function typeCalculSwitch(){
	switch (typeCalcul) {
			case 1:
				typeCalculReport = "Soustraction";
				break;
			case 2:
				typeCalculReport = "Hasard";
				break;
			default:
				typeCalculReport = "Addition";
			}
}

function nbMaxiSwitch(){
	switch (nbMaxi) {
			case 20:
				nbMaxiReport = 20;
				break;
			case 100:
				nbMaxiReport = 100;
				break;
			case 1000:
				nbMaxiReport = 1000;
				break;
			default:
			nbMaxiReport = 10;
				}
	
}

function nbMinSwitch(){
	switch (nbMin) {
			case 1:
				nbMinReport = 1;
				break;
			case 2:
				nbMinReport = 2;
				break;
			default:
			nbMinReport = 0;
				}
	
}

//Nombre de calcul
essais = document.getElementById("numberEssais").value;
document.getElementById("reportNbCalcul").textContent = "Nb Calcul : "+essais;
// Type de calcul
selectTypeCalcul = document.getElementById("typeCalcul");
typeCalcul = parseInt(selectTypeCalcul.options[selectTypeCalcul.selectedIndex].value);
typeCalculSwitch()
document.getElementById("reportTypeCalcul").textContent = "Type Calcul : "+typeCalculReport;
// Nombre max 
numberMax = document.getElementById("numberMax");
nbMaxi = parseInt(numberMax.options[numberMax.selectedIndex].value);
nbMaxiSwitch()
document.getElementById("reportNbMax").textContent = "Nb Max : "+nbMaxiReport;

// Nombre min 
numberMin = document.getElementById("numberMin");
nbMin = parseInt(numberMin.options[numberMin.selectedIndex].value);
nbMinSwitch()
document.getElementById("reportNbMin").textContent = "Nb Min : "+nbMinReport;


//Nombre d'essais input
document.getElementById("numberEssais").addEventListener("blur", function (e) {
	essais = document.getElementById("numberEssais").value;
	document.getElementById("essaisRestant").textContent = essais;
	document.getElementById("reportNbCalcul").textContent = "Nb Calcul : "+essais;
});

//type de calcul Select
document.getElementById("typeCalcul").addEventListener("change", function (e) {
    typeCalcul = parseInt(e.target.value);
 	typeCalculSwitch()
    document.getElementById("reportTypeCalcul").textContent = "Type Calcul : "+typeCalculReport;
    
});

// select nombre maxi select
document.getElementById("numberMax").addEventListener("change", function (e) {
    nbMaxi = parseInt(e.target.value);
    nbMaxiSwitch()
    document.getElementById("reportNbMax").textContent = "Nb Max : "+nbMaxiReport;
});

// select nombre mini select
document.getElementById("numberMin").addEventListener("change", function (e) {
    nbMin = parseInt(e.target.value);
    nbMinSwitch()
    document.getElementById("reportNbMin").textContent = "Nb Min : "+nbMinReport;
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
	
	// condition Type de calcul
	if(parseInt(typeCalcul) === 2){// Hasard
		hasardTypeOperation()
	}else if(parseInt(typeCalcul) === 0){// Addition
		selection = 0;
	}else if(parseInt(typeCalcul) === 1){// Soustraction
		selection = 1;
	}
	
	alacon()
	
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
	num.minNumber = nbMin;
	if(nbMin > 0){
		nbMaxi = nbMaxi - nbMin ;
	}else{
		nbMaxi = nbMaxi ;
	}
	num.maxNumber = nbMaxi;
			
	var numberOneS = num.numHas();
	var numberTwoS = num.numHas();
	
	// si soustraction on inverse nombre si numberOneS < numberTwoS pour eviter les - dans resultats		
	if((numberOneS < numberTwoS) && selection === 1){
		numberOne = numberTwoS
		numberTwo = numberOneS
	}else{
		numberOne = numberOneS
		numberTwo = numberTwoS
	}
			
	document.getElementById("numberOne").textContent = '';
	document.getElementById("numberOne").textContent += numberOne;
	document.getElementById("numberTwo").textContent = '';
	document.getElementById("numberTwo").textContent += numberTwo;
			
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
			pythonElt.textContent = numberOne +" + "+ numberTwo +" = "+ mdp;
	}else if(selection === 1){
			pythonElt.textContent = numberOne +" - "+ numberTwo +" = "+ mdp;
	}
	
	//ajout()
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
				calcul = numberOne + numberTwo;
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
				document.getElementById('typeCalcul').disabled = false;
				document.getElementById('numberEssais').disabled = false;
				document.getElementById('numberMax').disabled = false;
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


