app.controller('testController2',function ($scope, $http, $interval, $rootScope, $location ) { 

    	$scope.getRequest = function($url,$param){

            if($param==null)
                $param = {};

            return $http({            
                method: 'get',
                url: url_for_data+$url,
                params: $param,
                contentType: "application/json"
            });

        }
		
        $scope.data_te9 = new Array;
        $scope.data_tss = new Array;
        $scope.data_ts9 = new Array;
        $scope.data_actv_rev = new Array;
        $scope.data_upgrade = new Array;
        $scope.data_revenue = new Array;			
        $scope.day_wise_revenue = new Array;
        $scope.data_billable = new Array;
        $scope.data_last_7_days = new Array;
        $scope.expression = false;
        
        $scope.predict_new = 0;
        $scope.predict_tss = 0;
        $scope.predict_actVal = 0.0;
        $scope.first_time_flag = 0;

        var param_arr = {};
        var myData = {"error_flag": 0, "new_count": 31661, "last_days_count": [{"label": "Nov 2017", "value": 21744}, {"label": "Dec 2017", "value": 21843}, {"label": "Jan 2018", "value": 20791}, {"label": "Feb 2018", "value": 10870}], "target_count": 0};

        var myZone = {"error_flag": 0, "category": ["APAC", "East", "MENA", "North", "ROW", "SAARC", "South", "SSA", "West"], "sub_category": ["New", "TSS"], "data": [{"New": 0.13}, {"TSS": 0.08}, {"New": 5.44}, {"TSS": 1.63}, {"New": 8.97}, {"TSS": 2.15}, {"New": 7.12}, {"TSS": 2.93}, {"New": 0.01}, {"TSS": 0.02}, {"New": 0.37}, {"TSS": 0.08}, {"New": 9.3}, {"TSS": 5.26}, {"New": 0.96}, {"TSS": 0.26}, {"New": 10.7}, {"TSS": 5.0}]};
		
        $scope.FetchAllData = function(){

            $scope.UpdateTE9Data(myData);                                

                $scope.UpdateTSSData(myData);                                
            
                $scope.UpdateTS9Data(myData);                                

                $scope.UpdateUpgradeData(myData);                                

                $scope.UpdateActvValueData(myData);                                

                $scope.UpdateRevenueData(myData);                                
            
                $scope.UpdateZoneWiseValueData(myZone);                                

            
            $('[data-toggle="tooltip"]').tooltip();
        }
        
        $scope.UpdateTE9Data = function(jsonData){
            $scope.data_te9 = jsonData;
            $scope.data_te9['percentage'] = CalculatePercentage(jsonData['new_count'], jsonData['target_count']);
            $scope.data_te9['new_count'] = NumberFormat(jsonData['new_count']);
            $scope.data_te9['target_count'] = NumberFormat(jsonData['target_count']);
            RenderTE9SparkLine('divTE9SparkLine', GetSKUColorCode('new'), jsonData['last_days_count']);
        }

        $scope.UpdateTSSData = function(jsonData){
            $scope.data_tss = jsonData;
            $scope.data_tss['percentage'] = CalculatePercentage(jsonData['new_count'], jsonData['target_count']);
            $scope.data_tss['new_count'] = NumberFormat(jsonData['new_count']);
            $scope.data_tss['target_count'] = NumberFormat(jsonData['target_count']);
            RenderTE9SparkLine('divTSSSparkLine', GetSKUColorCode('tss'), jsonData['last_days_count']);
        }

        $scope.UpdateTS9Data = function(jsonData){
            $scope.data_ts9 = jsonData;
            $scope.data_ts9['percentage'] = CalculatePercentage(jsonData['new_count'], jsonData['target_count']);
            $scope.data_ts9['new_count'] = NumberFormat(jsonData['new_count']);
            $scope.data_ts9['target_count'] = NumberFormat(jsonData['target_count']);
            RenderTE9SparkLine('divTS9SparkLine', GetSKUColorCode('ts9'), jsonData['last_days_count']);
        }

        $scope.UpdateUpgradeData = function(jsonData){
            $scope.data_upgrade = jsonData;
            $scope.data_upgrade['percentage'] = CalculatePercentage(jsonData['new_count'], jsonData['target_count']);
            $scope.data_upgrade['new_count'] = NumberFormat(jsonData['new_count']);
            $scope.data_upgrade['target_count'] = NumberFormat(jsonData['target_count']);
            RenderTE9SparkLine('divUpgradeSparkLine', GetSKUColorCode('upgrade'), jsonData['last_days_count']);
        }

        $scope.UpdateActvValueData = function(jsonData){
            $scope.data_actv_rev = jsonData;
            $scope.data_actv_rev['percentage'] = CalculatePercentage(jsonData['new_count'], jsonData['target_count']);
            $scope.data_actv_rev['new_count'] = NumberFormat(jsonData['new_count']);
            $scope.data_actv_rev['target_count'] = NumberFormat(jsonData['target_count']);            
            RenderTE9SparkLine('divActvnValueSparkLine', GetSKUColorCode('actvn'), jsonData['last_days_count']);
        }

        $scope.UpdateRevenueData = function(jsonData){
            $scope.data_revenue = jsonData;
            $scope.data_revenue['percentage'] = CalculatePercentage(jsonData['new_count'], jsonData['target_count']);
            $scope.data_revenue['new_count'] = NumberFormat(jsonData['new_count']);
            $scope.data_revenue['target_count'] = NumberFormat(jsonData['target_count']);            
            RenderTE9SparkLine('divRevenueSparkLine', GetSKUColorCode('revenue'), jsonData['last_days_count']);
        }
        
        
        $scope.UpdateZoneWiseValueData = function(jsonData){
            var cat_arr = [];
            var dataset_arr = [];
            
            CreateJSONForChart(jsonData, cat_arr, dataset_arr );
            RenderZoneWiseEarningChart(cat_arr, dataset_arr);
        }

        $scope.FetchAllData();
			
    });