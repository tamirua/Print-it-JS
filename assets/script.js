const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Etape 2//

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

leftArrow.addEventListener('click', () => {
    console.log('Flèche gauche cliquée');
    /*alert('Flèche gauche cliquée');*/
});

rightArrow.addEventListener('click', () => {
    console.log('Flèche droite cliquée');
    /*alert('Flèche droite cliquée');*/
});


//Etape 3//

const dotsContainer = document.querySelector('.dots');

// Créez des puces en fonction du nombre de diapositives
slides.forEach((slide, index) => {
    const bulletPoint = document.createElement('div');
    bulletPoint.classList.add('dot');
    if (index === 0) bulletPoint.classList.add('dot_selected'); 
    dotsContainer.appendChild(bulletPoint);
});

console.log(dotsContainer.innerHTML); // Vérifiez si des points sont ajoutés



// Etape 4 and 5

// Initialisez l’index actuel pour commencer par la première diapositive
let currentIndex = 0;

// Sélectionnez les éléments DOM pour l’image, le texte et les points
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dot');

// Fonction de mise à jour du carrousel en fonction de l’index actuel
function updateCarousel() {
    
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    bannerText.innerHTML = slides[currentIndex].tagLine;
    dots.forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === currentIndex);
    });
}


document.querySelector('.arrow_left').addEventListener('click', () => {
    // Passez à la diapositive précédente ou passez en boucle à la dernière diapositive si vous vous trouvez à la première
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});


document.querySelector('.arrow_right').addEventListener('click', () => {
    // Passez à la diapositive suivante ou passez à la première diapositive si vous êtes à la dernière
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

// Initialiser le carrousel avec la première diapositive
updateCarousel();






































