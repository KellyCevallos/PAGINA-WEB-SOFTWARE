function validar() {
	var usuario = document.getElementById("usuario").value;
	var password = document.getElementById("password").value;
	
	if(usuario === "") {
		alert("El usuario es obligatorio");
		return false;
	}
	
	if(password === "") {
		alert("La contraseña es obligatoria");
		return false;
	}

	
	return true;
}
