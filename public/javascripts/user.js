
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
    input.setAttribute('type','email');
    input.setAttribute('name','email2');
    input.setAttribute('class','input');

    var select = document.createElement('select');
    var option1 = document.createElement('option');
    var option2 = document.createElement('option');
    option1.setAttribute('value','PRO');
    option2.setAttribute('value','PERSONNAL');
    option1.appendChild(document.createTextNode('PRO'));
    option2.appendChild(document.createTextNode('PERSONNAL'));
    select.appendChild(option1);
    select.appendChild(option2);

    document.getElementById("emails").appendChild(document.createElement('br'));
    document.getElementById("emails").appendChild(document.createElement('label'));
    document.getElementById("emails").appendChild(input);
    document.getElementById("emails").appendChild(select);




}