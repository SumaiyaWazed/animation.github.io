
let btn = document.querySelector('.btn');
let adding1 = document.querySelector('.light');
let adding2 = document.querySelector('.main');
let audio = document.querySelector('#audio');

btn.onclick = () => {
    adding1.classList.toggle('off');
    adding2.classList.toggle('night');
    audio.play();
}
