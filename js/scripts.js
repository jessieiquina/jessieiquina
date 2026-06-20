/*!
* Start Bootstrap - The Big Picture v5.0.6 (https://startbootstrap.com/template/the-big-picture)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-the-big-picture/blob/master/LICENSE)
*/

// This script adds a 'scrolled' class to the navbar when the user scrolls down
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    // Change 50 to a different number if you want the navbar to change 
    // color sooner or later as you scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
