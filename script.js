document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('dynamic-text');
    const texts = ["Lea ISHIMWE", "a Developer", "a Designer"];
    let index = 0;

    function changeText() {
        textElement.textContent = texts[index];
        index = (index + 1) % texts.length;
    }

    setInterval(changeText, 2000);
});
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });

}
const awardImages = document.querySelectorAll('.awards img');
awardImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.classList.add('zoom'); 
    });

    image.addEventListener('mouseout', () => {
        image.classList.remove('zoom'); 
    });
});
document.getElementById('menu-icon').addEventListener('click', function() {
    const navMenu = document.querySelector('header nav');
    navMenu.classList.toggle('active');
});
