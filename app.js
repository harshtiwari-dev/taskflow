let drawer = document.querySelector('.task-drawer');
let backdrop = document.querySelector('.drawer-backdrop');
let taskBtn = document.querySelectorAll('.add-task-btn');

taskBtn.forEach(function (btn) {
    btn.addEventListener('click', () => {
        drawer.classList.add('open');
        backdrop.classList.add('open');
    })
});

backdrop.addEventListener('click', () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
});

let crossBtn = document.querySelector('.close-drawer-btn');
crossBtn.addEventListener('click' , ()=>{
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
});