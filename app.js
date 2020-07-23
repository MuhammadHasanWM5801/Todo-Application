var list= document.getElementById("list")




function addtodo(){
    var todo_item = document.getElementById("todo")

    //create li text with the Text Node
    var li = document.createElement("ul")
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext)

// Delete Button

    var del = document.createElement("button")
    var deltext = document.createTextNode("DELETE")
    del.setAttribute("class","btn")
    del.setAttribute("onclick","deleteitem(this)")
    del.appendChild(deltext)

    // Create Edit Button

    var editbtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editbtn.setAttribute("class","btn1")
    editbtn.appendChild(editText)   
    editbtn.setAttribute("onclick","editItem(this)")
    





    
    li.appendChild(del)
    li.appendChild(editbtn)
    
 
    list.appendChild(li)

    todo_item.value =""
    
}



function deleteitem(e){
    e.parentNode.remove()
}

function editItem(e){

    var val = e.parentNode.firstChild.nodeValue;
    
    var editval = prompt("Enter Edit value",val)
    e.parentNode.firstChild.nodeValue = editval
    
}


function deleteall(){
    list.innerHTML= ""
}


