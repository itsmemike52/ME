let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

let closeBtn = document.getElementById("close-btn");
let closeMark = document.getElementById("close-mark");
let submitWindow = document.getElementById("submitted");
let btnn = document.getElementById("btnn");

closeBtn.onclick = () =>{
    submitWindow.style.display = "none";
}
closeMark.onclick = () =>{
    submitWindow.style.display = "none";
}
btnn.onclick = () =>{
    submitWindow.style.display = "block";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwSu8OnnSfPxE9EK15xEwFPozCPdGaOtEnNiGePf-jrMgC3I-3CJmdy1ScUKJFmEwExmA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})