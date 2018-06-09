var compt = 0;

window.onload = function(){
    document.getElementById("edit").onclick = actionEdit;
    document.getElementById("save").onclick = actionSave;
    document.getElementById("addEmail").onclick = addEmailField;
    document.getElementById("removeEmail").onclick = removeEmailField;


};


actionEdit = function(){
    var x = document.getElementsByClassName("data");
    for (var i = 0; i < x.length; i++) {
        x[i].removeAttribute("disabled");
    }

    document.getElementById('save').removeAttribute("disabled");
    document.getElementById('addEmail').removeAttribute("disabled");
    document.getElementById('removeEmail').removeAttribute("disabled");
    document.getElementById('addAddress').removeAttribute("disabled");
};

actionSave = function(){

    var formValues = document.getElementsByClassName('data');
    var obj = {};
    for(var i = 0; i < formValues.length ; i++){
        var x = formValues.item(i);

        if(x.name.search(/\[|\]/) !== -1 ){
            var tab = x.name.replace(/]/g,'').split('[');

            if(obj[tab[0]] === undefined)
                obj[tab[0]] = [];

            if(obj[tab[0]][tab[1]] === undefined)
                obj[tab[0]][tab[1]] = {};
            obj[tab[0]][tab[1]][tab[2]] = x.value;

        } else {
            obj[x.name] = x.value;
        }
    }

    //console.log(JSON.stringify(obj));

    var str_json = JSON.stringify(obj);

    var request= new XMLHttpRequest();
    request.open("POST", "/user/"+document.getElementById('id').value);
    request.setRequestHeader("Content-type", "application/json", true);
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        }
    };
    request.send(str_json)
};

addEmailField  = function(){
    compt++;

    var div2 = document.createElement("div");
    div2.setAttribute('class','col-8 col-md-9');
    var div1 = document.createElement("div");
    div1.setAttribute('class','col-12 form-row');

    div1.appendChild(document.createElement('br'));
    div1.appendChild(document.createElement('br'));

    var input = document.createElement("input");
    input.setAttribute('type','email');
    input.setAttribute('name','emails['+compt+'][email]');
    input.setAttribute('class','data form-control');

    div2.appendChild(input);
    div1.appendChild(div2);

    var select = document.createElement('select');
    var option1 = document.createElement('option');
    var option2 = document.createElement('option');
    option1.setAttribute('value','PRO');
    option2.setAttribute('value','PERSONNAL');
    option1.appendChild(document.createTextNode('PRO'));
    option2.appendChild(document.createTextNode('PERSONNAL'));
    select.appendChild(option1);
    select.appendChild(option2);
    select.setAttribute('name','emails['+compt+'][type]');
    select.setAttribute('class','data col-4 col-md-3 custom-select')

    div1.appendChild(select);

    document.getElementById("emails").appendChild(div1);
};

removeEmailField = function(){
    var t = document.getElementById("emails");

    if(t.hasChildNodes()){
        t.removeChild(t.lastChild);
    }
    compt--;
};
//TODO: ajout de champ adresse, champ email => changer l'atttribut name