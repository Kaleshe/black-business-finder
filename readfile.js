function getFile(file) {
    const fs = require('fs');
    fs.readFile( __dirname + `/templates/${file}.html`, function(err, data){
        if (err) {
            throw err;
        }
        let file = data.toString();
        return file;
    });
}   

module.exports.getFile = getFile;