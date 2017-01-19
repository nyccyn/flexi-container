const flexiContainer = require('flexi-container');
const mathContract = require('./math-contract');
const Math = require('./math');

flexiContainer.registerService(mathContract, new Math());
const services = require('./services');

console.log(services.math.add(1,2));
console.log(services.math.sub(10,5));