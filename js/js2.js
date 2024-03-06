var chiffre = [
	{"id":0,"number":0,"numberLetter":"zero"},
	{"id":1,"number":1,"numberLetter":"un"},
	{"id":2,"number":2,"numberLetter":"deux"},
	{"id":3,"number":3,"numberLetter":"trois"},
	{"id":4,"number":4,"numberLetter":"quatre"},
	{"id":5,"number":5,"numberLetter":"cinq"},
	{"id":6,"number":6,"numberLetter":"six"},
	{"id":7,"number":7,"numberLetter":"sept"},
	{"id":8,"number":8,"numberLetter":"huit"},
	{"id":9,"number":9,"numberLetter":"neuf"},

];

var nombreDiz = [
	{"id":0,"number":1,"numberLetter":"dix"},
	{"id":1,"number":11,"numberLetter":"onze"},
	{"id":2,"number":12,"numberLetter":"douze"},
	{"id":3,"number":13,"numberLetter":"treize"},
	{"id":4,"number":14,"numberLetter":"quatorze"},
	{"id":5,"number":15,"numberLetter":"quinze"},
	{"id":6,"number":16,"numberLetter":"seize"},
	{"id":7,"number":2,"numberLetter":"vingt"},
	{"id":8,"number":3,"numberLetter":"trente"},
	{"id":9,"number":4,"numberLetter":"quarante"},
	{"id":10,"number":5,"numberLetter":"cinquante"},
	{"id":11,"number":6,"numberLetter":"soixante"},
	{"id":12,"number":7,"numberLetter":"soixante"},
	{"id":13,"number":8,"numberLetter":"quatre-vingt"},
	{"id":14,"number":9,"numberLetter":"quatre-vingt"},

];
var selection = 0;
var bonneReponse = 0;
var mauvaiseReponse = 0;
var pourcent=0;
var code = "a";
var openParaStatus=false;
var essaisPlus=0;
var compteur=0;

function typeCalculSwitch(){
	switch (typeCalcul) {
				  case 1:
				    typeCalculReport = "Lettres";
				    break;
				  default:
				    typeCalculReport = "chiffres";
				}
}
//Nombre de calcul
essais = document.getElementById("numberEssais").value;
document.getElementById("reportNbCalcul").textContent = "Nb Calcul : "+essais;

// Type de calcul
selectTypeCalcul = document.getElementById("typeCalcul");
typeCalcul = parseInt(selectTypeCalcul.options[selectTypeCalcul.selectedIndex].value);
typeCalculSwitch();
document.getElementById("reportTypeCalcul").textContent = "Type: "+typeCalculReport;

//type de calcul select
document.getElementById("typeCalcul").addEventListener("change", function (e) {
    typeCalcul = parseInt(e.target.value);
    typeCalculSwitch();
    document.getElementById("reportTypeCalcul").textContent = "Type Calcul : "+typeCalculReport;
});

//Nombre d'essais input
document.getElementById("numberEssais").addEventListener("blur", function (e) {
	essais = document.getElementById("numberEssais").value;
	document.getElementById("essaisRestant").textContent = essais;
	document.getElementById("reportNbCalcul").textContent = "Nb Calcul : "+essais;
});


/*function affiche(){
	
	if(openParaStatus === true){
		openparameter()
	}
	
	document.getElementById("zoneCalcul").style.display = "block";
	
	localStorage.removeItem("objet");
	//save()
	document.getElementById('typeCalcul').disabled = true;
    document.getElementById('numberEssais').disabled = true;
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
    
		hasardNumber()
	}
	
}*/

function hasardNumber(){
document.getElementById("result").value = '';
document.getElementById('result').focus();
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
	num.idMin = 0;
	num.idMax = 14;
			
	var idNombreDiz = num.numHas();
	
	
	num.idMin = 0;
	num.idMax = 9;
	
	var idChiffre = num.numHas();
	
	
	//alert("dizaine : " + idNombreDiz);
	//alert("chiffre : " + idChiffre);
	
	//var = nombre.nombreDiz(1)
	//alert(nombreDiz.length);
	
	//alert(nombreDiz[idNombreDiz].id);
	
	numberidDiz = nombreDiz[idNombreDiz].id;
	numbernumberDiz = nombreDiz[idNombreDiz].number;
	numberinumberLetterDiz = nombreDiz[idNombreDiz].numberLetter;
	
	//alert(numberinumberLetterDiz);
	
	numberidChiffre = chiffre[idChiffre].id;
	numbernumberChiffre = chiffre[idChiffre].number;
	numberinumberLetterChiffre = chiffre[idChiffre].numberLetter;
	numberLetter()
}

