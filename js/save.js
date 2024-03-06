function ajout(){



var ObjCalcul = {
									
									essais : essaisjson,
							        numberOne : numberOne,
							        numberTwo : numberTwo,
							        mdp : mdp,
							        calcul : calcul,
							        valueResult : valueResult,
							    
							    };
							var prout = "obj"+essaisjson;
							var prout = Object.create(ObjCalcul);
							prout.essais = essaisjson;
							prout.numberOne = numberOne;
							prout.numberTwo = numberTwo;
							prout.mdp = mdp;
							prout.calcul = calcul;
							prout.valueResult = valueResult;
							
							arrayObjCalcul.push(prout);
							//alert(arrayObjCalcul.length);
													
							//jsonTwo = JSON.stringify(arrayObjCalcul);
							//localStorage.setItem("objetTwo",jsonTwo);
			
}

function saveScore(){
	
	
	var ObjScore = {
									
					bonnesReponses : bonneReponse,
					mauvaiseReponse : mauvaiseReponse,
					pourcent : pourcent,
							    
					};
					var scoree = Object.create(ObjScore);
					scoree.bonneReponse = bonneReponse;
					scoree.mauvaiseReponse = mauvaiseReponse;
					scoree.pourcent = pourcent;
					
					arrayScore.push(scoree);
					
					//jsonScore = JSON.stringify(arrayScore);
					//localStorage.setItem("jsonScore",jsonScore);
	
	
	
}

function save(){



var sauvegarde = {
	
	storageDate:"",
	storageNumberEssais:"",
	storageTypeCalcul:"",
	storageNumberMax:"",
	
	
	
	
}
			datess();
			sauvegarde.storageDate = date;
			sauvegarde.storageNumberEssais = essais;
			sauvegarde.storageTypeCalcul = selection;
			sauvegarde.storageNumberMax = nbMaxi;
			sauvegarde.storageArrayOdj = arrayObjCalcul;
			sauvegarde.jsonScore = arrayScore;
			//sauvegarde.storageMdp = mdp;
			
			localStorage.removeItem("objet");
			var sauvegarde_json = JSON.stringify(sauvegarde);
			localStorage.setItem("objet",sauvegarde_json);
			
}









