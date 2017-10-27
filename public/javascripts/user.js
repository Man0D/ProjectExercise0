
window.onload = function(){
    document.getElementById("edit").onclick = actionEdit;
    document.getElementById("save").onclick = actionSave;
    document.getElementById("addEmail").onclick = addEmailField;

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

addEmailField  = function(){
    var input = document.createElement("input");
    input.setAttribute('type','text');
    input.setAttribute('name','email2');
    input.setAttribute('class','input');

    document.getElementById("emails").appendChild(document.createElement('br'));
    document.getElementById("emails").appendChild(input);



}