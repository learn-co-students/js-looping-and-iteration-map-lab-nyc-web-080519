function lowerCaseDrivers(arr) {
  let output = arr.map( driver => driver.toLowerCase());
  return output;
}

function nameToAttributes(arr) {
  let output = arr.map( function(driver) { let names = driver.split(" "); return Object.assign ({}, {"firstName": names[0], "lastName": names[1]})});
  return output;
}

function attributesToPhrase(arr_of_objs) {
  let output = arr_of_objs.map( function(obj) { return `${obj.name} is from ${obj.hometown}` });
  return output
}