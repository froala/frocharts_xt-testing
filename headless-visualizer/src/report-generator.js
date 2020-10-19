var fs = require('fs'),
    path = require('path'),
    args = process.argv,
    dirName = args[2],
    dirStats,
    processDir;


processDir = function(dir) {
    var stats = fs.statSync(dir),
        dirFiles,
        i,
        subdirPath,
        subdirFileName,
        resultFile = 'japp_result.json',
        resultHTML = 'japp_result.html',
        matchFile = '/japp_match.html',
        mismatchFile = '/japp_mismatch.html',
        resultJson = {
            total: 0,
            passing: 0,
            failing: 0,
            dirs: {}
        },
        subdirResult,
        key,
        htmlStr = '',
        processedDir,
        processedDirs,
        nodeType,
        isLeaf;

    if (stats.isDirectory(dir)) {
        dirFiles = fs.readdirSync(dir);

        // detect if this directory is the leaf directory based on the presence of ref-images directory
        // also assuming that japp specs won't be in an intermediate directory.
        if (dirFiles.join('--').indexOf('ref-images') > 0) {
            return 'leaf';
        }
        else {
            for (i = dirFiles.length - 1; i >= 0; i-- ) {
                subdirFileName = dirFiles[i];
                if (!(/^\./.test(subdirFileName))) {// ignore hidden files/directories
                    subdirPath = path.resolve(dir, subdirFileName);
                    nodeType = processDir(subdirPath);

                    // get the result for this subdirPath
                    if (fs.existsSync(path.resolve(subdirPath, resultFile))) {
                        subdirResult = JSON.parse(fs.readFileSync(path.resolve(subdirPath, resultFile)));

                        // Compute the dir results
                        resultJson.total += subdirResult.total;
                        resultJson.passing += subdirResult.passing;
                        resultJson.failing += subdirResult.failing;
                        resultJson.dirs[subdirFileName] = {
                            total: subdirResult.total,
                            passing: subdirResult.passing,
                            failing: subdirResult.failing,
                            absolutePath: subdirPath,
                            relativePath: subdirFileName
                        };
                        if (nodeType === 'leaf') {
                            resultJson.dirs[subdirFileName].leaf = true
                        }
                    }
                }

            }
            // write dir results to the file
            fs.writeFileSync(path.resolve(dir, resultFile), JSON.stringify(resultJson, '', 4));

            // compute html for this directory
            processedDirs = resultJson.dirs;
            for (key in processedDirs) {
                processedDir = processedDirs[key];
                isLeaf = processedDir.leaf;
                // construct the table row for this dir
                htmlStr += '\n<tr>';
                htmlStr += '<td>' + (!isLeaf ? '<br/><a href="' + processedDir.relativePath + '/' + resultHTML + '">'+ key +'</a>': key) +'</td>';

                htmlStr += '<td><span style="font-size:14px;color:#666;">Total Tests</span><br/><span style="font-weight:bold;padding:5px;">' +  processedDir.total + '</span></td>';
                htmlStr += '<td><span style="font-size:14px;color:#666;">Passing</span><br/><span  style="font-weight:bold;color:#7cc576;padding:5px;">' + processedDir.passing + '</span></td>';
                htmlStr += '<td><span style="font-size:14px;color:#666;">Failing</span><br/><span style="font-weight:bold;color:#c57676;padding:5px;">' + processedDir.failing + '</span></td>';
                if (isLeaf) {
                   htmlStr += '<td>';
                   if (processedDir.passing && processedDir.failing) {
                       htmlStr += '<a href="' + processedDir.relativePath + matchFile + '" style="text-decoration:none;font-size:12px;color:#7cc576; border-right:1px dotted #333;padding-right:10px;margin-right:7px;">Match</a> ';
                   }
                   else if (processedDir.passing){
                        htmlStr += '<a href="' + processedDir.relativePath + matchFile + '" style="text-decoration:none;font-size:12px;color:#7cc576;">Match</a> ';
                   }
                   if (processedDir.failing) {
                       htmlStr += '<a href="' + processedDir.relativePath + mismatchFile + '" style="text-decoration:none;font-size:12px;color:#c57676;">Mismatch</a>';
                   }
                   htmlStr += '</td>';
                }
                htmlStr += '</tr>';

            }


            htmlStr = '<html><head><title>Japp results</title><style>td {border: solid 1px #ddd;border-style: solid none;padding: 10px;}td:first-child {border-left-style: solid;border-top-left-radius: 4px; border-bottom-left-radius: 4px}td:last-child {border-right-style: solid;border-bottom-right-radius: 4px; border-top-right-radius: 4px;}</style><head><body style="font-family:sans-serif;">'+
            '<div style="margin: 0 auto;width:900px;">'+
            '<header><div style="margin:15px 10px 20px 10px; border-bottom:1px solid #ddd; padding:10px;">'+
            '<span style="color: #007683;font-weight:bold;font-size:32px;">JAPP</span>'+
            '<span style="font-size:11px;color:#666;padding-left:4px;">Visual Regression Testing Results</span</div>'+
            '</header>'+
            '<div style="">'+
            '<div style="margin:0px 10px; padding-bottom: 10px; border-bottom:1px solid #999;font-size:16px;font-weight:bold;color:#666;">All Test Results</div>'+
            '<div style="margin:5px;">'+
            '<div style="display:inline-block; float:left; margin:5px ;"><span style="font-size:12px;color:#666;line-height:20px;">Total Tests </span><br/><span  style="ffont-weight:bold;font-size:30px;">'+ resultJson.total +'</span></div>'+
            '<div style="display:inline-block; float:left; margin:5px 5px 5px 30px;"><span style="font-size:12px;color:#666;line-height:20px;">Passing </span><br/><span style="font-weight:bold;font-size:30px;color:#7cc576;">'+ resultJson.passing +'</span></div>'+
            '<div style="display:inline-block; float:left; margin:5px 5px 5px 30px;"><span style="font-size:12px;color:#666;line-height:20px;">Failing </span><br/><span style="font-weight:bold;font-size:30px;color:#c57676;">'+ resultJson.failing +'</span></div>'+
            '</div>'+
            '<table style="clear:both;margin:30px 10px 10px 10px; width:98%;border-collapse: separate; border-spacing: 0 5px;">'+
            htmlStr + '</table></div></div></body></html>';
            fs.writeFileSync(path.resolve(dir, resultHTML), htmlStr);
        }
    }
};

processDir(dirName);
