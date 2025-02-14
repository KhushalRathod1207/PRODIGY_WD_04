/* *************************
 Navbar Toggle:-
*****************************/


const hamburger = document.querySelector('.hamburger')
const ul = document.querySelector('ul')

hamburger.addEventListener('click', () => {
    ul.classList.toggle('ham_active');

    let ham_child = hamburger.firstElementChild;
    if (ul.classList.contains('ham_active')) {
        ham_child.classList.replace('fa-bars', 'fa-xmark')

    }
    else {

        ham_child.classList.replace('fa-xmark', 'fa-bars')
    }
});



window.onload = function () {
    setTimeout(function () {
        document.querySelector(".preloader").classList.add("preloader-deactivate");
    }, 2000); // 2.5 seconds
};


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust offset if needed
                behavior: "smooth",
            });
        }
    });
});

const typingText = document.querySelector(".typing-text");
const words = [" Web Development", " Full-Stack Development", " DevOps engineer", " Backend Devlopment", " Blockchain Development ", " UI/UX Devlopment"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    const currentChars = currentWord.substring(0, charIndex);
    typingText.textContent = currentChars;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(typeEffect, 700);
    }
}

typeEffect();
