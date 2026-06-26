// İlk elemanlara X ekle
let myNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {

    let span = document.createElement("SPAN");

    let txt = document.createTextNode("\u00D7");

    span.className = "close";

    span.appendChild(txt);

    myNodelist[i].appendChild(span);
}

// Silme olayı
function addCloseEvents(){

    let close=document.getElementsByClassName("close");

    for(let i=0;i<close.length;i++){

        close[i].onclick=function(){

            this.parentElement.remove();

            saveData();

        }

    }

}

addCloseEvents();


// Checked
let list=document.querySelector("#list");

list.addEventListener("click",function(e){

    if(e.target.tagName=="LI"){

        e.target.classList.toggle("checked");

        saveData();

    }

});


// Yeni eleman
function newElement(){

    let input=document.getElementById("task");

    let value=input.value.trim();

    if(value==""){

        $("#errorToast").toast("show");

        return;

    }

    let li=document.createElement("li");

    li.appendChild(document.createTextNode(value));

    document.getElementById("list").appendChild(li);

    let span=document.createElement("SPAN");

    span.className="close";

    span.appendChild(document.createTextNode("\u00D7"));

    li.appendChild(span);

    addCloseEvents();

    input.value="";

    $("#successToast").toast("show");

    saveData();

}


// Local Storage

function saveData(){

    localStorage.setItem("todo",document.getElementById("list").innerHTML);

}

function loadData(){

    let data=localStorage.getItem("todo");

    if(data){

        document.getElementById("list").innerHTML=data;

        addCloseEvents();

    }

}

loadData();