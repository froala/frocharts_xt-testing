#!/bin/bash
dest="./tests/";
rm -rf "./japp_master_result.json";
for folder in $dest*;
do
    echo $folder;
    for subfolder in $folder"/"*;
    do
        echo $subfolder | awk -F\/ '{print $4}' > chartname;
        chart="$(cat chartname)";
        echo $subfolder;
        rm -rf $subfolder"/ref-images";
        rm -rf $subfolder"/snapshots";
        mkdir $subfolder"/ref-images";
        mkdir $subfolder"/snapshots";
        node bin/japp --config $subfolder/$chart"_legend_config.json" --save;
        node bin/japp --config $subfolder/$chart"_legend_config.json" --jsSourceRoot ./fc-versions/3.5.0/;
    done
done
rm -rf chartname;
