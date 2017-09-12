# fp-switch

This is functional switch! This is tiny and curried and also awesome.

Example
```
import switchCase from 'fp-switch';

switchCase(defaultCase, cases, variable);
```
if `cases[variable]` is exist then if it's a function result will be equal `cases[variable](variable)`, if `cases[variable]` is not function then `cases[variable]` will be returned as is.

If `cases[variable]` is not exist then similar logic applied to `defaultCase`. If defaultCase is function then `defaultCase(variable)` will be returned and `defaultCase` otherwise.

More practical examples:

Currying in iterating functions.
```
import switchCase from 'fp-switch';

const digits = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine'
};

const getDigitString = switchCase(-1, digits)
const convertDigitsToString = map(getDigitString);
```

Switches with predefined default behavior
```
const identitySwitch = switchCase(v => v);
const nullSwitch = switchCase(null);
const undefSwitch = switchCase(undefined);
const strictSwitch = switchCase(() => throw new Error('no case found'));
```

To know why switch statement sucks and why you need functional switch read [my article on medium](https://medium.com/@Crazymax101/another-one-article-about-functional-switch-cb62d6ff22fe)