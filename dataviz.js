const apiKey = 'ahQFiYRloOL65cCcG5Oq19Q1evryc7D4vK0pewih';
const url = 'https://api.nasa.gov/planetary/apod?';

let container = document.querySelector('.container');



let button = document.getElementById('fetch-image');

button.addEventListener('click', ()=>{
    let imageContainer = document.querySelector('.image-container');
    imageContainer.remove();

let newImageContainer = document.createElement('div');
newImageContainer.classList.add('image-container');

container.append(newImageContainer);

    let dateInput = document.querySelector('.details-input input');
    let date = dateInput.value;

    let request = new XMLHttpRequest();
    request.open('GET', url + "date=" + date  + "&api_key=" + apiKey, true);
    request.send();
    request.onload = function(){
       if(request.status===200){
       // console.log("Working");
       let data = JSON.parse(request.responseText);
       //console.log(data);
       let imageUrl = data.url;
       let image = document.createElement('img');
       image.src = imageUrl;
       newImageContainer.append(image);
       }
       else{
        window.alert('Please enter the correct format.');
       }
    }
});

let hdButton = document.getElementById('fetch-hd');
hdButton.addEventListener('click', () => {
    let imageContainer = document.querySelector('.image-container');
    imageContainer.remove();

let newImageContainer = document.createElement('section');
newImageContainer.classList.add('image-container');

container.append(newImageContainer);

    let dateInput = document.querySelector('.details-input input');
    let date = dateInput.value;

    let request = new XMLHttpRequest();
    request.open('GET', url + "date=" + date  + "&api_key=" + apiKey, true);
    request.send();
    request.onload = function(){
       if(request.status===200){
       // console.log("Working");
       let data = JSON.parse(request.responseText);
       //console.log(data);
       let imageUrl = data.hdurl;
       let image = document.createElement('img');
       image.src = imageUrl;
       newImageContainer.append(image);
       }
       else{
        window.alert('Please enter the correct format.');
       }
    }
});


//2ND VIZ//

let HEIGHT =600,
WIDTH =600,
MARGIN =50;

//SVG
let svg = d3
.select("section")
.append("svg")
.attr("height", HEIGHT + MARGIN + MARGIN)
.attr("width", WIDTH + MARGIN + MARGIN)
.append("g")
.attr("transform", `translate(${MARGIN}, ${MARGIN})`);

//AXES
let xScale = d3.scaleLinear().domain([0, 500000]).range([HEIGHT,0]);
function createXAxis(data){
    svg
    .append("g")
    .attr("transform", `translate(0. ${HEIGHT})`)
    .call(d3.axisBottom(xScale));
}

let yScale = d3.scaleLinear().domain([0, 500000]).range([HEIGHT,0]);
function createYAxis(){
    svg.append("g").call(d3.axisLeft(yScale));
}







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