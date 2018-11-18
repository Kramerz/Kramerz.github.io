var person = {
    firstName: "Ryan",
    lastName: 'West',
    fullName() {
        return this.firstName + " " + this.lastName
    }

}
divider("person")
console.log(person.firstName)
console.log(person.lastName)
console.log(person.fullName())

var calculator = {
    operandone: -1,
    operand02: -1,
    add() {
        return this.operand02 + this.operandone
    },
    subtract() {
        return this.operandone - this.operand02
    },
    multiply(){
        return this.operandone * this.operand02
    }
}
divider('Calculator')
calculator.operandone = person.firstName.length;
calculator.operand02 = person.lastName.length;
console.log(calculator.operandone)
console.log(calculator.operand02)
console.log(calculator.add())
console.log(calculator.multiply())
console.log(calculator.subtract())
divider('Completed');

function divider(title){
    console.log("===================================")
    console.log(title);
    console.log("===================================")
}