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
    .attr("class", "line")
    .attr("d", valueline)
    //.attr("stroke", "#32CD32")
    //.attr("stroke-width", 2)
    .attr("fill", "#FFFFFF");

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
    .attr("fill", "#FFFFFF")
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