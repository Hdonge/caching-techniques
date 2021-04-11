const flight = require('./flight');

let pdxlax = {
    number: 847,
    origin: 'PDX',
    destination: 'LAX'
};

let pl = flight(pdxlax);

pl.triggerDepart();
pl.triggerArrive();

console.log(pl.getInformation());

let ausdca = {
    number: 382,
    origin: 'AUS',
    destination: 'DCA'
};

let ad = flight(ausdca);

ad.triggerDepart();
ad.triggerArrive();

console.log(ad.getInformation());

console.log(pl.getInformation());
