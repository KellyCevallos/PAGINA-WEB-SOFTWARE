document.addEventListener('DOMContentLoaded', function() {
  fetch('graduates.json')
      .then(response => response.json())
      .then(data => {
          const graduates = data.graduates; // Obtener la lista de graduados del JSON
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

              // Aquí no es necesario mostrar la imagen, ya que no está presente en los datos
          }

          function clearStudentInfo() {
              studentInfo.innerHTML = "";
              // No hay imagen para limpiar en este caso
          }

          function displaySuccessMessage() {
              alert("Se ha agregado un nuevo graduado");
          }
      })
      .catch(error => console.error('Error al cargar los datos:', error));
});
