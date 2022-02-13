// leap year

function leapYear(year) {
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }
}

const getLeapYear = leapYear (2023);
console.log (getLeapYear);

// age even or odd 

function age (number) {
    if(number % 2 == 0) {
        return true;
    }
    return false;
}

const getAge = age (21);
console.log (getAge);

// hour to minutes

function input (hour) {
    let convertMinute = hour * 60;
    return convertMinute;
}

const getMinute = input (24);
console.log (getMinute, 'minute');