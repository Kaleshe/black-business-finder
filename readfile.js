function getFile(file) {
    const fs = require('fs');
    fs.readFile( __dirname + `/${file}.html`, function(err, data){
        if (err) {
            throw err;
        }
        console.log(data.toString());
    });
}   

module.exports.getFile = getFile;