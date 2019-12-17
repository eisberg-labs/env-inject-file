var fs = require('fs'), path = require('path'),
    exec = require('child_process').exec,
    chai = require('chai');

describe('cmdline', function () {
    it('should pass', function (done) {
        exec('./bin/env-inject-file.js --in test/in.yml --out test/out2.yml', function (error, stdout, stderr) {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });

        setTimeout(function (){
            fs.readFile(path.dirname(__filename) + '/out2.yml', function (err, out) {
                if (err) console.error(err);
                chai.expect(String(out)).to.equal('what: dummy placeholder');
                done();
            })
        }, 300);
    });
});