// Code your solution in this file!

function logDriverNames(drivers){
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, loc){
  drivers.forEach(function(driver) {
    if (driver.hometown === loc) {
    console.log(driver.name);
    }
  });
}

function driversByRevenue (drivers) {
  return drivers.slice().sort(function(driver1, driver2) {
   return driver1.revenue - driver2.revenue; 
  });
}
