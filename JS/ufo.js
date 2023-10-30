// Replace 'YOUR_API_KEY' with your actual NASA API key
const apiKey = 'AuaLP3WXeyJBCFWERKFcASxXco0E5mpkxJtyaCr4';

// Function to fetch and display NEO data
function fetchAndDisplayData() {
  // Select date input fields and the button
  const startDateInput = document.getElementById('startDate');
  const endDateInput = document.getElementById('endDate');

  // Get user-provided dates
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;

  // Select the container for the chart
  const chartContainer = d3.select('#neo-data');

  // Validate input dates (you can add more thorough validation)
  if (startDate && endDate) {
    // Reconstruct the API URL with user-provided dates
    const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;

    // Clear previous data and errors
    chartContainer.html('');

    // Fetch and update data based on user input
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Extract relevant NEO data
        const neoData = data.near_earth_objects;

        // Process data for the chart (e.g., count NEOs per date)
        const neoCountByDate = {};
        Object.keys(neoData).forEach(date => {
          neoCountByDate[date] = neoData[date].length;
        });

        // Convert data to an array of objects for D3
        const dataArray = Object.entries(neoCountByDate).map(([date, count]) => ({ date, count }));

        // Define chart dimensions
        const margin = { top: 20, right: 20, bottom: 30, left: 40 };
        const width = 800 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        // Create scales for the chart
        const xScale = d3.scaleBand()
          .domain(dataArray.map(d => d.date))
          .range([0, width])
          .padding(0.1);

        const yScale = d3.scaleLinear()
          .domain([0, d3.max(dataArray, d => d.count)])
          .nice()
          .range([height, 0]);

        // Create an SVG element for the chart
        const svg = chartContainer
          .append('svg')
          .attr('width', 800)
          .attr('height', 400);

        // Create a chart group
        const chart = svg
          .append('g')
          .attr('transform', `translate(${margin.left},${margin.top})`);

        // Create bars for the bar chart
        chart.selectAll('.bar')
          .data(dataArray)
          .enter()
          .append('rect')
          .attr('class', 'bar')
          .attr('x', d => xScale(d.date))
          .attr('y', d => yScale(d.count))
          .attr('width', xScale.bandwidth())
          .attr('height', d => height - yScale(d.count));

        // Create x-axis
        chart.append('g')
          .attr('class', 'x-axis')
          .attr('transform', `translate(0,${height})`)
          .call(d3.axisBottom(xScale));

        // Create y-axis
        chart.append('g')
          .attr('class', 'y-axis')
          .call(d3.axisLeft(yScale));

        // Add chart title
        chartContainer.append('h2').text('Near Earth Objects (NEO) Data');

      })
      .catch(error => {
        // Handle errors
        chartContainer.append('p').text('Error: Unable to fetch NEO data.');
        console.error('Error:', error);
      });
  } else {
    // Handle invalid input
    chartContainer.html('');
    chartContainer.append('p').text('Please provide valid start and end dates.');
  }
}

// Add an event listener to the button
const fetchDataBtn = document.getElementById('fetchDataBtn');
fetchDataBtn.addEventListener('click', fetchAndDisplayData);


//google.charts.load('current', {
 // packages: ['corechart', 'line']
//});
//google.charts.setOnLoadCallback(drawBasic);

//function drawBasic() {

  //var data = new google.visualization.DataTable();
  //data.addColumn('number', '1900');
  //data.addColumn('number', 'Distance to Earth');

  //data.addRows([
    
    //[1900,47112732.928149391],
    //[1907, 70533232.893794475],
    //[1917, 74687814.59975122],
    //[1924, 53823292.394218643],
    //[1931, 26040971.835879446],
    //[1938, 32164326.017637735],
   // [1944, 60289296.383270507],
    //[1961, 66195880.154722887],
   // [1968, 39833635.134625859],
   // [1975, 22609353.042813383],
    //[1981, 46149346.251893277],
   // [1988, 69957978.998277599],
   // [2005, 54688077.782936714],
    //[2012, 26729521.135077032],
   // [2019, 31205919.274956477],
   // [2025, 59487215.181119528],
   


  //]);

  //var options = {
   // hAxis: {
 //     title: 'Year'
   // },
  //  vAxis: {
  //    title: 'Distance in KM to Earth'
   // }
  //};

  //var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

  //chart.draw(data, options);
