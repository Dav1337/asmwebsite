document.getElementById('enter-button').addEventListener('click', function(event) {
    event.preventDefault();

    document.querySelector('.full-page-button').style.display = 'none';
    document.getElementById('assembly-screen').style.display = 'block';

    var music = document.getElementById('background-music');
    music.play();
});
