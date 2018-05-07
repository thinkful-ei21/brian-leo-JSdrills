
function yearOfBirth(age){

    if (age < 0){
      try{
        throw new Error("Age can not be negative");
      }
      catch(e){
        alert("no negatve age");
      }
    }

    if (isNAN(age) === true){
      console.error("not a number")
    }

    return 2016-age;

}

function whoAmI(name, age){
  if (typeOf(name) !== "string") {
    console.error("not a string")
  }

  if (name===null|| age===null){
    console.error('Arguments not valid');
  }
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);

  var yob = yearOfBirth(age);

  console.log(`I was born in ${yob}`);



}

whoAmI();
