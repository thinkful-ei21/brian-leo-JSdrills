function jediname(firstName,lastName){
    let jedifirst = firstName.slice(0, 2);

    let jedilast = lastName.slice(0, 3);

    return jedilast + jedifirst;
}

console.log(jediname("breian","dixon"));//



function beyond (num){

    if (num === Infinity){
        console.log('And beyond');
    }

    else if (num >0){
        console.log('To infinity');
    }

    else if (num < 0){
        console.log('To negative infinity');
    }
    else (num === 0){
        console.log('Staying home');
    }
}

function decode(words){
  let dwords = words.split(" ");


  for (i = 0; i < dwords.length; i++){
   let lastwords = dwords[i];
    if (lastwords[0] === "a" ){

      console.log(lastwords[1]);
    }
    else if (lastwords[0] === "b" ){

      console.log(lastwords[2]);
    }
    else if (lastwords[0] === "c" ){

      console.log(lastwords[3]);
    }
    else if (lastwords[0] === "d" ){

      console.log(lastwords[4]);
    }
    else {
      console.log(" ");
    }


  }

}

decode("craft block argon meter bells brown croon droop");
