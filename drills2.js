function jediname(firstName,lastName){
    let jedifirst = firstName.slice(0, 2);

    let jedilast = lastName.slice(0, 3);

    return jedilast + jedifirst;
}

console.log(jediname("breian","dixon"));
