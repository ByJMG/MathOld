var selection = 0;
var typeCalcul;
var essais = 7;
var bonneReponse = 0;
var mauvaiseReponse = 0;
var pourcent=0;
var code = "a";
var openParaStatus=false;
var essaisPlus=0;
var compteur=0;
var NombreOne;
var Nombretwo;

function typeCalculSwitch(){
	switch (typeCalcul) {
				  case 1:
				    typeCalculReport = "SYMBOLE (< >)";
				    break;
				  case 2:
				    typeCalculReport = "Mix";
				    break;
				  default:
				    typeCalculReport = "Lettres (Plus grand ou Petit)";
				}
}

//Nombre de calcul
document.getElementById("numberEssais").value = essais;
document.getElementById("reportNbCalcul").textContent = "Nb Calcul : "+essais;
selectTypeCalcul = document.getElementById("typeCalcul");
typeCalcul = selectTypeCalcul.selectedIndex;
typeCalculSwitch()
document.getElementById("reportTypeCalcul").textContent = "Type: "+typeCalculReport;

//type de calcul
document.getElementById("typeCalcul").addEventListener("change", function (e) {
    
    typeCalcul = parseInt(e.target.value);
    typeCalculSwitch()
    document.getElementById("reportTypeCalcul").textContent = "Type : "+typeCalculReport;
    
    
});

document.getElementById("numberEssais").addEventListener("blur", function (e) {
	essais = document.getElementById("numberEssais").value;
	document.getElementById("essaisRestant").textContent = essais;
	document.getElementById("reportNbCalcul").textContent = "Nb Calcul : "+essais;
});

function hasardNumber(){
	
//objet Calcul
	var num = {
		idMin: "",
		idMax: "",
		
		numHas: function () {
			        var nId = Math.floor(Math.random() * (this.idMax + 1) + this.idMin); // la fonction magique
			        return nId;
			    }
		};
			
	//var nbReset = Object.create(num);
	num.idMin = 1;
	num.idMax = 99;
			
	NombreOne = num.numHas();
	Nombretwo = num.numHas();
	numberLetter(NombreOne, Nombretwo);	
		
	}

function numberLetter(NombreOne, Nombretwo){
	document.getElementById("select-sign").value = 'c';
	
	document.getElementById("number-one").textContent = "";
	document.getElementById("number-two").textContent = "";	
	
	document.getElementById("number-one").textContent = NombreOne;
	document.getElementById("number-two").textContent = Nombretwo;
	}
	
function mdpMPP(){
	
	if(typeCalcul === 1){
		
		if(mdpMP === 0){
		mdpMP = "<";
		}else if(mdpMP === 1){
		mdpMP = ">";
		}else{
			mdpMP = "=";
		}
		
	}else{
		if(mdpMP === 0){
		mdpMP = "Plus petit";
		}else if(mdpMP === 1){
		mdpMP = "Plus grand";
		}else{
			mdpMP = "Égal";
		}
	}	
}

function calcull(){
	
	if(typeCalcul === 1){
		
		if(calcul === 0){
		calcul = "<";
		}else if(calcul === 1){
		calcul = ">";
		}else{
			calcul = "=";
		}
		
	}else{
		if(calcul === 0){
		calcul = "Plus petit";
		}else if(calcul === 1){
		calcul = "Plus grand";
		}else{
			calcul = "Égal";
		}
	}	
}

