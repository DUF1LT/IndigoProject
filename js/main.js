
const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const toStructureButton = document.querySelector('.button');
const exe = document.getElementById('exe'); 

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






