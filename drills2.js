function jediname(firstName,lastName){
    let jedifirst = firstName.slice(0, 2);

    let jedilast = lastName.slice(0, 3);

    return jedilast + jedifirst;
}

console.log(jediname("breian","dixon"));



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
