let dob = document.querySelector(".dobavit");
let taskForm = document.getElementById("task-form");
let sort = document.querySelector(".sort");
let x = document.querySelector(".x");
let main = document.querySelector(".main");
let two = document.querySelector(".two");
let taskInput = document.getElementById("task-input");
let plus = document.querySelector(".plus");
let taskList = document.querySelector(".task-list");
let sortimg = document.querySelector(".sortimg");
let ximg = document.querySelector(".ximg");
let add = document.querySelector(".add");
let deleteDiv = document.querySelector('.ul-div');

dob.addEventListener("click", (e)=>{
    e.preventDefault();

    if(taskInput.value.trim()===""){
        alert("The container is empty! Click '+' and write something.");
        return;
    }
    
    main.style.display="block";
    two.style.display="none";
    
    taskList = document.querySelector(".task-list");
    
    let newInput = document.createElement("li");
    let taskSpan = document.createElement("span");

    taskSpan.classList.add("task-span");
    taskSpan.textContent = taskInput.value.trim();
    newInput.classList.add("newInput");


    taskList.style.overflowWrap="break-word";


    let xIcon = document.createElement("img");
    xIcon.src = "x.svg";
    xIcon.alt = "x";
    xIcon.classList.add("delete");
    newInput.appendChild(taskSpan); 
    newInput.appendChild(xIcon);
    taskList.appendChild(newInput);
    newInput.style.position="relative";
    xIcon.style.position="absolute";
    xIcon.style.left="100px";
    xIcon.style.right="0px";
    xIcon.style.top="15px";

    newInput.style.paddingRight="66px";

    
    xIcon.addEventListener("mouseover", (e)=>{
        xIcon.src="xq.svg";
    });
    xIcon.addEventListener("mouseout", (e)=>{
        xIcon.src="x.svg";
    });
    
    
    taskInput.value = '';


    xIcon.addEventListener("click", (e)=>{
       
      e.preventDefault();
      newInput.remove();
      


      
      if(taskList.childElementCount === 0){
        deleteDiv.style.display = 'none'
        
      } 
        
    });

    if(!(taskList.childElementCount === 0)){
      deleteDiv.style.display = 'block'
    }
    

});


plus.addEventListener("click", (e)=>{
    e.preventDefault();

    two.style.display="block";
    main.style.display="block";
});



x.addEventListener("click",(e)=>{
    e.preventDefault();

    taskInput.value="";

  
    
});

let flag = true; 

sort.addEventListener("click", function (i) {
  i.preventDefault();
  let lis = Array.from(document.querySelectorAll("ul li"));
  let sorted_lis = lis.sort((a, b) =>
    a.textContent.localeCompare(b.textContent)
  );

  

  if (!flag) {
    sortimg.src="sort2.svg";
    sortimg.alt="sort2";
    sorted_lis.reverse();
  } else {
    sortimg.src="sort.svg";
    sortimg.alt="sort";
  }

  sort.addEventListener("mouseover", ()=>{
    if(!flag)
    sortimg.src="sort2q.svg";
    else{
    sortimg.src="sortq.svg";
    }
});

   sort.addEventListener("mouseout", ()=>{
        if(!flag)
        sortimg.src="sort2.svg";
        else{
        sortimg.src="sort.svg";
     }
});



  sorted_lis.forEach((e) => {
    taskList.appendChild(e);
  });

  flag = !flag;
});

ximg.addEventListener("mouseover", ()=>{
    ximg.src="xq.svg";
});
ximg.addEventListener("mouseout", ()=>{
    ximg.src="x.svg";
});





