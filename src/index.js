
const switchCase = (defaultCase, cases, variable) => {
    const caseToRun = cases.hasOwnProperty(variable) ? cases[variable] : defaultCase;

    if (typeof caseToRun === 'function') {
        return caseToRun(variable)
    } else {
        return caseToRun;
    }
};

function curry(fn, storedArgs) {
    if (!storedArgs) {
        storedArgs = [];
    }
    return function(...args) {
        if (storedArgs.length + args.length >= fn.length) {
            return fn.apply(null, storedArgs.concat(args));
        } else {
            return curry(fn, storedArgs.concat(args))
        }
    }
}

export default curry(switchCase);