// design patterns


// Module Pattern => encapsulates related code into a single unit or module to promote code organization and reusability

// ifee => immediately invoked function expression
let Bank = (function () {
  let bankbalance = 1000;

  function checkBank() {
    console.log(bankbalance);

  }

  function setBank(val) {
    bankbalance = val;
  }


  function withdraw(val) {
    if (val > bankbalance) {
      console.log("insufficient balance");
    } else {
      bankbalance -= val;
      console.log(`withdrawn ${val}, remaining balance is ${bankbalance}`);
    }
  }



  return {
    checkBank: checkBank,
    setBank: setBank,
    withdraw: withdraw
  }


})();

Bank.checkBank();
Bank.withdraw(200);
Bank.setBank(5000);
Bank.checkBank();
Bank.withdraw(6000);



