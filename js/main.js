
const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const toStructureButton = document.querySelector('.button');

const changeClass = el => {

    for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove('active');
    }  
    el.classList.add('active');

}

tabs.addEventListener('click', e => {

    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }

})

toStructureButton.addEventListener('click', e => {
    
    for(item of tabs.children) {
        if(item.dataset.btn == 2) changeClass(item);
    }
     
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content == 2) {
            content[i].classList.add('active');
            window.scrollTo(0, 0);
        }
    }
})

// Модальное окно

window.ya.speechkit.settings = {apikey: '5c6d6536-b453-4589-9bc7-f16c7a795106'};

const textline = new ya.speechkit.Textline('question', {
    onInputFinished: function(text) {
        document.getElementById('question').value=text; }});

let btnOpenModal = document.getElementById('btn-open-modal');
let modal = document.getElementById('wrapper-modal');
let overlay = document.getElementById('overlay');

let inputQuestion = document.querySelector(".question");
let btnOpenAnswer = document.querySelector(".question-button")
let answerBlock = document.querySelector(".wrapper-answer");
let answer = document.querySelector(".answer");

inputQuestion.addEventListener('click', function(){
    inputQuestion.value = "";
});

const voices = window.speechSynthesis.getVoices();
const rusVoice = voices[1];

inputQuestion.addEventListener('keypress', function(e){
    if(e.key == 'Enter')
    {
        answerBlock.classList.add('active');
        const answerText = getAnswer(inputQuestion.value);
        let msg = new SpeechSynthesisUtterance();
        msg.lang = "ru-RU";
        msg.voice = rusVoice;
        msg.text = answerText;
        window.speechSynthesis.speak(msg);
        answer.innerHTML = answerText;
    }
});

btnOpenModal.addEventListener('click', function() {
    modal.classList.add('active');
});

btnOpenAnswer.addEventListener('click', function() {
    answerBlock.classList.add('active');
    const answerText = getAnswer(inputQuestion.value);
    let msg = new SpeechSynthesisUtterance();
    msg.lang = "ru-RU";
    msg.voice = rusVoice;
    msg.text = answerText;
    window.speechSynthesis.speak(msg);
    answer.innerHTML = answerText;
});

function closeModal(){
    modal.classList.remove('active');
    answerBlock.classList.remove('active');
}

overlay.addEventListener('click', closeModal);







