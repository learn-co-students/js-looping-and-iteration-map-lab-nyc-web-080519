// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(function (driver) {
        return driver.toLowerCase();
    })
}

function nameToAttributes(drivers) {
    return drivers.map(function (driver) {
        const name = driver.split(" ")
        const first = name[0];
        const last = name[1];
        return {firstName: first, lastName: last};
    })
}

function attributesToPhrase(arr) {
    return arr.map(function(driver) {
        return `${driver.name} is from ${driver.hometown}`;
    })
}

// "<NAME OF DRIVER> is from <HOMETOWN>"