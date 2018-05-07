
function yearOfBirth(age){

    if (age < 0){
      try{
        throw new Error("Age can not be negative");
      }
      catch(e){
        alert("no negatve age");
      }
    }

    return 2016-age;
}

function whoAmI(name, age){
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);

  var yob = yearOfBirth(age);

  console.log(`I was born in ${yob}`);
}

whoAmI();
