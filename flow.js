let input=document.getElementById("name");
let details=document.getElementById("details");
let button=document.getElementById("button");
let info=document.getElementById("status");
let list=document.getElementById("list");
let warning=document.getElementById("warning");
let nbr=0;
button.addEventListener("click",function()
{if (input.value !== '' ){
  warning.textContent="";
  nbr++;
  const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
        deleteButton.style.backgroundColor = "red";
deleteButton.style.color = "white";
deleteButton.style.border = "none";
deleteButton.style.padding = "5px 10px";
deleteButton.style.borderRadius = "5px";
        
        info.textContent="you have " + nbr + " tasks left";
       
  const text=input.value.trim();
  const det=details.value.trim();
  const task=text +  " : " + det;
  const li =document.createElement("li");
  li.textContent=task;
  deleteButton.addEventListener("click", function() {
    li.remove();
    nbr--; 
    if (nbr !==0){
      info.textContent="you have " + nbr + " tasks left";}
    
      else {info.textContent="Congrats Champ ! You finished all your tasks";}
    
});
  li.appendChild(deleteButton);
  list.appendChild(li);
  input.value="";
  details.value="";
  

}
else  warning.textContent="Sorry!You have to at least fill up the task name!"
})