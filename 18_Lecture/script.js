let tasks = [];

function addTask() {

    let task = document.getElementById("task").value;

    if (task === "") {
        alert("Enter a task");
        return;
    }

    tasks.push(task); 

    document.getElementById("task").value = "";

    displayTask();  
}

function displayTask() {

    let list = document.getElementById("list");

    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        let li = document.createElement("li");

        li.innerHTML = ` 
            ${tasks[i]}
            <button onclick="editTask(${i})">Edit</button>
            <button onclick="deleteTask(${i})">Delete</button>
        `;

        list.appendChild(li);
    }
}

function editTask(index) {

    let newTask = prompt("Edit Task", tasks[index]);

    if (newTask !== null && newTask !== "") {
        tasks[index] = newTask;
        displayTask();
    }
}
function deleteTask(index) {

    
    tasks.splice(index, 1);

    displayTask();
}