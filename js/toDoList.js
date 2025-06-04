const tasks = [];

function saveTask(){
    const inputData = document.getElementById('input').value;
    if(inputData === '')return;
    tasks.push({
        task:inputData,
        completed:false
    })
    document.getElementById('input').value = "";
    renderData();
}

function deleteTask(index){
    tasks.splice(index,1);
    renderData();
}
function completeTask(index){
    tasks[index].completed = !tasks[index].completed;
    renderData();
}

function renderData(){
    const taskList = document.getElementById('data-section');
    taskList.innerHTML = "";

    tasks.forEach((tsk,index)=>{
        const li = document.createElement('li');
        if(tsk.completed){
            li.classList.toggle('completed');
        }


        const span = document.createElement('span');
        const actions = document.createElement('div');
        const completeBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        span.innerText = tsk.task;
        
        deleteBtn.innerText = "delete";
        deleteBtn.onclick = () => deleteTask(index);

        completeBtn.innerText = "completed";
        completeBtn.onclick = () => completeTask(index);

        actions.appendChild(deleteBtn);
        actions.appendChild(completeBtn);

        li.appendChild(span);
        li.appendChild(actions);

        document.getElementById('data-section').appendChild(li);


    })


    

    
}