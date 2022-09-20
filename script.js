let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

//Form submit event
form.addEventListener("submit", addItem);

//Add item function
function addItem(e) {
    //prevent sending a post or get request to the server,
    //redirecting the current page to the server's response
    e.preventDefault();
    
    //get input value
    let newItem = document.getElementById("item").value;

    //create new li element
    let li = document.createElement("li");

    //add class
    li.className = "list-group-item";

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button element
    let deleteBtn = document.createElement("button");
    
    //Add classes to delete button
    deleteBtn.className = "x-btn";

    //Append text node
    deleteBtn.appendChild(document.createTextNode("X"));

    //Append button to li
    li.appendChild(deleteBtn);

    //Append li to list
    itemList.appendChild(li);
}