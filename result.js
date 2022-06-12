rating = localStorage.getItem('userRating');

const resultElement = document.querySelector('.rating-result');
const thankyouInfo = document.querySelector('.thankyou-info');
var para = document.createElement('p');
var node = document.createTextNode(`You chose ${rating} out of 5`);
para.appendChild(node);
resultElement.appendChild(para);


if (rating == 1 || rating == 2) {
    node = document.createTextNode("We're sorry your experience wasn't great. We'll be in touch to see how we can improve for next time");
    para.appendChild(node);
    thankyouInfo.appendChild(node);
} else {
    node = document.createTextNode("We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!");
    para.appendChild(node);
    thankyouInfo.appendChild(node);
}

