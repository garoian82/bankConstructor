

// Initial constructor function Bank.
function Bank(balance) {
  this.balance = balance;
}

// Prototype of Bank
Bank.prototype.credit = function(num) {
  this.balance += num;
};

// Prototype of Bank
Bank.prototype.debit = function(num) {
  this.balance -= num;
};
// Creates a new Instance of Bank.
var moneyHole = new Bank(100);

// Prompt user for three deposits.
for (var i = 0; i < 3; i++) {
  var total = parseInt(prompt("How much would you like to deposit today?", 10));
  moneyHole.credit(total);
}

// Prompt user for 2 withdrawls.
for (var j = 0; j < 2; j++) {
  var total = parseInt(prompt("how much would you like to withdraw?", 10));
  moneyHole.debit(total);
}

// logs total new balance after deposits and withdrawls.
console.log(moneyHole.balance);