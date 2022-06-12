const submit = document.querySelector('.submit');
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');
const btn5 = document.querySelector('.btn-5');
let rating = null;

submit.addEventListener('click', ()=> {
    submit.style.backgroundColor = 'white';
    submit.style.color = 'hsl(25, 97%, 53%)';
    
    localStorage.setItem('userRating', rating);
    window.location.replace("./result.html");
});

btn1.addEventListener('click', ()=> {
    rating = 1;
    btn1.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn1.style.color = 'white';
    btn2.style.pointerEvents = 'none';
    btn3.style.pointerEvents = 'none';
    btn4.style.pointerEvents = 'none';
    btn5.style.pointerEvents = 'none';
})

btn2.addEventListener('click', ()=> {
    rating = 2;
    btn2.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn2.style.color = 'white';
    btn1.style.pointerEvents = 'none';
    btn3.style.pointerEvents = 'none';
    btn4.style.pointerEvents = 'none';
    btn5.style.pointerEvents = 'none';
})

btn3.addEventListener('click', ()=> {
    rating = 3;
    btn3.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn3.style.color = 'white';
    btn1.style.pointerEvents = 'none';
    btn2.style.pointerEvents = 'none';
    btn4.style.pointerEvents = 'none';
    btn5.style.pointerEvents = 'none';
})

btn4.addEventListener('click', ()=> {
    rating = 4;
    btn4.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn4.style.color = 'white';
    btn1.style.pointerEvents = 'none';
    btn2.style.pointerEvents = 'none';
    btn3.style.pointerEvents = 'none';
    btn5.style.pointerEvents = 'none';
})

btn5.addEventListener('click', ()=> {
    rating = 5;
    btn5.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn5.style.color = 'white';
    btn1.style.pointerEvents = 'none';
    btn2.style.pointerEvents = 'none';
    btn3.style.pointerEvents = 'none';
    btn4.style.pointerEvents = 'none';
})




