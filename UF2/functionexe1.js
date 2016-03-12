function esVocal(letra){
		intro = letra.toLowerCase();
		switch(intro){
				case 'a':
				case 'e':
				case 'i':
				case 'o':
				case 'u':
				return true;
		}
		return false;
}
function esEspacio(letra){
	if(letra==' '){
		return true;
	}
	return false;
}
