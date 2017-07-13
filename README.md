## is-primitive
A [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) is data that is not an object and has no methods.  

`is-primitive` is a JavaScript method that allows determine if a datatype is `primitive` or not.

[JavaScript has 6 primitive datatypes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures):
* String
* Number
* Null
* Undefined
* Boolean
* Symbol

More information about [JavaScript Primitive Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

### How to install
```sh
npm install is-primitive-type
```
### How to test
```sh
npm run test
```
### Usage
```js
var isPrimitive = require('is-primitive-type');

isPrimitive(null);
// returns true

isPrimitive([1, 2, 3]);
// returns false

isPrimitive({ a: 1, b: 2, c: 3 });
// returns false
```
