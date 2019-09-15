// Code your solution in this file.
lowerCaseDrivers = (drivers) => {
  let lowerCaseDrivers = drivers.map(driver => driver.toLowerCase()); 
  return lowerCaseDrivers;
}

//take drivers array and for each string, transform it through map into a hash with first name and last name; shift removes first item of an array, pop removes last item
function nameToAttributes(drivers){
  let attributesArr = drivers.map(driver => ({ firstName: driver.split(' ').shift(), lastName: driver.split(' ').pop() }));
  return attributesArr; 
}

function attributesToPhrase(drivers){
  let phrases = drivers.map(driver => (`${driver["name"]} is from ${driver["hometown"]}`))
  return phrases; 
}
