const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');


const AddTask=()=>{
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();  //to save task added here  into local storage of browser
}

//click function to add a task and to delete the existing task
listContainer.addEventListener("click",(e)=>{
        if(e.target.tagName==="LI"){  //if we click on a li
            e.target.classList.toggle("checked");  //if checked then uncheck the task otherwise check the task
            saveData();  //to save the changes made here into local storage of browser
        }
        else if(e.target.tagName==="SPAN"){  //if we click on a span i.e., on cross button
           e.target.parentElement.remove();
           saveData(); //to save the changes made here into local storage of browser
        }
},false);


//To Store the tasks 
const saveData=()=>{
    localStorage.setItem("task",listContainer.innerHTML);
}

const showTask=()=>{
    listContainer.innerHTML=localStorage.getItem("task");
}

showTask();  //invoking the showTask function