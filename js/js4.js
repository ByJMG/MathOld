var selection = 0;
var bonneReponse = 0;
var mauvaiseReponse = 0;
var pourcent=0;
var code = "a";
var openParaStatus=false;
var essaisPlus=0;
var compteur=0;

function NumberEssaisSwitch(){
	switch (NumberEssais) {
				  case 2:
				    NumberEssaisReport = 20;
				    break;
				  case 5:
				    NumberEssaisReport = 5;
				    break;
				  default:
				    NumberEssaisReport = 10;
				}
}

function NumberMaxSwitch(){
	switch (NumberMax) {
				  case 20:
				    NumberMaxReport = "1 à 20";
				    break;
				  case 50:
				    NumberMaxReport = "1 à 50";
				    break;
				  case 100:
				    NumberMaxReport = "1 à 100";
				    break;
				  default:
				    NumberMaxReport = "1 à 10";
				}
}

function NumberMaxSwitchDos(){
	switch (NumberMax) {
				  case 20:
				    NumberMaxReport = 20;
				    break;
				  case 50:
				    NumberMaxReport = 50;
				    break;
				  case 100:
				    NumberMaxReport = 100;
				    break;
				  default:
				    NumberMaxReport = 10;
				}
}


// niveau
selectNumberMax = document.getElementById("numberMax");
NumberMax = parseInt(selectNumberMax.options[selectNumberMax.selectedIndex].value);
NumberMaxSwitch();
document.getElementById("reportTypeCalcul").textContent = "Niveau: "+NumberMaxReport;

//type de calcul select
document.getElementById("numberMax").addEventListener("change", function (e) {
    NumberMax = parseInt(e.target.value);
    NumberMaxSwitch();
    document.getElementById("reportTypeCalcul").textContent = "Niveau: "+NumberMaxReport;
});

// Type de calcul
selectNumberEssais = document.getElementById("numberEssais");
NumberEssais = parseInt(selectNumberEssais.options[selectNumberEssais.selectedIndex].value);
NumberEssaisSwitch();
document.getElementById("reportNbCalcul").textContent = "Nombre d'essais: "+NumberEssaisReport;
essais = NumberEssaisReport;

//type de calcul select
document.getElementById("numberEssais").addEventListener("change", function (e) {
    NumberEssais = parseInt(e.target.value);
    NumberEssaisSwitch();
    document.getElementById("reportNbCalcul").textContent = "Nombre d'essais: : "+NumberEssaisReport;
    essais = NumberEssaisReport;
});




function hasardNumber(){
document.getElementById("result").value = '';
document.getElementById('result').focus();
//objet Calcul
	var num = {
		idMin: "",
		idMax: "",
		
		numHas: function () {
			        var nId = Math.floor(Math.random() * (this.idMax) + this.idMin); // la fonction magique
			        return nId;
			    }
		};
			
	//var nbReset = Object.create(num);
	num.idMin = 1;
	num.idMax = parseInt(NumberMax);
			
	NombreMAxCalcul = num.numHas();
	//alert(NombreMAxCalcul);
	
	
	
}


function li(essaisPlus){
	var flexDivElt = document.createElement("div");
	flexDivElt.className = "flexAdd";
	
	var divCorElt = document.createElement("div");
	divCorElt.className = "faux";
	
	if(valueResult === "faux"){
		divCorElt.textContent = "Rép : "+numberVerif;
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
			//pythonElt.textContent = numberinumberLetter +" = "+ mdp;
			pythonElt.textContent = mdp;
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


function valider(evt){
	evt.preventDefault();
	mdp = document.getElementById("result").value;
	//alert("mdp"+mdp);
	//alert("nb"+NombreMAxCalcul);
	
	if(parseInt(mdp) === parseInt(NombreMAxCalcul)){
				//alert("bon");
				valueResult = "bon";
				styleResult = "green";
				bonneReponse += 1;
				//alert("bon");
				document.getElementById("zoneForm").style.display = "none";
				document.getElementById("essaisRestant").textContent = essais;
				//divScoreDos();
				if(document.getElementById('typeCalcul')){ document.getElementById('typeCalcul').disabled = false;}
				if(document.getElementById('numberMax')){ document.getElementById('numberMax').disabled = false;}					
				document.getElementById('numberEssais').disabled = false;
				//document.getElementById('numberMax').disabled = false;
				document.getElementById('lanceJeux').disabled = false;
				document.getElementById("lanceJeux").textContent = "Relancer";
		}else{
				
			if(parseInt(mdp) < parseInt(NombreMAxCalcul)){
				
				numberVerif = "Plus grand";
			}else{
				
				numberVerif = "Plus petit";
			}
				
				//alert("Faux");
				valueResult = "faux";
				styleResult = "red";
				mauvaiseReponse += 1;
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
				divScoreDos();
				if(document.getElementById('typeCalcul')){ document.getElementById('typeCalcul').disabled = false;}
				document.getElementById('numberEssais').disabled = false;
				//document.getElementById('numberMax').disabled = false;
				document.getElementById('lanceJeux').disabled = false;
				document.getElementById("lanceJeux").textContent = "Relancer";
							
		}else{
				document.getElementById("result").value = '';
				document.getElementById('result').focus();
			}
	
}

// bouton pour lancer calcul
var boutonlancerCalcul = document.getElementById("newCalcul");
boutonlancerCalcul.addEventListener("click", valider);

