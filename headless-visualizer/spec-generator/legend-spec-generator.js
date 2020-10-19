//The main script file to generate legend specific chart-specs for JAPP
var fs = require('fs'),
	path = require('path'),
	system = require('system'),
	mkdirp = require('mkdirp'),
	args = system && system.args,
	//base / root data directory
	baseDataDir,
	//base output directory
	baseOutputDir,
	//FusionChart version to generate ref images and to compare
	fc_ref_version,
	fc_comp_version,
	japp_threshold = '0',
	//Major test string
	TEST_TYPE = 'legend',
	generator,
	RANGE_DELIMITER = '-';

/*
 * Primary object to execute generation of JAPP spec files.
 */ 
generator = (function() {

	//private scope

	gen = function() {
		var content = args && fs.readFileSync( path.resolve(args[2])),
			config,
			globals,
			num_of_types = 0,
			type_count = 0;

		try {
			config = this.config = content && JSON.parse(content);
			globals = config && config.globals,
			//assign global values
			baseDataDir = globals && globals.base_data_dir;
			baseOutputDir = globals && globals.base_output_dir;
			fc_ref_version = globals && globals.fc_ref_version;
			fc_comp_version = globals && globals.fc_comp_version;
			japp_threshold = globals && globals.japp_config_threshold || japp_threshold;

			this.chart_config = config && config.setup;
			this.attributes = config && config. attributes;
			this.forcedAttributes = config && config.forced_attributes;
		}
		catch(error){
			this.log('Error reading config file', true);
		}
			
	};

	gen.prototype = {

		/*
		 * extend function takes two object and update oObj with
		 * all the properties of the iObj and return the updated
		 * oObj.
		 * Note: This at present is a single level recursion
		 */
		extend: function(oObj, iObj) {
			for(var prop in iObj) {
				if(iObj.hasOwnProperty(prop)){
					//Overwrite if already exist.
					oObj[prop] = iObj[prop];
				}
			}

			//return the updated obj
			return oObj;
		},

		/*
		 * Logs errors to the console and exit process
		 * if abort instruction is true.
		 */
		log: function(msg, abort) {
			var logType = typeof msg,
				prop;
			console.log("------- Error ---------");
			if(logType === 'object'){
				for(prop in msg){
					console.log(prop+' = '+msg[prop]);
				}
			}else{
				console.log("Error: - ");
				console.log(msg);
			}
			console.log("------- ===== ---------");

			if(abort){
				process.exit();
			}
		},

		/*
		 * returns a random hexadecimal color value.
		 */
		getRandomColor: function() {
			return '#'+Math.floor(Math.random()*16777215).toString(16);
		},

		/*
		 * apply attributes iterates over the attributes object and 
		 * create possible combinations for each chart type.
		 */
		applyAttributes: function(chartType, baseData) {
			var generator = this,
				attributes = generator.attributes,
				//Check whether we have any forced attributes to set
				forcedAttrb = generator && generator.forcedAttributes,
				commonAttrib = forcedAttrb && forcedAttrb['all'],
				chartForcedAttrib = forcedAttrb && forcedAttrb[chartType.toLowerCase()],
				attr,
				attrNames,
				attrTypes,
				valueRange,
				attrObj,
				delim = '_',
				combinations = [];

			for(attr in attributes) {
				if(attributes.hasOwnProperty(attr)) {
					attrObj = attributes[attr];
					attrNames = attrObj && attrObj.names;
					attrTypes = attrObj && attrObj.type;
					valueRange = attrObj && attrObj.range;

					attrNames.forEach(function(attrName, index) {
						
						var type = attrTypes[index],
							values;

						switch(type.toLowerCase()) {
							case 'boolean' :
								values = [0, 1];
								break;
							case 'color' :
								values = [generator.getRandomColor()];
								break;
							case 'string' :
								values = valueRange[index].split(RANGE_DELIMITER);
								break;
							case 'number' :
								values = valueRange[index].split(RANGE_DELIMITER);
								break;
							default:
								generator.log('Type `'+ type + '` can not be recognised.');
						}

						values && values.forEach(function(val) {
							//for each new set of attributes make a copy of the base data
							var cloneBaseData = JSON.parse(JSON.stringify(baseData, null, 4)),
								cloneChartAttr = cloneBaseData && cloneBaseData.chart;

							//Extend if require
							commonAttrib && generator.extend(cloneChartAttr, commonAttrib);
							chartForcedAttrib && generator.extend(cloneChartAttr, chartForcedAttrib);

							cloneChartAttr[attrName] = val.toString();
							//push to the final combination array
							combinations.push({
								'spec_item_name': [attr, attrName, val].join(delim),
								'desc': "creating "+attr+" with "+ attrName+" as "+val+".",
								data: cloneBaseData
							});
						});
					});
				}
			}

			return combinations;
		},

		/*
		 * generate is the starting function of the JAPP spec generation 
		 * process. It iterates over each chart type and then goes for
		 * applying attributes combinations.
		 */
		generate: function(){
			var generator = this,
				chart_config = generator.chart_config,
				configObj,
				baseDataPath,
				baseJSON,
				chartTypes,
				type,
				totalCombinations = [],
				outputPath;
				
			for(type in chart_config) {
				if(chart_config.hasOwnProperty(type)) {

					configObj = chart_config[type];
					baseDataPath = configObj && configObj.base_data;
					baseJSON = baseDataPath && this.getBaseData(baseDataPath);
					chartTypes = configObj && configObj.chart_types; 

					//if baseJSON and chartTypes are found go for applying attribute
					//combination or else move to next.
					if(baseJSON && chartTypes) {
						chartTypes.forEach(function(type){
							//apply attributes combinations
							totalCombinations = generator.applyAttributes(type, baseJSON);
							//Create the final spec with the generated combinations
							generator.createJAPPSpecs(type, totalCombinations);
						});
					}
				}
			}
		},

		/*
		 * createJAPPSetup creats the required folders defined for
		 * JAPP and goes for creating spec files.
		 */
		createJAPPSetup: function(name, oPath) {
			var folders = [oPath+"snapshots/", oPath+"ref-images/"],
				jaap_config_data = {
				    "maxThreads": "1",
				    "specSource": oPath,
				    "jsSourceRoot": "./fc-versions/"+fc_ref_version+'/',
				    "dataSourceFolder": "./",
				    "refImagesRoot": "./",
				    "savePath": oPath+"ref-images/",
				    "snapshotsPath": oPath+"snapshots/",
				    "threshold": japp_threshold,
				    "mapsPathPrefix": "maps/",

				    "srcFileArray": ["fusioncharts.js"]
				};

			folders.forEach(function(folderPath) {
				var pathExists = fs.existsSync(folderPath);

				!pathExists && mkdirp.sync(folderPath);
			});

			this.writeFileInSync(JSON.stringify(jaap_config_data, null, 4), oPath, name);
		},

		/*
		 * createJAPPSpec creates the required JAPP config and Spec
		 * files.
		 */
		createJAPPSpecs: function(chartType, combinations) {
			var specName,
				generator = this,
				allSpec = {},
				defChrtW = '450',
				defChrtH = '300',
				defDataFrmt = 'json',
				totalJSONStr = '',
				outputPath = './'+baseOutputDir+'/'+chartType+'/';

			combinations.forEach(function(cObj){
				specName = cObj.spec_item_name;
                                if ( (specName.split(' ')).length > 1) {
                                    specName = specName.split(' ').join('_');
				}
                                specName = specName.replace(/#/g, '_');
                                allSpec[specName] = {
					'description': cObj.desc,
					'options': {
						'type': chartType,
						'width': defChrtW,
						'height': defChrtH,
						'dataFormat': defDataFrmt,
						'dataSource': cObj.data
					},
					'refimage': outputPath+'ref-images/'+specName+'-snapshot.png',
					'id': specName
				};

			});

			//create the required folder structure for JAPP
			generator.createJAPPSetup(chartType+'_'+TEST_TYPE+'_config.json', outputPath);

			totalJSONStr = JSON.stringify(allSpec, null, 4);

			this.writeFileInSync(totalJSONStr, outputPath);

		},

		/*
		 * writeFileInSync wrties a file in synchronous mode
		 * @todo: Need to encompass all exceptions 
		 */
		writeFileInSync: function(data, opath, fileName) {
			
			var outputPath = opath || baseOutputDir,
				pathExists = fs.existsSync(outputPath),
				rOutputPath = pathExists && path.resolve(outputPath),
				stat = rOutputPath && fs.statSync(rOutputPath),
				isDirectory = stat && stat.isDirectory(),
				isFile = stat && stat.isFile(),
				defSpecFileName = fileName || 'chartsSpec.json';

			//in case the path does not exist create one
			if(!pathExists) {
				mkdirp.sync(outputPath);
				rOutputPath = path.resolve(outputPath);
			}
			
			fs.writeFileSync(rOutputPath+'/'+defSpecFileName, data);
		},

		/*
		 * getBaseData function reads a JSON formatted data file
		 * and retrun the parsed object.
		 */
		getBaseData: function(pathUrl) {
			var rPath = pathUrl && path.resolve(pathUrl),
				content;

			try {
				content = rPath && JSON.parse( fs.readFileSync(rPath));
			}
			catch(e) {
				this.log("Error reading / parsing base data : "+ pathUrl);
			}

			return content;
		},

	};
	gen.prototype.constructor = gen;

	return gen;
}());

//Start the process
var g = new generator();
g.generate();
