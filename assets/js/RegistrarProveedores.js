






//DAGUFF EN KICK

document.addEventListener("DOMContentLoaded", function () {
    const productForm = document.getElementById("product-form");
    
    const addButton = productForm.querySelector(".register-button");
    const cancelButton = productForm.querySelector(".cancel-button");
  
    addButton.addEventListener("click", function (event) {
      event.preventDefault();
      
      Swal.fire({
        title: "Proveedor agregado ",
        text: "El proveedor ha sido registrada exitosamente.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      });
      
      setTimeout(function () {
        window.location.href = "/assets/pages/proveedoreAdmin.html";
      }, 1500);
    });
  
    cancelButton.addEventListener("click", function (event) {
      event.preventDefault();
      
      Swal.fire({
        title: "Cancelar",
        text: "¿Estás seguro de que quieres cancelar el registro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, cancelar",
        cancelButtonText: "No, volver"
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/assets/pages/proveedoreAdmin.html";
        }
      });
    });
  });

  // Función para mostrar una alerta antes de redirigir
function confirmNavigation(url) {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "Es posible que no se guarden los cambios.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, continuar",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = url;
    }
  });
}

// Asignar la función a los enlaces
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("#sidebar a");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const url = link.getAttribute("href");
      confirmNavigation(url);
    });
  });
});



    


