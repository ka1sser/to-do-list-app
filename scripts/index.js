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
    const inputValue = inputField.value;
    if(inputValue !== ""){
        //variables
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');

        //input type
        checkbox.type = 'checkbox';

        //appending the box then the text
        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(inputValue));
        console.log(listItem);
        itemList.appendChild(listItem);
        inputField.value = "";
    }
}

addButton.addEventListener('click', addItem);