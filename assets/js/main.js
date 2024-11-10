// ------- HEADER ------- //
// Sélection des éléments du menu
const menu = document.querySelector('.header-menu'); 
const open = document.querySelector('.header-menu-btn-open'); 
const close = document.querySelector('.header-menu-btn-close');

// Ouverture du menu : masquage du bouton "ouvrir", affichage du menu avec animation
open.onclick = function() {
    open.style.display = 'none';
    open.style.animation = 'Notify-smaller ease .3s'; // Réduction du bouton
    menu.style.display = 'block'; // Affichage du menu
    menu.style.transform = 'Notify-grow ease .3s'; // Animation de croissance
};

// Fermeture du menu : masquage du menu, affichage du bouton "ouvrir" avec animation
close.onclick = function() {
    menu.style.display = 'none'; // Masquage du menu
    open.style.display = 'block'; // Réapparition du bouton "ouvrir"
    open.style.animation = 'Notify-grow ease .1s'; // Animation d'agrandissement du bouton
};

// ------- SLIDER ------- //
// Sélection des images d'horloge
const clock1 = document.querySelector('.slider-clock-img'); 
const clock2 = document.querySelector('.slider-clock-2-img');

let time1 = 225; // Angle de rotation initial de l'horloge 1
let time2 = -10; // Angle de rotation initial de l'horloge 2

// Animation de rotation des horloges
setInterval(function() {
    clock1.style.transform = `rotate(${time1}deg)`;
    clock2.style.transform = `rotate(${time2}deg)`;

    time1 += 6; // Incrément de rotation pour clock1
    time2 += 2; // Incrément de rotation pour clock2

    // Remise à zéro de l'angle de rotation une fois atteint 360 degrés
    if (time1 >= 360) time1 = 0;
    if (time2 >= 360) time2 = 0;
}, 25);

// Sélection des éléments du slider (points, arbres, et sous-éléments)
const dot1 = document.querySelector('.slider-dot1-img');
const dot2 = document.querySelector('.slider-dot2-img');
const dot3 = document.querySelector('.slider-dot3-img');
const tree1 = document.querySelector('.slider-tree1-img');
const tree2 = document.querySelector('.slider-tree2-img');
const tree3 = document.querySelector('.slider-tree3-img');
const subs = document.querySelectorAll('.slider-sub-img');

// Animation de l'apparition progressive des éléments du slider
setInterval(function() {
    setTimeout(function() { dot1.classList.add('pop'); }, 100);
    setTimeout(function() { dot2.classList.add('pop'); }, 300);
    setTimeout(function() { dot3.classList.add('pop'); tree1.classList.add('pop'); }, 500);
    setTimeout(function() { tree2.classList.add('pop'); }, 1000);
    setTimeout(function() { tree3.classList.add('pop'); }, 1500);

    // Suppression de l'animation "pop" pour réinitialiser
    subs.forEach(function(sub) {
        if (sub.classList.contains('pop')) {
            sub.classList.remove('pop');
        }
    });
}, 2500);

// ------- SECTION "ABOUT" ------- //
// Animation "tossing" pour l'image aboutHead
const head = document.querySelector('.aboutHead-img');
head.classList.add('tossing');

// ------- LOADER ------- //
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.querySelector('.loading-spinner');
    // Cachez le loader après 2 secondes et faites défiler vers le haut de la page
    setTimeout(() => {
        loader.style.display = 'none'; 
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
});
