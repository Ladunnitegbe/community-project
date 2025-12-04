const myTaskTab = document.querySelector('.tasks-tab_tasks');
const taskTabProgress = document.querySelector('.tasks-tab_progress');
const tasksCollpase = document.querySelectorAll('.tasks_collpase');
const aiSummaryTemplate = document.getElementById('AI-Summary-tab_contents');
const tasksButtom = document.querySelector('.tasks-button');
const taskStateSection = document.querySelector('.tasks-state');
const addButtom = document.querySelector('.tasks-buttom_add');
const addTaskDiv = document.getElementById('add-box_template');
const allMainSelector = document.querySelector('.main');
const LoadingAddTemplate = document.getElementById('user-task_template');
const noContentBox = document.querySelector('.tasks-contents-list');

taskTabProgress.addEventListener('click', () => {
    myTaskTab.style.backgroundColor = "#F3F4F6";
    taskTabProgress.style.backgroundColor = "white";
    tasksCollpase.forEach((elem) => {
        elem.style.display = "none";
    })

    const aiTemplate1 = document.getElementById('AI-template');
    const content1 = aiTemplate1.content.cloneNode(true);
    aiSummaryTemplate.appendChild(content1);

    controlTab();
})

myTaskTab.addEventListener('click', () => {
    aiSummaryTemplate.innerHTML = "";
    taskTabProgress.style.backgroundColor = "#F3F4F6";
    myTaskTab.style.backgroundColor = "white";

    tasksCollpase.forEach((elem) => {
        elem.style.display = "block";
    })
    taskStateSection.style.display = "flex";
})

function btnClick() {
    addButtom.addEventListener('click', () => {
        addTaskDiv.innerHTML = "";
        const addBtnTemplate = document.querySelector('.box-control');
        const content3 = addBtnTemplate.content.cloneNode(true);
        addTaskDiv.appendChild(content3);

        const cancelBtn = document.getElementById('cancel-btn');
        const closeTask = document.querySelector('.close-box-img');

        function closeBox() {
            addTaskDiv.innerHTML = "";
        }

        closeTask.addEventListener('click', closeBox)
        cancelBtn.addEventListener('click', closeBox)

        const addTaskTitle = document.getElementById('add-task_user-title');
        const addTaskDescription = document.getElementById('add-task_user-description');
        const inputTaskDate = document.getElementById('add-task_date-input');
        const inputOption = document.getElementById('input-option');
        const activeNum = document.getElementById('active-tasks_num');
        const completeNum = document.getElementById('completed-tasks_num');

        function createTask() {
            const createBtn = document.getElementById('create-btn');

            createBtn.addEventListener('click', () => {


                if (addTaskTitle.value.length > 0 && addTaskDescription.value.length > 0) {

                    const addedTaskTemplate = document.getElementById('user-added_tasks');
                    const addedContent = addedTaskTemplate.content.cloneNode(true);
                    LoadingAddTemplate.appendChild(addedContent);

                    const addedTaskConstainer = document.getElementById('user-added');
                    const templateHeader = document.querySelector('.user-added_header');
                    const templateDesciption = document.querySelector('.user-added_description');
                    const templatedate = document.querySelector('.user-chosen_date');
                    const templatedifficalty = document.querySelector('.user-chosen_difficulty');
                    const deleteIcon = document.querySelector('.delete-task');
                    const notDoneCircle = document.querySelector('.task-notdone');
                    const lineOne = document.getElementById('done-line_one');
                    const lineTwo = document.getElementById('done-line_two');

                    templateHeader.textContent = addTaskTitle.value;
                    templateDesciption.textContent = addTaskDescription.value;
                    templatedate.textContent += inputTaskDate.value;
                    templatedifficalty.textContent = inputOption.value;
                    activeNum.textContent = Number(activeNum.textContent) + 1;


                    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
                    let taskObject = {
                        title: addTaskTitle.value,
                        description: addTaskDescription.value,
                        date: inputTaskDate.value,
                        priority: inputOption.value
                    };

                    tasks.push(taskObject);
                    localStorage.setItem('tasks', JSON.stringify(tasks));

                    closeBox();

                    noContentBox.style.display = "none";

                    deleteIcon.addEventListener('click', () => {
                        addedTaskConstainer.remove();
                        activeNum.textContent = Number(activeNum.textContent) - 1;
                    })

                    let changeImg = true;
                    notDoneCircle.addEventListener('click', (e) => {
                        e.preventDefault();
                        if (changeImg) {
                            notDoneCircle.src = '/module/tasks/image/task-done.svg';
                            templateHeader.style.color = "#4A5565";
                            templateHeader.style.textDecoration = 'line-through';
                            templateDesciption.style.textDecoration = 'line-through';
                            completeNum.textContent = Number(completeNum.textContent) + 1;
                            activeNum.textContent = Number(activeNum.textContent) - 1;
                            changeImg = false;
                        } else {
                            notDoneCircle.src = "/module/tasks/image/not-done.svg";
                            templateHeader.style.color = "black";
                            templateHeader.style.textDecoration = 'none';
                            templateDesciption.style.textDecoration = 'none';
                            completeNum.textContent = Number(completeNum.textContent) - 1;
                            activeNum.textContent = Number(activeNum.textContent) + 1;
                            changeImg = true;
                        }

                        let stats = { active: 0, completed: 0 };
                        stats.active = Number(activeNum.textContent);
                        stats.completed = Number(completeNum.textContent);
                        localStorage.setItem('stats', JSON.stringify(stats));

                    })

                }
            })
        }

        createTask();

    })
}

btnClick();


const controlTab = function () {
    const aiHistoryContent = document.getElementById('AI-summary-history_template');
    const aiHistoryTab = document.querySelector('.AI-summary_history');
    const aiSummaryTab = document.querySelector('.AI-summary_lastest');
    const aiList = document.querySelector('.AI-summary-list');

    aiHistoryTab.addEventListener('click', () => {
        aiSummaryTab.style.backgroundColor = "#F3F4F6";
        aiHistoryTab.style.backgroundColor = "white";
        aiList.style.display = "none";

        const aiTemplate2 = document.getElementById('AI-template_history');
        const content1 = aiTemplate2.content.cloneNode(true);
        aiHistoryContent.appendChild(content1);

    })

    aiSummaryTab.addEventListener('click', () => {
        aiHistoryTab.style.backgroundColor = "#F3F4F6";
        aiSummaryTab.style.backgroundColor = "white";

        aiHistoryContent.innerHTML = "";
        aiList.style.display = "block";
        aiList.style.display = "flex";
        aiList.style.alignItems = "center";

    })
};
