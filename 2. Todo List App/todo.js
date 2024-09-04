const inputField = document.getElementById('inputField');
const taskList = document.getElementById('taskList');

function addTask(){
    if(inputField.value === ''){
        alert('You must write something!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputField.value;
        taskList.appendChild(li);
    }
    inputField.value = '';
}