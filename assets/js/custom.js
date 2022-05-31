var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Initial Supply',
           
          ],
        datasets: [{
            
            
            data: [ 1000000],
            backgroundColor: [
                ' yellow',
                'green',
                'blue'
               
            ],
            
          
            
           
            
        }]
    },
  
});
Chart.defaults.global.elements.rectangle.borderColor = '#000';
