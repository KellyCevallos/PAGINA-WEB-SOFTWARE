const graduates = [
    // Datos de los graduados existentes
  ];
  
  const searchForm = document.getElementById("search-form");
  const studentInfo = document.getElementById("student-info");
  const studentImage = document.getElementById("student-image");
  
  searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const studentId = document.getElementById("student-id").value;
    const student = graduates.find(graduate => graduate.id === parseInt(studentId));
    if (student) {
      displayStudentInfo(student);
    } else {
      clearStudentInfo();
    }
  });
  
  function displayStudentInfo(student) {
    studentInfo.innerHTML = `
      <h2>${student.nombre}</h2>
      <p>ID: ${student.id}</p>
      <p>Carrera: ${student.carrera}</p>
      <p>Universidad: ${student.universidad}</p>
      <p>Año de graduación: ${student.año_de_graduacion}</p>
      <p>Email: ${student.email}</p>
      <p>Teléfono: ${student.telefono}</p>
      <p>Dirección: ${student.direccion.calle}, ${student.direccion.ciudad}, ${student.direccion.pais}</p>
    `;
  
    studentImage.innerHTML = `
      <img src="${student.imagen}" alt="${student.nombre}">
    `;
  }
  
  function clearStudentInfo() {
    studentInfo.innerHTML = "";
    studentImage.innerHTML = "";
  }
  
  function displaySuccessMessage() {
    alert("Se ha agregado un nuevo graduado");
  }
  
