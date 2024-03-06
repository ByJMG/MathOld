var selection = 0;
var essais = 5;
var nbMaxi = 10;
var essaisPlus=0;
var bonneReponse = 0;
var mauvaiseReponse = 0;
var pourcent=0;
var code = "relancer";
var arrayObjCalcul = [];
var arrayScore = [];
var jsonTwo;
var date;
var compteur=0;
var openParaStatus=false;

/*window.addEventListener("beforeunload", function (event) {
  event.returnValue = "\o/";
  alert('mes fesses')
});*/
//Parametres

document.getElementById("numberEssais").value = essais;

document.getElementById("numberEssais").addEventListener("blur", function (e) {
	essais = document.getElementById("numberEssais").value;
	document.getElementById("essaisRestant").textContent = essais;
});

// Affichage du code type de calcul
document.getElementById("typeCalcul").addEventListener("change", function (e) {
    
    var typeCalcul = e.target.value;
    document.getElementById("zoneResult").textContent = '';
    //document.getElementById("essaisRestant").textContent = essais;
    document.getElementById("operation").textContent = '';
    if(parseInt(typeCalcul) === 0){
		document.getElementById("operation").textContent += "+";
		selection = 0;
		document.getElementById('result').focus();
	}else if(parseInt(typeCalcul) === 1){
		document.getElementById("operation").textContent += "-";
		selection = 1;
		document.getElementById('result').focus();
	}
    //var display = document.getElementById("zoneCalcul").style.display = "block";
    
});

// Affichage du code type de calcul
document.getElementById("numberMax").addEventListener("change", function (e) {
    nbMaxi = e.target.value;
});


// Ouverture Volet Paramètres
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



function affiche(){
	
	if(openParaStatus === true){
		openparameter()
	}
	
	setTimeout(function () {
			document.getElementById('zoneCalcul').classList.add('animation-open-para');
			
	}, 1000);
	
	if(parseInt(typeCalcul) === 0){
		document.getElementById("operation").textContent += "+";
		selection = 0;
		document.getElementById('result').focus();
	}else if(parseInt(typeCalcul) === 1){
		document.getElementById("operation").textContent += "-";
		selection = 1;
		document.getElementById('result').focus();
	}else if(selection === 2){
		hasardTypeOperation()		
	}	
	
	
	
	
	
	
	
	localStorage.removeItem("objet");
	save()
	document.getElementById('typeCalcul').disabled = true;
    document.getElementById('numberEssais').disabled = true;
    document.getElementById('numberMax').disabled = true;
    document.getElementById("essaisRest").style.display = "block";
    var pBon = document.getElementById('bonnesReponses');
    var ptext = document.getElementById('lanceJeux').textContent;
    if(ptext === "Relancer"){
	    var verif = prompt("code");
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
			//document.getElementById("lanceJeux").style.display = "none";
			document.getElementById('lanceJeux').disabled = true;
			document.getElementById('result').focus();
			document.getElementById("essaisRestant").textContent = essais;
    
			newCalcul()
		    
		}else{
		    alert("Code Incorrect");
	    }
	    
    }else{
	    
	    document.getElementById("zoneCalcul").style.display = "block";
		document.getElementById("zoneForm").style.display = "block";
		//document.getElementById("lanceJeux").style.display = "none";
		document.getElementById('lanceJeux').disabled = true;
		//document.getElementById('result').focus();
		document.getElementById("essaisRestant").textContent = essais;
    
		newCalcul()
	}
	
}


// nouveau calcul
function newCalcul(){
	
			if(selection === 2){
				hasardTypeOperation()
			}
	
			var arrCalcul = [];
			//alert("select"+selection);
			//document.getElementById("resultA").textContent = '';
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
			num.maxNumber = nbMaxi;
			
			var numberOneS = num.numHas();
			var numberTwoS = num.numHas();
			
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
		divCorElt.textContent = "Reponse : "+calcul;
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
	
	ajout()
	save()
	flexDivElt.appendChild(divCompteurElt);
	flexDivElt.appendChild(pythonElt);
	flexDivElt.appendChild(spanElt);
	flexDivElt.appendChild(divCorElt);
	document.getElementById("zoneResult").insertBefore(flexDivElt,document.getElementById("zoneResult").firstChild);
}

function divScore(){
	document.getElementById("essaisRest").style.display = "none";
	pourcent = (bonneReponse / essais)*100
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
		saveScore();
		save();		
							var loadOjet = localStorage.getItem("objet");
							//alert(loadOjet.length);
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

// Empeche rechargement page au submit du form
document.getElementById('zoneForm').addEventListener('submit', function(e) {
     e.preventDefault();
}, false);


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
							//alert("Bon");
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
						//essaisjson = essais+1;
						document.getElementById("essaisRestant").textContent = essais;
						
						li(essaisPlus)
						// Condition si dernier calcul
						//
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
							newCalcul();
						}
						
				}		
						
						
			};

// bouton pour Valider calcul
var boutonNewCalcul = document.getElementById("newCalcul");
boutonNewCalcul.addEventListener("click", valider);

// bouton pour lancer calcul
var boutonlancerCalcul = document.getElementById("lanceJeux");
boutonlancerCalcul.addEventListener("click", affiche);

var openpara = document.getElementById("open-para");
openpara.addEventListener("click", openparameter);
