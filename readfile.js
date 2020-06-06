function getFile(file) {
    const fs = require('fs');
    let fileData = null;
    fs.readFile( __dirname + `/templates/${file}.html`, function(err, data){
        if (err) {
            throw err;
        }
        fileData = data;
    });
    return fileData;
}   

module.exports.getFile = getFile;