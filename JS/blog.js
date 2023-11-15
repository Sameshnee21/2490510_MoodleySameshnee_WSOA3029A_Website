//BP1
//  ///const card=document.querySelector('.card__inner');
    //card.addEventListener('click', function (){
    //card.classList.toggle('is-flipped');
//});

//BP2

//const card2=document.querySelector('.card__inner2');

//card2.addEventListener('click', function (){
   // card2.classList.toggle('is-flipped');
//});

//BP3

//const card3=document.querySelector('.card__inner3');

//card3.addEventListener('click', function (){
   // card3.classList.toggle('is-flipped');
//});

//BP4

//const card4=document.querySelector('.card__inner4');

//card4.addEventListener('click', function (){
    //card4.classList.toggle('is-flipped');
//});

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