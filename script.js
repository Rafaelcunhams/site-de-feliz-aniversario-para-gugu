let datetxt = "16 de Setembro";
let datatxtletter = "Feliz Aniversário!";
let titleLetter = "To you";

let charArrDate = datetxt.split('');
let charArrDateLetter = datatxtletter.split('');
let charArrTitle = titleLetter.split('');

let currentIndex = 0;

let date__of__birth = document.querySelector(".date__of__birth span");

setTimeout(function () {
    let timeDatetxt = setInterval(function () {
        if (currentIndex < charArrDate.length) {
            date__of__birth.textContent += charArrDate[currentIndex];
            currentIndex++;
        } else {
            let i = document.createElement("i");
            i.className = "fa-solid fa-star";
            document.querySelector(".date__of__birth").prepend(i);
            document.querySelector(".date__of__birth").appendChild(i.cloneNode(true));
            clearInterval(timeDatetxt);
        }
    }, 100);
}, 12000);

// =================== MODAL ===================
$(document).ready(function () {
    const btnLetter = $('#btn__letter');
    const boxMail = $('.boxMail');
    const closeBtn = $('.boxMail .fa-xmark');

    // Abrir modal carta
    btnLetter.on('click', function () {
        boxMail.addClass('active');
    });

    // Fechar modal carta
    closeBtn.on('click', function () {
        boxMail.removeClass('active');
    });
});

// Controle da música
document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bgMusic");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const playPauseIcon = playPauseBtn.querySelector("i");

    // Tentar tocar a música automaticamente ao carregar
    const startMusic = () => {
        music.play().then(() => {
            playPauseIcon.classList.remove("fa-play");
            playPauseIcon.classList.add("fa-pause");
        }).catch(() => {
            // Caso o navegador bloqueie autoplay, o botão começa como "play"
            playPauseIcon.classList.remove("fa-pause");
            playPauseIcon.classList.add("fa-play");
        });
    };

    startMusic();

    // Alternar play/pause ao clicar no botão
    playPauseBtn.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            playPauseIcon.classList.remove("fa-play");
            playPauseIcon.classList.add("fa-pause");
        } else {
            music.pause();
            playPauseIcon.classList.remove("fa-pause");
            playPauseIcon.classList.add("fa-play");
        }
    });
});