//}





//Second graph
data = [{
  date: 1900,
  distance: 47112732
}, {
  date: 1907,
  distance: 70533232
}, {
  date: 1917,
  distance: 74687814
}, {
  date: 1924,
  distance: 53823292
}, {
  date: 1931,
  distance: 26040971
}, {
  date: 1938,
  distance: 32164326
}, {
  date: 1944,
  distance: 60289296
}, {
  date: 1961,
  distance: 66195880
}, {
  date: 1968,
  distance: 39833635
}, {
  date: 1975,
  distance: 22609353
}, {
  date: 1981,
  distance: 46149346
}, {
  date: 1988,
  distance: 69957978
}, {
  date: 2005,
  distance: 54688077
}, {
  date: 2012,
  distance: 26729521
}, {
  date: 2019,
  distance: 31205919
}, {
  date: 2025,
  distance: 59487215
}, {
  date: 2042,
  distance: 66741851
}, {
  date: 2049,
  distance: 40773698
}, {
  date: 2056,
  distance: 22407094
}, {
  date: 2062,
  distance: 45321201
}, {
  date: 2069,
  distance: 69522351
}, {
  date: 2100,
  distance: 30499881
}, {
  date: 2106,
  distance: 58685936
}]

var margin = {
  top: 10,
  right: 15,
  bottom: 20,
  left: 100
}

var section = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

//making graph responsive
default_width = 1000 - margin.left - margin.right;
default_height = 700 - margin.top - margin.bottom;
default_ratio = default_width / default_height;

// Determine current size, which determines vars
function set_size() {
  current_width = window.innerWidth;
  current_height = window.innerHeight;
  current_ratio = current_width / current_height;
  // desktop
  if (current_ratio > default_ratio) {
      h = default_height;
      w = default_width;
      // mobile
  } else {
      margin.left = 40
      w = current_width - 40;
      h = w / default_ratio;
  }
  // Set new width and height based on graph dimensions
  width = w - 50 - margin.right;
  height = h - margin.top - margin.bottom;
};
set_size();
//end responsive graph code


// format the data
data.forEach(function (d) {
  parseDate = d3.timeParse("%Y");
  d.date = parseDate(d.date);
  d.distance = +d.distance;
});
//sort the data by date so the trend line makes sense
data.sort(function (a, b) {
  return a.date - b.date;
});

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// Scale the range of the data
x.domain(d3.extent(data, function (d) {
  return d.date;
}));
y.domain([0, d3.max(data, function (d) {
  return d.distance;
})]);

// define the line
var valueline = d3.line()
  .x(function (d) {
      return x(d.date);
  })
  .y(function (d) {
      return y(d.distance);
  });

// append the svg object to the body of the page
var svg = d3.select("#scatter").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

// Add the trendline
svg.append("path")
  .data([data])
  //.attr("class", "line")
  //.attr("d", valueline)
  //.attr("stroke", "#32CD32")
  //.attr("stroke-width", 2)
  //.attr("fill", "#FFFFFF");

// Add the data points
var path = svg.selectAll("dot")
  .data(data)
  .enter().append("circle")
  .attr("r", 5)
  .attr("cx", function (d) {
      return x(d.date);
  })
  .attr("cy", function (d) {
      return y(d.distance);
  })
  .attr("stroke", "#32CD32")
  .attr("stroke-width", 5)
  //.attr("fill", "#FFFFFF")
  .on('mouseover', function (d, i) {
      d3.select(this).transition()
          .duration('100')
          .attr("r", 10);
      div.transition()
          .duration(100)
          .style("opacity", 1);
      div.html("KM" + d3.format(".2f")(d.distance))
          .style("left", (d3.event.pageX + 10) + "px")
          .style("top", (d3.event.pageY - 15) + "px");
  })
  .on('mouseout', function (d, i) {
      d3.select(this).transition()
          .duration('200')
          .attr("r", 10);
      div.transition()
          .duration('200')
          .style("opacity", 0);
  });

// Add the axis
if (width < 500) {
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(5));
} else {
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
}

svg.append("g")
  .call(d3.axisLeft(y).tickFormat(function (d) {
      return "KM" + d3.format(".2f")(d)
  }));
