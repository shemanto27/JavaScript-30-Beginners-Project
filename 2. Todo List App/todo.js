const inputField = document.getElementById('inputField');
const taskList = document.getElementById('taskList');

function addTask(){
    if(inputField.value === ''){
        alert('You must write something!');
    }
    else{
        // task
        let li = document.createElement('li');
        li.innerHTML = inputField.value;
        taskList.appendChild(li);

        // cross icon
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputField.value = '';
    saveData();
}

taskList.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem('data', taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem('data');
}

showTask();