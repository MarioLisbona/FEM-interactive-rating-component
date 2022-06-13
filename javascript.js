const submit = document.querySelector('.submit');
const ratingContainer = document.querySelector('.rating-container');
const resultElementLow = document.querySelector('.rating-result-low');
const resultElementHigh = document.querySelector('.rating-result-high');
const tyContainerLow = document.querySelector('.thankyou-container.low-rating');
const tyContainerHigh = document.querySelector('.thankyou-container.high-rating');

submit.addEventListener('click', ()=> {
    let rating = document.querySelector('input[name="rating"]:checked').value;

    if (rating == 1 || rating == 2) {
        ratingContainer.classList.add('hide');
        tyContainerLow.classList.remove('hide');

        var para = document.createElement('p');
        var node = document.createTextNode(`You chose ${rating} out of 5`);
        para.appendChild(node);
        resultElementLow.appendChild(para);
    }

    if (rating == 3 || rating == 4 || rating == 5) {
        ratingContainer.classList.add('hide');
        tyContainerHigh.classList.remove('hide');

        var para = document.createElement('p');
        var node = document.createTextNode(`You chose ${rating} out of 5`);
        para.appendChild(node);
        resultElementHigh.appendChild(para);
    }
    

});