function lowerCaseDrivers(drivers) {
    return drivers.map( function(driver) { return driver.toLowerCase(); } );
};

function splitter(word) {
    return word.split(" ");
};

function nameToAttributes(drivers) {
    return drivers.map( function(driver) { return {firstName : splitter(driver)[0], lastName : splitter(driver)[1] } } );
};

function attributesToPhrase(drivers) {
    return drivers.map(function(driver) { return `${driver.name} is from ${driver.hometown}`} );
};

