// For the revenue chart
const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(ctxRevenue, {
    type: 'line',
    data: {
        labels: ['Feb 17', 'Feb 15', 'Mar 17', 'Apr 17', 'May 17'],
        datasets: [{
            label: 'Revenue',
            data: [150, 200, 250, 200, 180, 210],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// For the hot products pie chart
const ctxHotProducts = document.getElementById('hotProductsChart').getContext('2d');
const hotProductsChart = new Chart(ctxHotProducts, {
    type: 'pie',
    data: {
        labels: ['iPhone', 'Samsung', 'Huawei', 'General Mobile', 'Xiaomi'],
        datasets: [{
            label: 'Hot Products',
            data: [20, 30, 15, 25, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
