var fs = require('fs')

var moveFrom = "../";

// Loop through all the files in the temp directory
fs.readdir( moveFrom, function( err, files ) {
        if( err ) {
            console.error( "Could not list the directory.", err );
        } 
        var importStmts = ''
        files.forEach( function( file, index ) {
            if (file === "uberbundle") {
                console.log("skipping ubder bundle")
            } else {
                var resolvedImport = parse("import '../../%s/src/index'", file)
                importStmts += resolvedImport + "\n"
                // console.log(resolvedImport)
            }
        })

        fs.writeFileSync('src/index.ts',importStmts) 

        console.log(importStmts)

})

function parse(str, arg) {
    return str.replace(/%s/g, function() {
        return arg;
    });
}