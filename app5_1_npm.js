
const _loadash = require('lodash');
const items = [1, [2, [3, [4,[5]]]]];

console.log(_loadash.flattenDeep(items));
