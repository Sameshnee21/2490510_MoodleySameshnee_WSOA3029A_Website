const button = document.querySelector("button");
button.addEventListener("click", ()=>{
    window.location.reload();
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