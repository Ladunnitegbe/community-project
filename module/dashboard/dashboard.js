const title = document.querySelector('.dashboard-title');

let gettitle = JSON.parse(localStorage.getItem('userInfo'));
title.innerHTML = `Good evening, ${gettitle.Name}!`;

const cardTitle = document.querySelector('.card-title');
const cardImage = document.querySelector('.img-conatainer');
const cardAmount = document.querySelector('.amount-num');
const cardComment = document.querySelector('.amount-comment');
const changeContent = document.querySelectorAll('.change-content');
const image = document.querySelector('.image');

const card = [
    { title: "Total Expenses", image: "/components/card/images/dollar-icon.svg", Alt: 'dollar icon', amount: "$0.0", comment: "This period" },
    { title: "Total Notes", image: "/components/card/images/file-icon.svg", Alt: 'file icon', amount: "0", comment: "Saved Notes" },
    { title: "Complection Rate", image: "/components/card/images/progress-arrow.svg", Alt: 'progress arrow icon', amount: "0%", comment: "Task Complection" },
];

for (let item of changeContent) {
    for (let i = 0; i < card.length; i++) {
        cardTitle.innerHTML = card[0].title;
        image.remove();
        const createImg = document.createElement('img');
        createImg.src = card[0].image;
        createImg.alt = card[0].Alt;
        createImg.appendChild(cardImage)
        cardAmount.innerHTML = card[0].amount;
        cardComment.innerHTML = card[0].comment;
    }

}

