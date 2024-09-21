let titleText = "ASSEMBLY";
let currentTitle = "";
let index = 0;


setInterval(() => {
    if (document.body.style.backgroundColor !== 'rgb(7, 7, 7)') {
        document.body.style.backgroundColor = '#070707';
    }
    if (document.querySelector('.button-content').style.color !== 'rgb(255, 255, 255)') {
        document.querySelector('.button-content').style.color = '#fff';
    }
}, 1000);

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