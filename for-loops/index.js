window.onload = () => {
    const listButton = document.getElementById('set-text');
    listButton.onclick = () => {
        const myList = document.getElementById('my-list');

            for(i = 0; i <= 5; i++){
                elfCode.appendToList(myList, i);
            } 
    }
}