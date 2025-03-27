console.log("Ciao da JS!");

/*inserisce l'elemento nella lista, evitando doppioni o campi vuoti*/
function addObj() {
    var inputValue = document.getElementById("obj").value;
    var list = document.getElementById("list");

    if (inputValue !== "") {
        var items = list.getElementsByTagName("li");
        for (var i = 0; i <items.length; i++) {
            if (items[i].textContent === inputValue) {
                alert("Elemento gia' presente");
                return; 
            }
        }

        var listItem = document.createElement("li");
        listItem.textContent = inputValue;
        list.appendChild(listItem);

        document.getElementById("obj").value = "";
    }
}
document.getElementById("obj").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addObj();
    }
});

/*inserisci l'elemento nella input box, rimuove l'elemento digitato*/
function removeObj(){
        var removeValue = document.getElementById("robj").value;
        var list = document.getElementById("list");
        var items = list.getElementsByTagName("li");
    
        for(var i = 0; i < items.length; i++) {
            if(items[i].textContent == removeValue) {
                list.removeChild(items[i]);
                document.getElementById("robj").value = "";
            }
        }
}

document.getElementById("robj").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        removeObj();
    }
});

/* rimuove tutti gli elementi della lista */
var button = document.getElementById("rt");
button.addEventListener("click", ra);
function ra() {
    var list = document.querySelectorAll("li");

    for(var i=0; i<list.length; i++){
        list[i].remove();
    }
}

/* rimozione dell'elemento su cui si fa hover*/
var list = document.getElementById("list");
list.addEventListener("dblclick", function(event) {
        event.target.remove();
});

/*riga sull'elemento clickato*/
list.addEventListener("click", function(event) {
    var items = list.getElementsByTagName("li");
    if(event.target.style.textDecoration === "") {
        event.target.style.textDecoration = "line-through";
    } else if(event.target.style.textDecoration === "line-through") {
        event.target.style.textDecoration = "";
    }   
});
