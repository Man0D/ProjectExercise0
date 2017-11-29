window.onload = function(){
    document.getElementsByName("s").button('toggle');
}



function x(){
    for(i = 0; i < 2; i++){

        var node = document.createElement("a");
        node.setAttribute("class","contact")
        node.setAttribute("href","http://localhost:3000/users?Id="+i)

        var textName = document.createTextNode("Steve");
        var textNumber = document.createTextNode(i);

        node.appendChild(textName);
        node.appendChild(textNumber);

        document.getElementById("display").appendChild(node);
    }
}

function deleteContact(x){

    var r = confirm("You are about to delete the contact!");
    if (r == true) {
        var request= new XMLHttpRequest();
        request.open("GET", "/delete/"+x);
        request.setRequestHeader("Content-type", "application/json", true);
        request.onreadystatechange = function () {
            if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                window.location = window.location;
            }
        };
        request.send()
    } else {

    }
}