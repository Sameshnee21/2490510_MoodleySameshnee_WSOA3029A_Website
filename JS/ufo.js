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
