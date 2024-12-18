const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#F0E68C', '#FF4500', 
    '#8A2BE2', '#20B2AA', '#FFD700', '#FF6347', '#32CD32', 
    '#C71585', '#00BFFF' , '#714940' , '#05082a' , '#29052a '
];
let currentColorIndex = 0; 
const button = document.getElementById('colorButton');
const body = document.body;
function changeColor() {
    button.style.backgroundColor = colors[currentColorIndex];
    button.style.color = 'white';
    body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}
button.addEventListener('click', changeColor);