function numberLetter(){
	document.getElementById("chiffreEnLettre").textContent = "";	
	if(numberidDiz >= 1 && numberidDiz <= 6){
		numberinumberLetter = numberinumberLetterDiz;
		document.getElementById("chiffreEnLettre").textContent += numberinumberLetterDiz;
		numberVerif = ""+numbernumberDiz;
		//alert("erty");
		//document.getElementById("chiffre").textContent += numbernumberDiz;
	}else if(numberidChiffre === 0){
		numberinumberLetter = numberinumberLetterDiz;
		document.getElementById("chiffreEnLettre").textContent += numberinumberLetterDiz;
		numberVerif = numbernumberDiz +""+ numbernumberChiffre;
		//document.getElementById("chiffre").textContent += numbernumberDiz +""+ numbernumberChiffre;
		
	}else if(numberidChiffre === 1){
		numberinumberLetter = numberinumberLetterDiz +" et "+ numberinumberLetterChiffre;
		document.getElementById("chiffreEnLettre").textContent += numberinumberLetterDiz +" et "+ numberinumberLetterChiffre;
		numberVerif = numbernumberDiz +""+ numbernumberChiffre;
		//document.getElementById("chiffre").textContent += numbernumberDiz +""+ numbernumberChiffre;
		
	}else if((numberidDiz === 12 || numberidDiz === 14) && numberidChiffre >= 7){
		numberinumberLetter = numberinumberLetterDiz +"-dix-"+ numberinumberLetterChiffre;
		document.getElementById("chiffreEnLettre").textContent += numberinumberLetterDiz +"-dix-"+ numberinumberLetterChiffre;
		numberVerif = numbernumberDiz +""+ numbernumberChiffre;
		//document.getElementById("chiffre").textContent += numbernumberDiz +""+ numbernumberChiffre;
		
	}else if((numberidDiz === 12 || numberidDiz === 14) && numberidChiffre <= 6){
		
		switch (numberidChiffre) {
				  case 1:
				    numberinumberLetterChiffre = "onze";
				    break;
				  case 2:
				    numberinumberLetterChiffre = "et douze";
				    break;
				  case 2:
				    numberinumberLetterChiffre = "douze";
				    break;
				  case 3:
				    numberinumberLetterChiffre = "treize";
				    break;
				  case 4:
				    numberinumberLetterChiffre = "quatorze";
				    break;
				  case 5:
				    numberinumberLetterChiffre = "quinze";
				    break;
				  case 6:
				    numberinumberLetterChiffre = "seize";
				    break;
				  default:
				    numberinumberLetterChiffre = "dix";
				}
				
		numberinumberLetter = numberinumberLetterDiz +"-"+ numberinumberLetterChiffre;
		document.getElementById("chiffreEnLettre").textContent += numberinumberLetterDiz +"-"+ numberinumberLetterChiffre;
		numberVerif = numbernumberDiz +""+ numbernumberChiffre;
		//document.getElementById("chiffre").textContent += numbernumberDiz +""+ numbernumberChiffre;
		
	}else{
		numberinumberLetter = numberinumberLetterDiz +"-"+ numberinumberLetterChiffre
		document.getElementById("chiffreEnLettre").textContent += numberinumberLetterDiz +"-"+ numberinumberLetterChiffre;
		numberVerif = numbernumberDiz +""+ numbernumberChiffre;
		//document.getElementById("chiffre").textContent += numbernumberDiz +""+ numbernumberChiffre;
		
	}
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
			pythonElt.textContent = numberinumberLetter +" = "+ mdp;
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
	
	if(mdp === numberVerif){
				//alert("bon");
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

// bouton pour lancer calcul
var boutonlancerCalcul = document.getElementById("newCalcul");
boutonlancerCalcul.addEventListener("click", valider);

