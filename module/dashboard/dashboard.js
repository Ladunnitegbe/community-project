const title = document.querySelector('.dashboard-title');
const changeContent = document.querySelectorAll('.change-content');
const cardOneAmount = document.querySelector('.amount-num');
const cardOneCompleted = document.querySelector('.amount-comment');
const cardFiveImge = document.querySelector('.card-five-image');
const cardFiveContent = document.querySelector('.card-five-p');
const recentLoaded = document.querySelector('.user-recent-template');

let gettitle = JSON.parse(localStorage.getItem('userInfo'));
title.innerHTML = `Good evening, ${gettitle.Name}!`;

let statContent = JSON.parse(localStorage.getItem('stats')) || { active: 0, completed: 0 };
cardOneAmount.textContent = statContent.active;
cardOneCompleted.textContent = statContent.completed + " Completed";

let createdTasks = JSON.parse(localStorage.getItem('tasks')) || [];


const card = [
    { title: "Total Expenses", image: "/components/card/images/dollar-icon.svg", Alt: 'dollar icon', amount: "$0.0", comment: "This period" },
    { title: "Total Notes", image: "/components/card/images/file-icon.svg", Alt: 'file icon', amount: "0", comment: "Saved Notes" },
    { title: "Complection Rate", image: "/components/card/images/progress-arrow.svg", Alt: 'progress arrow icon', amount: "0%", comment: "Task Complection" },
];


changeContent.forEach((ele, i) => {
    const cardTitle = ele.querySelector('.card-title');
    const cardImage = ele.querySelector('.img-conatainer');
    const cardAmount = ele.querySelector('.amount-num');
    const cardComment = ele.querySelector('.amount-comment');

    cardTitle.textContent = card[i].title;
    cardImage.src = card[i].image;
    cardImage.alt = card[i].Alt;
    cardAmount.textContent = card[i].amount;
    cardComment.textContent = card[i].comment;

    if (ele === changeContent[changeContent.length - 1]) {
        cardAmount.textContent = Math.floor((statContent.completed / (statContent.active + statContent.completed)) * 100) + "%"|| 0;
    }
});

if (createdTasks.length > 0) {

    recentLoaded.innerHTML = "";
    const lastTask = createdTasks[createdTasks.length - 1];
    const taskTemplate = document.getElementById('tasks-template');
    const contentsOfTemp = taskTemplate.content.cloneNode(true);
    recentLoaded.appendChild(contentsOfTemp);

    const recentTitle = document.querySelector('.recent-task_title');
    const recentDate = document.querySelector('.recent-task_date');
    const recentLevel = document.querySelector('.recent-task_level');

    recentTitle.textContent = lastTask.title;
    recentDate.textContent = lastTask.date;
    recentLevel.textContent = lastTask.priority;

    cardFiveImge.style.display = "none";
    cardFiveContent.style.display = "none";

} else {
    cardFiveImge.style.display = "none";
    cardFiveContent.style.display = "none";
    recentLoaded.innerHTML = "";
}
