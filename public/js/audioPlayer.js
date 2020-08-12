const song = document.querySelectorAll('#asong');
// const audioPlayer = document.querySelector('.AudioPlayer'

Array.from(song).forEach(element => {
    element.addEventListener('click', (e) => {
        var currentParent = e.target.parentNode.parentNode.parentNode.getAttribute('class');
        var targetStream = document.querySelector(`.${currentParent}`).children[0].children[0].children[0].getAttribute('class');

        console.log(targetStream)

        if(document.querySelector(`.${targetStream}`).style.display != 'flex'){
            document.querySelector(`.${targetStream}`).style.display = 'flex';
        } else {
            document.querySelector(`.${targetStream}`).style.display = 'none';
        }
    })
});