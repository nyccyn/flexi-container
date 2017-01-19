# flexi-container
Flexible container for services that separates implementation and usage from configuration

flexi-container create services using provied plugin while the default plugin, ObjectContaier, create the service in memory
### Supported Plugins
[flexi-container-socket](https://github.com/nyccyn/flexi-container-socket) - socket.io plugin

## Installion
`npm install --save flexi-container`

## Usage
Firts thing we need to create a `Contract` for are service that the service will implement and the consumer will use:
```javascript
// math-contract.js
const Contract = require('flexi-container').Contract;

module.exports = new Contract({
    add: Contract.Function,
    sub: Contract.Function
});
```

Contract's members can be either `Contract.Function` or `Contract.Event`

our service just implement a class with the same members
```javascript
// math.js
class Math {
    add(a,b) {
        return a + b;
    }
    sub(a,b) {
        return a -b;
    }
}
```
to register the service in the container we'll call `registerService(contract, implementation, [plugin])` and to use the service a call `getService(contract, [plugin])`
```javascript
const flexiContainer = require('flexi-container');
const mathContract = require('./math-contract');
const Math = require('./math');

flexiContainer.registerService(mathContract, new Math());
const math = flexiContainer.getService(mathContract);

console.log(math.add(1,2));
console.log(math.sub(10,5));
```