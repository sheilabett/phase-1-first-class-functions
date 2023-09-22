// function receivesAFunction(student, creditscore){
//     console.log("The student name is +"+ student);
//     returnsANamedFunction();
// }
// function returnsANamedFunction(){
// console.log('This is your loan limit');
// }
// receivesAFunction("Sheshe", returnsANamedFunction)

// function creditscore(){
//     console.log("");
// }

function receivesAFunction(callback) {
    if (typeof callback === 'function') {
      callback();
    }
  }

  function returnsANamedFunction() {

    function namedFunction() {
      console.log("I am a function");
    }
    return namedFunction;
  }

  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am anonymous function.");
    }
  }

