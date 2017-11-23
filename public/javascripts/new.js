window.onload = function(){
    document.getElementById("save").onclick = actionSave;
    document.getElementById("addEmail").onclick = addEmailField;
}

actionSave = function(){

    var formValues = document.getElementsByClassName('data');
    var obj = {};
    for(var i = 0; i < formValues.length ; i++){
        var x = formValues.item(i);

        if(x.name.search(/\[|\]/) != -1 ){
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

    var str_json = JSON.stringify(obj);

    var request= new XMLHttpRequest();
    request.open("POST", "/new");
    request.setRequestHeader("Content-type", "application/json", true);
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            window.location = window.origin
        }
    };
    request.send(str_json)
}

addEmailField  = function(){
    var div1 = document.createElement("div");
    div1.setAttribute('class','col-sm-1');
    var div2 = document.createElement("div");
    div2.setAttribute('class','col-sm-9');

    var input = document.createElement("input");
    input.setAttribute('type','email');
    input.setAttribute('name','emails[1][email]');
    input.setAttribute('class','data form-control');

    div1.appendChild(document.createTextNode(''));
    div2.appendChild(input);

    var select = document.createElement('select');
    var option1 = document.createElement('option');
    var option2 = document.createElement('option');
    option1.setAttribute('value','PRO');
    option2.setAttribute('value','PERSONNAL');
    option1.appendChild(document.createTextNode('PRO'));
    option2.appendChild(document.createTextNode('PERSONNAL'));
    select.appendChild(option1);
    select.appendChild(option2);
    select.setAttribute('name','emails[1][type]');
    select.setAttribute('class','data col-sm-2 custom-select')

    document.getElementById("emails").appendChild(document.createElement('br'));
    document.getElementById("emails").appendChild(div1);
    document.getElementById("emails").appendChild(div2);
    document.getElementById("emails").appendChild(select);

}