// Assume FusionCharts and Resemble to be initialized
// in the global context in which these methods will execute.

var jappPageScriptInterface = {
	imageGenerator: function (specId, refImage, constructorOptions, userActions) {

		// console.log("Generator");
		// console.log(item);
		// console.log(refImage);
		// console.log(options);
		// console.log("---------");
		// console.log(userActions);
		//
		//console.log("image generation")
		//console.log(document.getElementById("diffHolder"));

		document.getElementById("diffHolder").innerHTML = "";

		if (typeof RChart !== "undefined" && RChart.dispose) {
			RChart.dispose();
		}

		constructorOptions.renderAt = "chart-container";

		var RChart = new FusionCharts(constructorOptions);

		var timer = setTimeout(function () {
			console.log(['!noclick!', specId].join(","));
		}, 8000);

		if (false/* userActions */) {

			RChart.addEventListener('rendercomplete', function () {
				var i = 0,
					action,
					ii = userActions.length;

				for (; i < ii; i += 1) {
					action = userActions[i];
					console.log(['!action!', action.type, action.x, action.y].join(","));
				}
			});

			RChart.addEventListener('chartclick', function (imageSuffix) {
				return function () {
						console.log(['!click!', imageSuffix, refImage].join(","));
				};
			}(specId));
		}
		else {

			RChart.addEventListener('rendercomplete', function (imageSuffix) {
				return function () {
					clearTimeout(timer);
					setTimeout (function () {
						console.log(['!click!', imageSuffix, refImage].join(","));
					}, 100);
				};
			}(specId));
		}
		RChart.render();
	},

	imageComparer: function (url1, url2, threshold, specFilePath, specId, savePathLeading) {
		resemble(url1).compareTo(url2).onComplete(function (data) {
			console.log(["deleteSnapshot", url1].join(","));
			var mmp = Number(data.misMatchPercentage);
			if (mmp <= threshold) {
				console.log(["__exitPhantomMatch__", specId, specFilePath, data.misMatchPercentage, url1, url2, savePathLeading].join(","));
			}
			else {
				var diffImg = new Image();
				diffImg.src = data.getImageDataUrl();

				if (typeof RChart !== "undefined" && RChart.dispose) {
					RChart.dispose();
				}

				document.getElementById("chart-container").innerHTML = "";

				diffImg.onload = function () {
					console.log(["__exitPhantomMismatch__", specId, specFilePath, data.misMatchPercentage, url1, url2, savePathLeading].join(","));
				};

				document.getElementById("diffHolder").appendChild(diffImg);
			}
		});
	}
};