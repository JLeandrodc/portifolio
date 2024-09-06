// menu do modo responsivo
menu = document.querySelector('.menu i');
navbar = document.querySelector('.header .navbar');

menu.onclick=()=>{
    navbar.classList.toggle('active');
}




// slides dos projetos
const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}




// animação de Ferramentas de acordo com o scroll
document.addEventListener('scroll', function() {
    const progressLines = document.querySelectorAll('.skill .progress-line');
    const windowHeight = window.innerHeight;

    progressLines.forEach(line => {
        const rect = line.getBoundingClientRect();
        if (rect.top < windowHeight * 1) { // sensibilidade da animação (scroll)
            line.classList.add('animate');
        }
    });
});
