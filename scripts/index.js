const inputField = document.getElementById('input');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('item-list');



/* addItem()
 * 
 * This function will get the input value on inputField or the
 * input bar in the html page and add it to the array of the 
 * unorderedList
 */

const addItem = () => {
    
    let inputValue = inputField.value; // gets the value of the text bar
    let text = document.createTextNode(inputValue); //used to create a text node with the inputValue

    let li = document.createElement("li"); // used to create an li element in the DOM
    let checkBox = document.createElement("input"); //creating an input element
    checkBox.type = "checkbox"; // creating a type checkbox from the created input element
    checkBox.className = "check-box";

    let closeButton = document.createElement("button"); //creating a close button
    closeButton.textContent = "X";
    closeButton.className = "close-button";

    li.appendChild(checkBox); // this will add the checkbox created
    li.appendChild(text); // this will create the text node within the li element
    li.appendChild(closeButton); // this will create the close button after the text node
    itemList.appendChild(li); // the li element containing the text node will be added to the ul

    // Eventlistener for the checkbox
    checkBox.addEventListener("change", () => {
        if(checkBox.checked) {
            li.style.textDecoration = "line-through";
        } else {
            li.style.textDecoration = "none";
        }
    })

    //Eventlistener for the closeButton
    closeButton.addEventListener("click", () => {
        itemList.removeChild(li);
    })

    inputField.value = ""; // resetting the input bar after entering the item

}

addButton.addEventListener("click", addItem);
