var fs = require('fs'), path = require('path'),
    envInjectFile = require('../env-inject-file'),
    chai = require('chai');

describe('cmdline', function () {
    it('should pass', function (done) {
        envInjectFile({ in: path.dirname(__filename) + '/in.yml', out:  path.dirname(__filename) + '/out.yml'});
        setTimeout(function (){
            fs.readFile(path.dirname(__filename) + '/out.yml', (err, out)=>{
                if (err) console.error(err);
                chai.expect(String(out)).to.equal('what: dummy placeholder');
                done();
            })
        }, 300);
    });
});