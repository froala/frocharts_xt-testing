var walk = require('walkdir'),
    fs = require('fs');

var paths = walk.sync(process.argv[2]);

// Create a folder named "merged-specs" and merge all spec files in to one 
fs.mkdir(process.argv[2] + "/merged-specs", function() {
    var mergedSpecs = "{";
    for (var i = 0; i < paths.length; i++) {
        if (paths[i].slice(-15) === "chartsSpec.json" && paths[i].slice(-28) !== "merged-specs/chartsSpec.json") {
            mergedSpecs += fs.readFileSync(paths[i]).slice(1, -1) + (",");
        }
    }
    mergedSpecs = mergedSpecs.trim().substring(0, mergedSpecs.length - 1) + "}";
    fs.writeFileSync(process.argv[2] + "merged-specs/chartsSpec.json", mergedSpecs);
});

// Create folder for ref-images and snapshots
fs.mkdir(process.argv[2] + "/merged-specs/ref-images", function() {});
fs.mkdir(process.argv[2] + "/merged-specs/snapshots", function() {});