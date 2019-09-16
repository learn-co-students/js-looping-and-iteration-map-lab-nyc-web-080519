import { METHODS } from "http";

function lowerCaseDrivers(list) {
    return list.map(function(driver) {
      return driver.toLowerCase();
    });
  }

//   1. Create a function called lowerCaseDrivers and pass in an arguement of a list of driver names. 
//   2. Take the list provided in the arguement and run the method ".map".
//   3. ".map" will go through the list and execute the callback function. 
//   4.  "map" will also return a new array that includes the udpated list. 
  
  function nameToAttributes(list) {
    return list.map(function(driver) {
      const driverFirst = driver.split(' ')[0];
      const driverLast = driver.split(' ')[1];
  
      return { firstName: driverFirst, lastName: driverLast };
    });
  }

//   1. Create a function called nameToAttributes and pass in an arguement of list. 
//   2. Take the list provided in the arguement and run the method ".map"
//   3. Create two variables, one for the first name and one for the last name. 
//   4. Create a new hash to store the names. 
  
  function attributesToPhrase(drivers) {
    return drivers.map(function(driver) {
      return `${driver.name} is from ${driver.hometown}`;
    });
  }

  //  1. Create a function called attributesToPhrase with an arguement of drivers. 
  //  2. Take the drivers object and run the map method. 
  //  3. The map method will need a call back function that will take reach result from the map method.
  //  4. Return an interpoldated string.  