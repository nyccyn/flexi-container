export default class Contract {
    constructor(definitions){
        for (let def in definitions){
            if (definitions[def] !== Contract.Function && definitions[def] !== Contract.Event){
                throw new Error(`Definition ${def} value is need to be Function or Callback`);
            }
            this[def] = definitions[def];
        }
    }
}
Contract.Function = 'Function';
Contract.Event = 'Event';