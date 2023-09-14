//* Graficos

document.addEventListener("DOMContentLoaded", function () {
  
  var datos = {
    labels: ["Compras", "Ventas", "Ganancias"],
    datasets: [{
        data: [638000, 1350000, 712000], 
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)', // Color para Compras
            'rgba(54, 162, 235, 0.5)', // Color para Ventas
            'rgba(75, 192, 192, 0.5)'  // Color para Ganancias
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};

var ctx = document.getElementById('myChart').getContext('2d');

// Crea el gráfico de barras
var miGrafico = new Chart(ctx, {
    type: 'bar',
    data: datos,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
});


// Grafico de pastel
document.addEventListener("DOMContentLoaded", function () {
  
  const ctx = document.getElementById("myChart2");

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Shampoo", "Crema", "Tinte", "Gomina", "Acondicionador", "Gel"],
      datasets: [
        {
          data: [12, 19, 3, 5, 11, 7],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        
      },
    },
  });
});


