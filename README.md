# xt-testing

This repository contains all modules required for the FusionCharts Automation
Testing Suite. It creates an abstraction layer on top of all the modules,
which allows to run each module separately or in a combination.  

----------------------
Command Line Arguments
----------------------

Example:  node run.js -b 3.5.0 -t 3.6.0 -c ie -m gvgl

-b | -t | -c | -m

    -b : specifies the baseline version of the product to compare with.
    -t : specifies the test version of the product to test.
    -c : specifies the browser to test on.
    -m : specifies the module to run for testing. 
    	 gv = gui-visualizer ; gl = gui-listener ; 
    	 hv = headless-visualizer ; hl = headless-listener ;

The inputs baseline version and test version should be the same as the folder
name of the product in the root fc-versions folder.

----------------
Folder Structure
----------------

- assets : contains template for the final result html output and dependency 
		   js of client side socketio.

- fc-versions : contains the product versions which have to be tested.

- gui-listener : contains the browser based events and api testing module.

- gui-visualizer : contains the browser based attribute testing module.

- headless-listener : contains the PhantomJS based events and api testing module.

- headless-visualizer : contains the PhantomJS based attribute testing module.

- results : contains the final archive of a smoke test run.

- scripts : contains helper scripts like report-generator which combines
			reports of attribute testing to each folder level.

- templates : contains the template for creating report htmls.

-------
Modules
-------

- gui-visualizer

This module is used for visual comparison testing of two versions of fusioncharts.
It uses selenium-standalone npm package to launch the selenium server and webdriverio
for nodejs bindings of selenium server to control the client. Express is used for 
hosting the webpage and resemblejs is used for image comparison. It opens the chart 
webpage created using chart data from the test case in the browser with the baseline 
version, takes a screenshot and saves it. Performs the same actions using test version 
of fc. Then compares these two screenshots with a pixel to pixel comparison. Any mismatch 
is marked as a failure. After running through all the test cases that have been defined,
it calls the report generator script which traverses through all the folders and 
generates reports at each level. A master report is also generated at the root level.

- gui-listener

This module is used for events and api testing one version of fusioncharts.
It uses selenium-standalone npm package to launch the selenium server and webdriverio
for nodejs bindings of selenium server to control the client. Express is used for 
hosting the webpage and socketio is used for communication between client and server. 
It opens the chart webpage created with the test version and conditions provided in 
the test case spec. The server is made to expect a certain set of params which are 
emitted by the browser client using socketio. The params are then checked with expected
values and a result report is generated marking test cases as passed or failed.

- headless-visualizer

It works almost exactly as the gui version except that it uses PhantomJS to emulate the
browser instead of using selenium.

- headless-listener

It works almost exactly as the gui version except that it uses PhantomJS to emulate the
browser instead of using selenium.

---------------------------
How our automation will run
----------------------------


Here is how we can run the automation from our system. 

To start with, below are the prerequisites that need to be installed in the system. Once installed we need to follow the steps to run the automated tests as explained thereafter.
### Prerequisite: ###
* Node and npm
* JAVA 8 or above
* Selenium standalone server

* Setup localhost server (like MAMP, LAMP)
  
### Steps to run automation: ###
* Setup localhost and point it to your working folder.
* Clone the xt-testing repository in your working folder.
  ![alt text](images/clone.png)
* Through terminal go to the folder xt-testing and run the command npm install . This will help to install all the required library written in package.json file.
  ![alt text](images/install.png)
* Need to change configuration in config.json file to run the automation. You can find the file in xt-testing folder.
	Following changes in config.json 

i. Mention the path of xt-testing in ipGV

`"ipGV": "http://localhost/working-folder/xt-testing"`
	
    
ii. Mention the path of xt-testing in resultHost
		
`"resultHost": "http://localhost/working-folder/xt-testing"`


iii.  
```	
"filterCharts": {
        "includeOrExclude": "1",
        "charts": "column2d,msline"
 }
```

  If we set includeOrExclude value as 1, then only the test-cases of charts mentioned in above charts object will run and when we set includeOrExclude value 0 then the test-cases excluding the mentioned charts will run. If we do not mention any chart names in the charts object, then, all charts will run in automation.

iv.
```
"nodeConfig":[{
        "host":"localhost",// This can be your machine IP
        "port":"4444",
        "client":"chrome",
        "browserName":"chrome"
    },
    {
        "host":"localhost",// This can be your machine IP
        "port":"4444",
        "client":"firefox",
        "browserName":"firefox"
    },
    {
        "host":"localhost",// This can be your machine IP
        "port":"4444",
        "client":"internet explorer",
        "browserName":"IE11"
}]
```

If you have all three browsers in your machine, then you can run the test-cases simultaneously in three browsers. 

`host:` you need to specify your machine  IP or localhost.  
`port:` Selenium will run in default port 4444.  
`client:`  you need to mention the browser name where your test-cases will run.  
`browserName:` It is required to identify the results on which browser the test-cases have run.


v. 

`"specs": "tests/smoke-test"`


`specs:`  It starts with tests folder always and then you can give your folder name according to your requirements. This test folder is in gui-visualizer folder where all test cases are saved. 


* Provide the base(stable) and target(under development) FusionCharts build files to `pathTo/xt-testing/base-version` and `pathTo/xt-testing/target-version` respectively.

* Start the selenium server with the command `selenium-standalone start`.
  ![alt text](images/selenium-standalone-start.png)

* Go to the terminal and change your directory to ‘xt-testing’ and run `node run.js` to initiate the automation.
  ![alt text](images/node-run.png)

* The results are generated in the folder which was specified to specs in config.json separately for each browser.

----------------------------
### Selenium-Grid :###
Steps to run in Grid :
----------------------------

Use one machine as a hub and run the command

`selenium-standalone start -- -role hub`
  ![alt text](images/hub.png)


Any machine(nodes) which you want to connect with the hub machine, needs to run the below command to register in hub.

`selenium-standalone start -- -role node -hub http://IP-of-Hub:4444/grid/register -port 5556`
  ![alt text](images/node.png)

Here we need to specify the IP of the hub after “http://” and the port number according to the availability of the port.


To run the test cases in different machines with different browsers we need to change the nodeConfig object in config.json file

```	
"nodeConfig":[{
        "host":"192.168.2.122",// IP of any node machine
        "port":"4566", // Port of that machine where selenium will run and should mention the port in selenium command
        "client":"chrome",
        "browserName":"chrome"
    },
    {
        "host":"192.168.2.23",// IP of any node machine
        "port":"5566",       // Port of that machine where selenium will run and should mention the port in selenium command
        "client":"firefox",
        "browserName":"firefox"
    },
    {
        "host":"192.168.2.45",// IP of any node machine
        "port":"6566",        // // Port of that machine where selenium will run and should mention the port in selenium command
        "client":"internet explorer",
        "browserName":"IE11"
}]
```