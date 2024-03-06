function hasardTypeOperation(){
	//alert("hasard");
				//objet hasardTypeOperation
			var numType = {
			    minNumberType: "",
			    maxNumberType: "",
			    numHasType: function () {
			        var nIdType = Math.floor(Math.random() * (this.maxNumberType + 1) + this.minNumberType); // la fonction magique
			        return nIdType;
			    }
			};
			
			
			// Addition
			numType.minNumberType = 0;
			//Soustraction
			numType.maxNumberType = 10;
			
			var numberOneSType = numType.numHasType();
			/*if(numberOneSType === 0){
				selection = 0;
			}else{
				selection = 1;
				
			}*/
			
			//alert("numberH"+numberOneSType)
			
			switch (numberOneSType) {
				  case 0:
				    selection = 0;
				    break;
				  case 1:
				    selection = 1;
				    break;
				  case 2:
				    selection = 1;
				    break;
				  case 3:
				    selection = 0;
				    break;
				  case 4:
				    selection = 1;
				    break;
				  case 5:
				    selection = 0;
				    break;
				  case 6:
				    selection = 0;
				    break;
				  case 7:
				    selection = 1;
				    break;
				  case 8:
				    selection = 0;
				    break;
				  case 9:
				    selection = 1;
				    break;
				  default:
				    selection = 1;
				}

	//selection = numberOneSType;
	//alert("typeHasard"+selection);
	
	
	
}