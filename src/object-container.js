const Contract = require('./Contract');

export default class ObjectContainer {
    constructor(){
        this.consumers = {};
    }
    registerService(contract, implementation) {
        const consumer = ObjectContainer.consumers[JSON.stringify(contract)] = {};

        for (let f in contract){
            switch (contract[f]){
                case Contract.Event:
                    implementation[f+'Listeners'] = [];
                    implementation[f] = (...args) => implementation[f+'Listeners'].forEach(l => l(...args));
                    consumer[f] = callback => implementation[f+'Listeners'].push(callback);
                    break;
                case Contract.Function:
                    consumer[f] = implementation[f].bind(implementation);
                    break;
                default:
                    throw new Error(`Type of function ${f} is not supported`)
            }
        }
    }
    getService(contract) {
        return ObjectContainer.consumers[JSON.stringify(contract)];
    }
}
ObjectContainer.consumers = {};