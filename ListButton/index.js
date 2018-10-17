window.onload = () => {
    const userInput = document.getElementById("list-data");
    const setTextButton = document.getElementById("set-text");
    const listButton = document.getElementById('add-to-list');
    

    setTextButton.onclick = () => {
        changeOnClick();
    }
    
    listButton.onclick = () => {
        const myList = document.getElementById('my-list');
        elfCode.appendToList(myList, userInput.value);
    }
    
}


function changeOnClick(){
    document.getElementById("list-data").value = 'Ryan Was not here.';
}