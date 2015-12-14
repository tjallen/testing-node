var foo = "foooo";

// some example exports
// module.exports.foo = foo;
// module.exports.bar = 'bar';

// export using a function to uverride the exports object

module.exports = function() {
	console.log('hello from module2');
};