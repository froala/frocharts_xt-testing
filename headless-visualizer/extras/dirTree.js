var fs = require('fs'),
    path = require('path'),
    dirToJson = require('dir-to-json');

dirToJson(process.argv[2], function(err, dirTree) {
    if (err) throw err;

    var levelWiseReporting = function(childObjectArray) {
        for (var i = 0; i < childObjectArray.length; i++) {
            if (childObjectArray[i].children){
              levelWiseReporting(childObjectArray[i].children);  
            } 
            else if (childObjectArray[i].name == "japp_result.json") {
            }
        }
    }
    levelWiseReporting(dirTree.children);
    fs.writeFileSync("dirTree.json", JSON.stringify(dirTree, null, 4));

});