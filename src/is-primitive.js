'use strict';

var isPrimitive = function (obj){
  return (
    typeof obj === 'boolean' ||
    typeof obj === 'number' ||
    typeof obj === 'string' ||
    typeof obj === 'symbol' ||
    obj === null ||
    obj === undefined
  );
};

module.exports = {
  isPrimitive: isPrimitive
};
