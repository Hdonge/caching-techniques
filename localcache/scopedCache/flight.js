module.exports = function (info) {
    let values = {
        number: null,
        origin: null,
        destination: null,
        departs: null,
        arrives: null,
        actualDeaprt: null,
        actaulArrive: null
    };

    for (let prop in values) {
        if (values[prop] !== 'undefined') {
            values[prop] = info[prop];
        }
    }

    let functions = {
        triggerDepart: function () {
            values.actualDeaprt = Date.now();
        },
        triggerArrive: function () {
            values.actaulArrive = Date.now()
        },
        getInformation: function () {
            return values;
        }
    };

    return functions;
};
