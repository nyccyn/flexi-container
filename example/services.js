const flexiContainer = require('flexi-container');
const mathContract = require('./math-contract');

const math = flexiContainer.getService(mathContract);

module.exports = {
    math
};