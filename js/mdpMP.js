function mdpMPP(){
	
	if(typeCalcul === 1){
		
		if(mdpMP === 0){
		mdpMP = "&#8249;";
		}else if(mdpMP === 1){
		mdpMP = "&#8250;";
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