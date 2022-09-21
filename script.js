let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

//Form submit event
form.addEventListener("submit", addItem);

//Delete item event
itemList.addEventListener("click", removeItem);

//Filter event
filter.addEventListener("keyup", filterItems);

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

//remove item function
function removeItem(e) {
    if (e.target.classList.contains("x-btn")) {
        if (confirm("Are you sure?")) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items function
function filterItems(e) {
    //convert text to lowercase
    let text = e.target.value.toLowerCase();
    
    //Get all the elements in the list
    let items = itemList.getElementsByTagName("li");

    //convert to an array
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
}