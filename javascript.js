const submit = document.querySelector('.submit');

submit.addEventListener('click', ()=> {
    let rating = document.querySelector('input[name="rating"]:checked').value;
    
    localStorage.setItem('userRating', rating);
    window.location.replace("./result.html");
});