function valider(evt){
	evt.preventDefault();
	mdp = document.getElementById("select-sign").value;
	if(mdp === "c"){
					
		alert("Veuillez entre Plus Petit ou Plus grand");
	}else{
	
			//w = Math.min(NombreOne, Nombretwo);
			//z = Math.max(NombreOne, Nombretwo);
			
			if(mdp === "0"){
				
				if(NombreOne < Nombretwo){
							valueResult = "bon";
							styleResult = "green";
							bonneReponse += 1;
							//mdpMP = "Plus petit";
							mdpMP = 0;
							mdpMPP()
						}else if(NombreOne === Nombretwo){
							valueResult = "faux";
							styleResult = "red";
							mauvaiseReponse += 1;
							//mdpMP = "Égal";
							mdpMP = 2;
							mdpMPP()
							//calcul = "Égal";
							calcul = 2;
							calcull()
						}else{
							valueResult = "faux";
							styleResult = "red";
							mauvaiseReponse += 1;
							//mdpMP = "Plus petit";
							mdpMP = 0;
							mdpMPP()
							//calcul = "Plus grand";
							calcul = 1;
							calcull()
						}
				/*w = Math.min(NombreOne, Nombretwo);
				if(NombreOne === w){
						valueResult = "bon";
						styleResult = "green";
						bonneReponse += 1;
						mdpMP = "Plus petit";
				}else{
						valueResult = "faux";
						styleResult = "red";
						mauvaiseReponse += 1;
						mdpMP = "Plus petit";
						calcul = "Plus grand";
				}*/
				
			}else if(mdp === "1"){
				
				if(NombreOne > Nombretwo){
							valueResult = "bon";
							styleResult = "green";
							bonneReponse += 1;
							//mdpMP = "Plus grand";
							mdpMP = 1;
							mdpMPP()
						}else if(NombreOne === Nombretwo){
							valueResult = "faux";
							styleResult = "red";
							mauvaiseReponse += 1;
							//mdpMP = "Égal";
							mdpMP = 2;
							mdpMPP()
							//calcul = "Égal";
							calcul = 2;
							calcull()
						}else{
							valueResult = "faux";
							styleResult = "red";
							mauvaiseReponse += 1;
							//mdpMP = "Plus grand";
							mdpMP = 1;
							mdpMPP()
							//calcul = "Plus petit";
							calcul = 0;
							calcull()
						}
						
				/*z = Math.max(NombreOne, Nombretwo);
				if(NombreOne === z){
						valueResult = "bon";
						styleResult = "green";
						bonneReponse += 1;
						mdpMP = "Plus grand";
				}else{
						valueResult = "faux";
						styleResult = "red";
						mauvaiseReponse += 1;
						mdpMP = "Plus grand";
						calcul = "Plus petit";
				}*/
			}else{
				if(NombreOne === Nombretwo){
						valueResult = "bon";
						styleResult = "green";
						bonneReponse += 1;
						//mdpMP = "Égal";
						mdpMP = 2;
						mdpMPP()
				}else{
					
						valueResult = "faux";
						styleResult = "red";
						mauvaiseReponse += 1;
						//mdpMP = "Égal";
						mdpMP = 2;
						mdpMPP()
						if(NombreOne < Nombretwo){
							//calcul = "Plus petit";
							calcul = 0;
							calcull()
						}else{
							//calcul = "Plus grand";
							calcul = 1;
							calcull()
						}
					
				}
				
			}	
				
			
			
				
				var essais = document.getElementById("essaisRestant").textContent;
				essaisjson = essais;
				essais = essais-1;
				essaisPlus = essaisPlus+1;
				//essaisjson = essais+1;
				document.getElementById("essaisRestant").textContent = essais;
				li(essaisPlus)
				// Condition si dernier calcul
				if(essais <= 0){
									
						document.getElementById("zoneForm").style.display = "none";
						document.getElementById("essaisRestant").textContent = essais;
						divScore()
						document.getElementById('typeCalcul').disabled = false;
						document.getElementById('numberEssais').disabled = false;
						//document.getElementById('numberMax').disabled = false;
						document.getElementById('lanceJeux').disabled = false;
						document.getElementById("lanceJeux").textContent = "Relancer";
									
				}else{
						hasardNumber()
					}
	}
}

function li(essaisPlus){
	var flexDivElt = document.createElement("div");
	flexDivElt.className = "flexAdd";
	
	var divCorElt = document.createElement("div");
	divCorElt.className = "fauxPlus";
	
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
			pythonElt.textContent = NombreOne +" "+ mdpMP + " " + Nombretwo;
	
	//ajout()
	//save()
	flexDivElt.appendChild(divCompteurElt);
	flexDivElt.appendChild(pythonElt);
	flexDivElt.appendChild(spanElt);
	flexDivElt.appendChild(divCorElt);
	document.getElementById("zoneResult").insertBefore(flexDivElt,document.getElementById("zoneResult").firstChild);
}

// Empeche rechargement page au submit du form
document.getElementById('zoneForm').addEventListener('submit', function(e) {
     e.preventDefault();
}, false);

// bouton pour lancer calcul
var boutonlancerCalcul = document.getElementById("newCalcul");
boutonlancerCalcul.addEventListener("click", valider);


