function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var lastName = document.forms["myForm"]["lastName"].value;
  var cedula = document.forms["myForm"]["cedula"].value;
  var phone = document.forms["myForm"]["phone"].value;
  var email = document.forms["myForm"]["email"].value;
  var password = document.forms["myForm"]["password"].value;
  var confirmPassword = document.forms["myForm"]["confirmPassword"].value;
  var admissionDate = document.forms["myForm"]["admissionDate"].value;
  var graduationDate = document.forms["myForm"]["graduationDate"].value;
  var gender = document.forms["myForm"]["gender"].value;

  // Check if all required fields are filled
  if (name == "" || lastName == "" || cedula == "" || phone == "" || email == "" || password == "" || confirmPassword == "" || admissionDate == "" || graduationDate == "" || gender == "") {
    alert("Todos los campos son requeridos");
    return false;
  }

  // Check if cedula is a valid Ecuadorian ID
  if (!/^[0-9]{10}$/.test(cedula)) {
    alert("Cédula inválida, debe tener 10 dígitos");
    return false;
  }

  // Check if phone number is a valid Ecuadorian number
  if (!/^09[0-9]{8}$/.test(phone)) {
    alert("Número de teléfono inválido, debe tener 10 dígitos y empezar por 09");
    return false;
  }

  // Check if email is a valid format
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Correo electrónico inválido, debe tener el formato ejemplo@ejemplo.com");
    return false;
  }

  // Check if password and confirm password match
  if (password != confirmPassword) {
    alert("Las contraseñas no coinciden");
    return false;
  }

  return true;
}

