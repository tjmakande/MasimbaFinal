const Menu = document.querySelector('.Menu');
const BB = document.querySelector('.BB');

document.querySelector('.icon').addEventListener('click', function(){
    if(!Menu.classList.contains('open')){
        Menu.classList.add('open');
        Menu.style.width = '250px';
        BB.style.width = '100vw'
    }else{
        Menu.classList.remove('open');
        Menu.style.width = '0px';
        BB.style.width = '0px'
    }
})
