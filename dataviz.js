const apiKey = 'ahQFiYRloOL65cCcG5Oq19Q1evryc7D4vK0pewih';
const url = 'https://api.nasa.gov/planetary/apod?';

let container = document.querySelector('.container2');



let button = document.getElementById('fetch-image2');

button.addEventListener('click', ()=>{
    let imageContainer = document.querySelector('.image-container2');
    imageContainer.remove();

let newImageContainer = document.createElement('div');
newImageContainer.classList.add('image-container2');

container.append(newImageContainer);

    let dateInput = document.querySelector('.details-input2 input');
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

let hdButton = document.getElementById('fetch-hd2');
hdButton.addEventListener('click', () => {
    let imageContainer = document.querySelector('.image-container2');
    imageContainer.remove();

let newImageContainer = document.createElement('section');
newImageContainer.classList.add('image-container2');

container.append(newImageContainer);

    let dateInput = document.querySelector('.details-input2 input');
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