var openParaStatus=false;

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

var openpara = document.getElementById("open-para");
openpara.addEventListener("click", openparameter);