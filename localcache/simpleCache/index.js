const flight = require('./flight');

flight.setNumber(462);
flight.setOrigin('DCA');
flight.setDestination('LAX');

console.log(flight.getInfo());

const anotherFlight = require('./flight');
console.log(anotherFlight.getInfo());
