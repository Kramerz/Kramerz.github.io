window.onload = () => {
    const userInput = document.getElementById("list-data");
    const setTextButton = document.getElementById("set-text");

    setTextButton.onclick = () => {
        changeOnClick();
    }


}


function changeOnClick(){
    document.getElementById("list-data").value = 'Ryan Was not here.';
}