let num = 5;
const numString = '3';
const rain = true;


console.log(num, numString);
console.log(typeof num, typeof numString);
console.log(num + numString);
console.log(typeof(num) + numString);

if(rain === true){
    console.log("looks like it's raining outside, going to go to the gym.");
}
else {
    console.log("Looks like will just go for a walk....");
}



function evenOrOdd(value){
    if(value % 2 === 0){
        console.log("Value is even!");
    }
    else{
        console.log("Value is not even :'(");
    }
}

evenOrOdd(55);


console.log('MODULES TEST FOR EVEN: ',num % 2);
console.log('Modules test for even: ', num % 2 === 0);

var app = {

    isEven: function(input) {
        if (input % 2 === 0) {
            console.log('Your input of ' + input + ' is even');
        } else {
            console.log('Your input of ' + input + ' is odd');
        }
    }
};

app.isEven(2);
app.isEven(3);
app.isEven(4);
app.isEven(5);