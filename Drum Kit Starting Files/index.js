
const handleClick = () => {
    const audio = new Audio('./sounds/tom-3.mp3');
audio.play();
}

// document.querySelectorAll('.drum').addEventListener("click", handleClick);

// const numberOfDrums = document.querySelectorAll(".drum").length;

// for (let i = 0; i < numberOfDrums; i++) {

//     document.querySelectorAll('.drum')[i].addEventListener("click", handleClick);

// }

const drumsObject = {
    'w': './sounds/crash.mp3',
    'a': './sounds/kick-bass.mp3',
    's': './sounds/snare.mp3',
    'd': './sounds/tom-1.mp3',
    'j': './sounds/tom-2.mp3',
    'k': './sounds/tom-3.mp3',
    'l': './sounds/tom-4.mp3',
}

document.querySelectorAll(".drum").forEach(drum => {
    drum.addEventListener("click", function () {
        const letter = drum.innerHTML;
        const audio = new Audio(drumsObject[letter]);
        const activeButton = document.querySelector('.' + letter);
        activeButton.classList.add('pressed');
        audio.play();
        setTimeout(function () {
            activeButton.classList.remove('pressed');
        }, 100)
    });
    
})

document.addEventListener("keypress", function (event) {
    const audio = new Audio(drumsObject[event.key]);
    audio.play();
    console.log(event.key)
})