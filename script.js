

const button = document.getElementById("add");
button.addEventListener('click' , function display(){
    const title = document.getElementById("title").value;
    const note = document.getElementById("note").value;
    const data = {title: title, note : note};
    localStorage.setItem("notes", JSON.stringify(data));

     makeNote();
})


 function makeNote(){
    const notes = localStorage.getItem("notes");
    const noteobj = JSON.parse(notes); // conversion of string into object 
     console.log(noteobj);
     const container = document.getElementById("container");
     let div = document.createElement("div");
     div.classList.add("div-styling")
     let para = document.createElement("p");
    para.classList.add("title-styling")
    para.textContent = noteobj.title;
    div.appendChild(para);
     let textarea = document.createElement("textarea");     
     textarea.classList.add("textarea-styling")
     textarea.value = noteobj.note;
    
    const icon = document.createElement("i");
    icon.classList.add("fa-solid","fa-xmark")     
     textarea.appendChild(icon);
    div.appendChild(textarea);
     container.appendChild(div);


    
        
     


 }

// function makeNote(){
//     const notes = localStorage.getItem("notes") ;
//     const obj =  JSON.parse("notes");
//     const container = document.getElementById("container");

// }
