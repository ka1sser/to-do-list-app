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
    li.appendChild(text); // this will create the text node within the li element
    itemList.appendChild(li); // the li element containing the text node will be added to the ul

    inputField.value = ""; // resetting the input bar after entering the item
}

addButton.addEventListener("click", addItem);