
window.onload = function(){
    document.getElementById("edit").onclick = actionEdit;
    document.getElementById("save").onclick = actionSave;
    document.getElementById("addEmail").onclick = addEmailField;

}


actionEdit = function(){
    var x = document.getElementsByClassName("data");
    for (var i = 0; i < x.length; i++) {
        x[i].removeAttribute("disabled");
    }
    document.getElementById('save').removeAttribute("disabled");
}

actionSave = function(){

    var formValues = document.getElementsByClassName('data');
    var obj = {};
    for(var i = 0; i < formValues.length ; i++){
        var x = formValues.item(i);

        if(x.name.search(('['|']')) != -1 ){
            var tab = x.name.replace(/]/g,'').split('[');

            if(obj[tab[0]] == undefined)
                obj[tab[0]] = new Array();

            if(obj[tab[0]][tab[1]] == undefined)
                obj[tab[0]][tab[1]] = {};
            obj[tab[0]][tab[1]][tab[2]] = x.value;

        } else {
            obj[x.name] = x.value;
        }
    }

    console.log(JSON.stringify(obj));

    var str_json = JSON.stringify(obj) //gives me the JSON string.

// AJAX XMLHttpRequest object in Javascript to send data to the server:
    var request= new XMLHttpRequest()
    request.open("POST", "/user/"+document.getElementById('id').value)
    request.setRequestHeader("Content-type", "application/json", true)
    request.send(str_json)
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

