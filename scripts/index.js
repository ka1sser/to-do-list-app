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

    li.appendChild(checkBox); // this will add the checkbox created
    li.appendChild(text); // this will create the text node within the li element
    itemList.appendChild(li); // the li element containing the text node will be added to the ul

    // Eventlistener for the checkbox
    checkBox.addEventListener("change", () => {
        if(checkBox.checked) {
            li.style.textDecoration = "line-through";
        } else {
            li.style.textDecoration = "none";
        }
    })

    inputField.value = ""; // resetting the input bar after entering the item

    let span = document.createElement("span"); // creates a span element
    var txt = document.createTextNode("\u00D7"); // creates a text node with "X" symbol
    span.className = "close"; // assigning a class name to the span
    span.appendChild(txt); // appending the "X" symbol to the span
    li.appendChild(span); // the span is added to the li element

    for(i = 0; i < close.length; i++){
        close[i].onclick = () => {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

}

addButton.addEventListener("click", addItem);
