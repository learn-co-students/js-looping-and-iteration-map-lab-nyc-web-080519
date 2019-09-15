function lowerCaseDrivers(names) {
    return names.map(function (n) {
        return n.toLowerCase();
    });
}

function nameToAttributes(names) {
    return names.map(function (fullname) {
        let arr = fullname.split(' ');
        return Object.assign({}, {firstName: arr[0], lastName: arr[1]});
    });
}

function attributesToPhrase(drivers) {
    return drivers.map(function (obj) {
        return `${obj.name} is from ${obj.hometown}`;
    });
}