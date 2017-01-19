const Contract = require('./Contract');
const ObjectContainer = require('./ObjectContainer');

export function registerService(contract, implementation, plugin) {
    if (!plugin) {
        plugin = new ObjectContainer();
    }
    if (!plugin['registerService'] || typeof plugin['registerService'] !== 'function') {
        throw new Error(`contractor plugin is invalid, it's not implement registerService function`)
    }
    if (!(contract instanceof Contract)){
        throw new Error('contract must be instance of Contract');
    }

    plugin.registerService(contract, implementation);
}

export function getService(contract, plugin) {
    if (!plugin) {
        plugin = new ObjectContainer();
    }
    if (!plugin['getService']|| typeof plugin['getService'] !== 'function') {
        throw new Error(`contractor plugin is invalid, it's not implement getService function`)
    }
    if (!(contract instanceof Contract)){
        throw new Error('contract must be instance of Contract');
    }

    return plugin.getService(contract);
}

exports.Contract = Contract;