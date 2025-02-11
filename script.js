const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const yesGif = document.getElementById('yesGif');
const noGif = document.getElementById('noGif');
const noGifContainer = document.getElementById('noGifContainer'); // Ambil elemen div untuk GIF
const yesGifContainer = document.getElementById('yesGifContainer'); // Ambil elemen div untuk GIF

let yesBtnSize = 1;
let noBtnOpacity = 1;

const noTexts = [
    "BENERAN??",
    "IHH BENERANN????",
    "pikir baikk baikk",
    "HOYY MASI ENGGAA??",
    "parah men...",
    "adek nangis ni...",
    "beneran nangiss",
    "IHH AA MAHHH",
    "MUSUHANN KITAA"
];

const yesTexts = [
    "PENCETTT INIII",
    "HOYYY YG INIIII!!!",
    "AA PENCET INI GKK!",
    "kalaw pencet ini dapet kiss"
]

let currentNoIndex = 0;
let currentYesIndex = 0;

noBtn.addEventListener('click', () => {
    yesBtnSize *= 1.2;
    noBtnOpacity *= 0.8;

    yesBtn.style.transform = `scale(${yesBtnSize})`;
    noBtn.style.opacity = noBtnOpacity;

    noBtn.textContent = noTexts[currentNoIndex];
    currentNoIndex = (currentNoIndex + 1) % noTexts.length;

    yesBtn.textContent = yesTexts[currentYesIndex];
    currentYesIndex = (currentYesIndex + 1) % yesTexts.length;

    noGifContainer.style.display = 'block'; // Tampilkan GIF
    yesGif.style.display = 'none';

    if (noBtnOpacity <= 0.1) {
        noBtn.style.display = 'none';
    }
});

yesBtn.addEventListener('click', () => {
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none'; // Sembunyikan tombol "no"
    document.querySelector('h1').textContent = 'Yayyy! I Knew You Would Say Yes!! Happy Valentine\'s Day My Love!';

    noGifContainer.style.display = 'none';
    yesGifContainer.style.display = 'block'; // Tampilkan GIF setelah tombol "yes" diklik
});