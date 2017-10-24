
window.onload = function(){
    document.getElementById("edit").onclick = actionEdit;
    document.getElementById("save").onclick = actionSave;

}


actionEdit = function(){
    var x = document.getElementsByClassName("input");
    for (var i = 0; i < x.length; i++) {
        x[i].removeAttribute("disabled");
    }
    document.getElementById('save').removeAttribute("disabled");
}

actionSave = function(){
    console.log("Send post to server");

}