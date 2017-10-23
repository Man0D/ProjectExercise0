
window.onload = function(){
    //x();
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
