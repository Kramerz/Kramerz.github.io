


window.onload = () => {
    const simpleFunctions = document.getElementById('simple-function')
    const functionParams = document.getElementById('function-parameters')
    const functionReturns = document.getElementById('function-return')
    const button = document.getElementById('function-calls')

    function simpleFunction() {
        simpleFunctions.textContent = "Functions should consist of statements designed to perform a single task"
        console.log('functions should consist of statements designed to perform a single task.')
    }
    function functionParameters(singleParam){
        functionParams.textContent = singleParam
        console.log(singleParam)
    }
    function functionReturn(){
        functionReturns.textContent = "Mnay functions return values!"
        return "Many functions return values."
    }

    
    button.onclick = simpleFunction();
    button.onclick = functionParameters("Hello world");
    button.onclick = functionReturn();

}



