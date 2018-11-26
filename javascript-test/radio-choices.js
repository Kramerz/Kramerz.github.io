window.onload = () => {
    const myForm = document.getElementById('sort-type');
    const valueSet = document.getElementById('user-choice');
    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = document.querySelector('input[name="sorter"]:checked').value;
        valueSet.innerHTML = value;
        
    });
    
}

