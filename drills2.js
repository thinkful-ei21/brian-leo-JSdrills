/*function jediname(firstName,lastName){
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
*/


function daysInMonth (month, leapyear){
  switch (month){
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      //console.log ( `${month} has 31 days.`);
    break;
   case 'April':
    case 'June':
    case 'September':
    case 'November':
  //  console.log(`${month} has 30 days.`);
    break;
    default:
  //  console.error('not a valid month')
}
/*
switch(month){

  case 'February':
  if (leapyear===true){
    console.log(`${month} has 29 days.`);
  }
  else {console.log(`${month} has 28 days.`);
  }
  break;*/

}
//console.log(daysInMonth('bob'));
//------------////////////////////
function compareValues(a,b){
  //a = 1,2,3
  //b = 1,2,3
  //take the perepective of player a. if player a wins/ player b loses
  if (a === b){
    return "draw";
  } else {
    return "win"
  }
}
console.log(compareValues(2,2));
console.log(compareValues(1,3));

function rockpaperscissors(opt){
  const randomNo = Math.floor(Math.random() * 3) + 1;
  var rock = 1;
  var paper = 2;
  var scissors = 3;

  //how are the values supposed to be compared?
  //an area to compare your scores and the computer are needed?
/*  let playfield =
  //switch(opt){
    case "win":
      rock
  }*/




}
