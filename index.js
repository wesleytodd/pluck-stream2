var through2 = require('through2');

module.exports = function pluckStream (prop, flush) {
	return through2.obj(function (chunk, enc, done) {
		if (chunk[prop]) {
			this.push(chunk[prop]);
		}
		done();
	}, flush);
};
