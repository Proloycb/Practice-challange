 for (var i=1; i<=100; i++) {
    //  console.log (i);
 }


//  odd number 

    for (var i = 50 ; i<=80 ; i++) {
        if ((i%2)!= 0) {
            // console.log (i);
        }
    }

// even numbers 

for (var i = 50; i<=80; i++) {
    if((i%2)== 0) {
        // console.log(i);
    }
}

// three number add 

function sum (num1, num2, num3) {
    var getSum = num1 + num2 + num3;
    return getSum;
}

const result = sum(12,13,15);
// console.log (result);

// celcius to ferenheit 

function getFarenheit (C) {
    var F = (9*C +(32*5))/5;
    return F;
}

const getResult = getFarenheit (21);
console.log (getResult, 'F');

// farenheit to celcius 

function getCelcius (F) {
    var C = (5*(F-32))/9;
    return C;
}

const getResult2 = getCelcius (69.8);
console.log (getResult2, 'C');

// grade 

function grade (number) {
    if (number >= 80 && number <= 100) {
        return 'A+';
    }
    else if (number >= 70 && number <= 79) {
        return 'A';
    }
    else if (number >= 60 && number <= 69) {
        return 'A-';
    }
    else if (number >= 50 && number <= 59) {
        return 'B';
    }
    else if (number >= 40 && number <= 49) {
        return 'C';
    }
    else if (number >= 33 && number <= 39) {
        return 'D';
    }
    else{
        return 'F';
    }
}

const getGrade = grade (94);
console.log (getGrade);