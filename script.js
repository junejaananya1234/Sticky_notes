

// const button = document.getElementById("add");
// button.addEventListener('click' , function display(){
//     const title = document.getElementById("title").value;
//     const note = document.getElementById("note").value;
//     const data = {title: title, note : note};
//     localStorage.setItem("notes", JSON.stringify(data));

//      makeNote();
// })


//  function makeNote(){
//     const notes = localStorage.getItem("notes");
//     const noteobj = JSON.parse(notes); // conversion of string into object 
//      console.log(noteobj);
//      const container = document.getElementById("container");
//      let div = document.createElement("div");
//      div.classList.add("div-styling")
//      let para = document.createElement("p");
//     para.classList.add("title-styling")
//     para.textContent = noteobj.title;
//     div.appendChild(para);
//      let textarea = document.createElement("textarea");     
//      textarea.classList.add("textarea-styling")
//      textarea.value = noteobj.note;
//      div.appendChild(textarea);
//      container.appendChild(div);


    
        
     


//  }

// // function makeNote(){
// //     const notes = localStorage.getItem("notes") ;
// //     const obj =  JSON.parse("notes");
// //     const container = document.getElementById("container");

// // }
const title = document.getElementById("title");
const color = document.getElementById("chooseColor");
const note = document.getElementById("note");
const btn = document.getElementById("add");
const container = document.getElementById("container");

function addNote(){
    if(title.value === ""|| note.value === ""){
        alert("Enter some text");
    }else{
        let div = document.createElement("div");
        let dateTime = new Date().toLocaleString();
        div.innerHTML = `<div class = "content">
        <div class="heading"> ${title.value}</div>
        <div class="two"> ${note.value}
        <span id="del"><button>X</button></span>
        <span id="edit"><button>E</button></span>
        
        </div>
        <div class="date">${dateTime}</div>
        
        
        </div>`

        let bg = div.querySelector(".two")
        bg.style.backgroundColor = color.value;

        container.appendChild(div);
        let edit_btn = div.querySelector("#edit")

        let exit_btn = div.querySelector("#del");
        exit_btn.addEventListener('click', function(){
            div.style.display = "none";
        })
        title.value = "";
        note.value = "";
    
    }
}

function handleButtonClick(event){
    if (event.target.closest('#edit')) {
        let div = event.target.closest('.content');
        if (div) {
            div.style.width = "400px";
            div.style.height = "400px";
        }
    }
}

function changecolor(){
    note.style.backgroundColor = color.value;
}

btn.addEventListener('click', addNote);
color.addEventListener('change',changecolor)
container.addEventListener('click', handleButtonClick);