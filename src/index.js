
const switchCase = (defaultCase, cases, variable) => {

    const caseToRun = cases.hasOwnProperty(variable) ? cases[variable] : defaultCase;
    
    if (typeof caseToRun === 'function') {
        return caseToRun(variable)
    } else {
        return caseToRun;
    }
};

function curry(fn, storedArgs = []) {
    return function(...args) {
        if (storedArgs.length + args.length >= fn.length) {
            return fn(...storedArgs, ...args);
        } else {
            return curry(fn, [...storedArgs, ...args])
        }
    }
}

export default curry(switchCase);