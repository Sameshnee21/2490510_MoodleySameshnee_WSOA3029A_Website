const card=document.querySelector('.card__inner');

card.addEventListener('click', function (){
    card.classList.toggle('is-flipped');
});

const card2=document.querySelector('.card__inner2');

card2.addEventListener('click', function (){
    card2.classList.toggle('is-flipped');
});