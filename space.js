let navbar = document.querySelector('.navbar');
let menubtn = document.getElementById('menuBtn');

window.onscroll = () => {
    let navbar = document.querySelector('.header')
    if(window.scrollY > 120) {
        navbar.classList.add('active');
    }
    else {
        navbar.classList.remove('active');
    }
}

menubtn.onclick = () => {
    navbar.classList.toggle('active');
    menubtn.classList.toggle('bx-x');
}