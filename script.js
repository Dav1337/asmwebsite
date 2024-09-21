let titleText = "ASSEMBLY";
let currentTitle = "";
let index = 0;

function updateTitle() {
    currentTitle = titleText.slice(0, index);
    document.title = currentTitle;

    if (index < titleText.length) {
        index++;
    } else {
        index = 1; 
    }
}

setInterval(updateTitle, 300);

document.getElementById('enter-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.full-page-button').style.display = 'none';
    document.getElementById('assembly-screen').style.display = 'block';

    var music = document.getElementById('background-music');
    music.play();
});