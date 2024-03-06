numberClass = 0;




function hasardNumber(){
	
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
	num.idMax = 6;
			
	NombreOne = num.numHas();
	//alert(NombreOne);
	choix()	
	}

function choix(){
	
	//numberClass = NombreOne;
	//alert(numberClass);
	if(numberClass === 0){
		
		document.getElementById(NombreOne).style.background="#47D2E9";
		
	}else{
		if(numberClass === NombreOne){
			hasardNumber()
		}else{
			document.getElementById(numberClass).style.background="";	
			document.getElementById(NombreOne).style.background="#47D2E9";
			}	
	}
	numberClass = NombreOne;
	
}
	
	
// bouton pour lancer calcul
var boutonHasard = document.getElementById("hasard");
boutonHasard.addEventListener("click", hasardNumber);

