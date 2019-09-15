// Code your solution in this file.
// const lowerCaseDrivers = (drivers) => {
//   drivers.map = driver => driver.toLowerCase();
// };
//these tests don't seem to like arrow functions

function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  });
};

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    let nameArr = driver.split(" ");
    let driverNameObj = {};
    driverNameObj.firstName = nameArr[0];
    driverNameObj.lastName = nameArr[1];
    return driverNameObj;
  });
};

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
};