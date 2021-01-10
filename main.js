// "Add" button functionality
const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", function() {
    createEntry()
});

// Entire Logic
function createEntry() {
    // get all of elements
    const btncheck = document.querySelector(".isCompleate");
    const desc = document.querySelector(".isDesc");
    const date = document.querySelector(".isDate");
    const item = document.querySelector(".list-item");
    const list = document.querySelector("#list");
    // copy node 
    const nodecoppy = item.cloneNode(true);
    nodecoppy.querySelector('input').checked = btncheck.checked;
    nodecoppy.querySelector('span').innerHTML = desc.value;
    nodecoppy.querySelector('div').innerHTML = date.value;

    // delete button logic -> copy element, give it eventlistener once triggered delete parent of button which is entire <li></li> 
    let delBtn = nodecoppy.querySelector(".delBtn");
    delBtn.addEventListener("click", function() {
        this.parentNode.remove()
    })

    // display coppied node in the window
    list.appendChild(nodecoppy);
}