function addTask(){

let input = document.getElementById("taskInput");
let task = input.value;

if(task === ""){
alert("Enter a task");
return;
}

let li = document.createElement("li");

li.innerHTML = task + 
" <button class='remove' onclick='removeTask(this)'>remove</button>";

document.getElementById("taskList").appendChild(li);

input.value="";
}

function removeTask(button){
button.parentElement.remove();
}