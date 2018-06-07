var fs = require('fs'), path = require('path');

module.exports = function (options) {
    var inFile = String(options.in);
    var outFile = String(options.out);

    fs.readFile(inFile, function(err, data){
        if (err) throw err;
        var newData = processFile(data);
        console.log('Writing to ' + outFile);
        fs.writeFile(outFile, newData, function(err) {
            if (err) throw err;
        })
    });

    /**
     * Replaces all occurences of ${<some_env>} with environment variable or undefined
     * @param data contents of input file
     * @returns {string} string populated with environment variables
     */
    function processFile(data) {
        return String(data).replace(/\${(.+)}/, (e, pattern) => {
            return (process.env.hasOwnProperty(pattern)) ? process.env[pattern] : undefined;
        });
    }
};