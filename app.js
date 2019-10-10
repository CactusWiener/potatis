const form = document.querySelector('#form');
const content = document.querySelector('#content');

const age = prompt('Age restricted, must be 20 or over!');

if (age >= 20) {
    content.style.display = 'block';
    document.querySelector('#enter').className = 'granted';

} else {
    document.querySelector('#enter').className = 'denied';
    window.location.replace("http://www.google.se");
}