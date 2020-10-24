const bleu = document.querySelector("#BLEU");
const blanc = document.querySelector("#BLANC");
const rouge = document.querySelector("#ROUGE");

const back = document.querySelector(".background__back-2");


function mouseOver_bleu() {
    back.src = "img/bg-back-bleu.jpg";
}
function mouseOut_bleu() {
    back.src = "img/bg-back-2.jpg";
}
function mouseOver_blanc() {
    back.src = "img/bg-back-blanc.jpg";
}
function mouseOut_blanc() {
    back.src = "img/bg-back-2.jpg";
}
function mouseOver_rouge() {
    back.src = "img/bg-back-rouge.jpg";
}
function mouseOut_rouge() {
    back.src = "img/bg-back-2.jpg";
}

function init() {
    bleu.addEventListener("mouseover", mouseOver_bleu);
    bleu.addEventListener("mouseout", mouseOut_bleu);
    blanc.addEventListener("mouseover", mouseOver_blanc);
    blanc.addEventListener("mouseout", mouseOut_blanc);
    rouge.addEventListener("mouseover", mouseOver_rouge);
    rouge.addEventListener("mouseout", mouseOut_rouge);
}
init();
