 //*Validaciones

// Función que se ejecutará al enviar el formulario
document.getElementById('miFormulario').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita el envío predeterminado del formulario

  // Obtiene los valores de los campos del formulario (agrega los campos restantes)
  var nombre = document.getElementById('nombre').value;
  var telefono = document.getElementById('telefono').value;
  var correo = document.getElementById('correo').value;
  var direccion = document.getElementById('direccion').value;
  var descripcion = document.getElementById('descripcion').value;
  var categoria = document.getElementById('categoria').value

  // Verifica si los campos obligatorios están llenos
  if (nombre.trim() !== '' && telefono.trim() !== '' && correo.trim() !== '' && direccion.trim() !== '' && descripcion.trim() !== '' && categoria.trim() !== '') {
      // Muestra una alerta de confirmación usando SweetAlert
      Swal.fire({
          title: '¿Estás seguro?',
          text: '¿Quieres guardar el formulario con los datos ingresados?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Sí, guardar',
          cancelButtonText: 'Cancelar'
      }).then((result) => {
          // Si el usuario confirma, se envía el formulario y luego se redirige
          if (result.isConfirmed) {
              // Envía el formulario
              window.location.href = '/assets/pages/Productos.html';
          }
      });
  } else {
      // Si algún campo obligatorio está vacío, muestra una alerta de error
      Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Por favor, completa todos los campos obligatorios.',
          showConfirmButton: false,
          timer: 2000
      });
  }
});