const submit = document.querySelector('.submit');

submit.addEventListener('click', ()=> {
    submit.style.backgroundColor = 'white';
    submit.style.color = 'hsl(25, 97%, 53%)';
    let rating = document.querySelector('input[name="rating"]:checked').value;
    console.log(rating);
    
    localStorage.setItem('userRating', rating);
    window.location.replace("./result.html");
});




