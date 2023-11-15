/*google.charts.load('current', {packages: ['corechart', 'bar']});
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
    }*/

    var data = {
      "name": "Earth",
      "children": [
        {
          "name": "B1",
          "children": [
            {
              "name": "Nope",
              "value": 320
            },
            {
              "name": "",
              "value": 29
            },
            {
              "name": "",
              "value": 82
            }, 
            {
              "name": "No",
              "value": 156
            },
            {
              "name": "Nahh",
              "value": 271
            }, 
            {
                            "name": "Nope",
                            "value": 130
                        },
                        {
                            "name": "No",
                            "value": 162
                        },
                        {
                            "name": "Big boy, but no",
                            "value": 474
                        }, 
                        {
                            "name": "",
                            "value": 78
                        },
    
                        {
                            "name": "Nope",
                            "value": 171
                        },
                        {
                            "name": "",
                            "value": 23
                        },
                        {
                            "name": "Yikes, but still no",
                            "value": 711
                        },
                        {
                            "name": "Nope",
                            "value": 220
                        },
                        {
                            "name": "",
                            "value": 27
                        },
                        {
                            "name": "",
                            "value": 32
                        },
                        {
                            "name": "",
                            "value": 113
                        },
                        {
                            "name": "Nahh",
                            "value": 156
                        },
                        {
                            "name": "",
                            "value": 85
                        },
                        {
                            "name": "",
                            "value": 18
                        },
                        {
                            "name": "",
                            "value": 3
                        },
                        {
                            "name": "Nope",
                            "value": 215
                        },
                        {
                            "name": "Nope",
                            "value": 420
                        },
                        {
                            "name": "",
                            "value": 74
                        },
                        {
                            "name": "",
                            "value": 24
                        }
    
          ]
        },
        {
          "name": "Potenial Hazard",
          "value": 485
        }
      ]
    };
    
    var packLayout = d3.pack()
      .size([600, 600]);
    
    var rootNode = d3.hierarchy(data)
    
    rootNode.sum(function(d) {
      return d.value;
    });
    
    packLayout(rootNode);
    
    var nodes = d3.select('svg g')
      .selectAll('g')
      .data(rootNode.descendants())
      .join('g')
      .attr('transform', function(d) {return 'translate(' + [d.x, d.y] + ')'})
    
    nodes
      .append('circle')
      .attr('r', function(d) { return d.r; })
    
    nodes
      .append('text')
      .attr('dy', 4)
      .text(function(d) {
        return d.children === undefined ? d.data.name : '';
      })
    
      myButton = document.getElementById('myBtn'); 

      window.onscroll = function() {scrollFunction()};
      
      function scrollFunction(){
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          myButton.style.display = "block";
      }
      else {
          myButton.style.display = "none"; 
      }
      }
      
      myButton.addEventListener('click', () => {
          document.body.scrollTop = 0; 
          document.documentElement.scrollTop = 0;
      })