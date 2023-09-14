



//DAGUFF EN KICK

// TO DELETE SOMETHING
document.addEventListener("DOMContentLoaded", function () {
    const editButtons = document.querySelectorAll(".edit-button");
    const deleteButtons = document.querySelectorAll(".delete-button");

    editButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Handle edit functionality here
            console.log("Edit button clicked");
        });
    });

    deleteButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Handle delete functionality here
            console.log("Delete button clicked");
        });
    });
});


//BOTON DE SHOW

function toggleSubfila(button) {
    const row = button.parentNode.parentNode;
    const subfila = row.nextElementSibling;
    
    if (subfila.style.display === 'table-row') {
        subfila.style.display = 'none';
    } else {
        closeAllSubfilas();
        subfila.style.display = 'table-row';
    }
}

function closeAllSubfilas() {
    const subfilas = document.querySelectorAll('.subfila');
    subfilas.forEach(subfila => {
        subfila.style.display = 'none';
    });
}




	//DETALLES DE COMPRAS
    var currentlyOpenButton = null;

    function toggleSubfila(subfilaId, button) {
        var subfila = document.getElementById(subfilaId);
    
        if (currentlyOpenButton !== null && currentlyOpenButton !== button) {
            var prevSubfilaId = currentlyOpenButton.getAttribute("data-subfila");
            var prevSubfila = document.getElementById(prevSubfilaId);
            prevSubfila.style.display = "none";
            currentlyOpenButton.classList.remove("active");
        }
    
        if (subfila.style.display === "none" || subfila.style.display === "") {
            subfila.style.display = "table-row";
            button.classList.add("active");
            currentlyOpenButton = button;
        } else {
            subfila.style.display = "none";
            button.classList.remove("active");
            currentlyOpenButton = null;
        }
    }
    

//SWITCH
const toggleSwitches = document.querySelectorAll('.toggleSwitch');

toggleSwitches.forEach(switchElement => {
  switchElement.addEventListener('change', () => {
    const toggleLabel = switchElement.nextElementSibling;
    toggleLabel.style.backgroundColor = switchElement.checked ? '#66bb6a' : '#ccc';
  });
});

//BUSCADOR

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector("input[type='search']");
    const rows = document.querySelectorAll(".main-row");
  
    searchInput.addEventListener("input", function (event) {
      const searchText = event.target.value.trim().toLowerCase();
  
      rows.forEach((row) => {
        const nameColumn = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
        if (searchText === "" || nameColumn.includes(searchText)) {
          row.style.display = "table-row";
        } else {
          row.style.display = "none";
        }
      });
    });
  });
  
  
  
  