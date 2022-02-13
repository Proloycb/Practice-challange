// 13 er namota

function namota (number) {
    for(let i = 1; i <= 10; i++) {
        getNamota = number * i;
        console.log (number, "x", i, "=", getNamota);
    }
    return getNamota;
}

const firstNamota = namota (13);

// uppercase or lowercase

function uppercase (name) {
   var lang = name.toLowerCase();
    return lang;
}

const uppercaseConvert = uppercase ('PROGRAMMING HERO');
console.log (uppercaseConvert);


//  full name

function fullName (firstName, lastName) {
    var add = firstName+ " " + lastName;
    return add;
}

const addition = fullName ('Proloy','Chacroborty');
console.log (addition);

// square 

function input (number) {
    var square = number**2;
    return square;
}

const getSquare = input (5);
console.log (getSquare);

// pizza 

const pizza = {
    toppings: ['cheese', 'sauce', 'paperoni'],
    crust: 'deep dish',
    serves: 2
}

var output = pizza.toppings[2];
console.log(output);
