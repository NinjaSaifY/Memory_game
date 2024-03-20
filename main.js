const card = document.getElementById('card');
const randomBtn = document.getElementById('randomButton');

alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function cardsFlip(){
    card.addEventListener('click',() => {
        card.classList.add('.flipped');
    });
}

randomBtn.addEventListener('click', () => {
    
});