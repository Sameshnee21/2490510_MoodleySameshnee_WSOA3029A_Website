google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Asteroid', '2025',],
        ['433 Eros ', 59487215.181119528],
        ['887 Alinda', 12296599.148443069],
        ['1566 Icarus', 14338516.51543511],
        
      ]);

      var options = {
        title: 'Predicted Asteroids in 2025',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Distance in KM',
          minValue: 0
        },
        vAxis: {
          title: 'Asteroid'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }