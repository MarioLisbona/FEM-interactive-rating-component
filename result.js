rating = localStorage.getItem('userRating');

const resultElement = document.querySelector('.rating-result');
const para = document.createElement('p');
const node = document.createTextNode(`You chose ${rating} out of 5`);
para.appendChild(node);
resultElement.appendChild(para);