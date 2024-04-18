export const config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.
    runner: 'local',
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // of the configuration file being run.
    //
    // The specs are defined as an array of spec files (optionally using wildcards
    // that will be expanded). The test for each spec file will be run in a separate
    // worker process. In order to have a group of spec files run in the same worker
    // process simply enclose them in an array within the specs array.
    //
    // The path of the spec files will be resolved relative from the directory of
    // of the config file unless it's absolute.
    //
    specs: [
        './test/specs/**/*.js'
    ],
    suites: {
        login: [
            [
                './test/specs/login.e2e.js',
            ]
        ],
        logout: [
            [
                './test/specs/login.e2e.js',
                './test/specs/logout.e2e.js',
            ]
        ],
        account: [
            [
                './test/specs/login.e2e.js',
                './test/specs/account.e2e.js',
            ]

        ],

        sidebar: [
            [
                './test/specs/login.e2e.js',
                './test/specs/sidebar.e2e.js',
            ]
        ],

        explore: [
            [
                './test/specs/login.e2e.js',
                './test/specs/explore.e2e.js',
            ]
        ],
        learn: [
            [
                './test/specs/login.e2e.js',
                './test/specs/learn.e2e.js',
            ]
        ],
        welcomeCourse: [
            [
                './test/specs/login.e2e.js',
                './test/specs/course-welcomeCourse.e2e.js',
                './test/specs/logout.e2e.js',
            ]
        ],
        cybercrimeCourse: [
            [
                './test/specs/login.e2e.js',
                './test/specs/course-cybercrime.e2e.js',
                 './test/specs/logout.e2e.js',
            ]
        ],

        hackersCourse: [
            [
                './test/specs/login.e2e.js',
                './test/specs/course-hackers.e2e.js',
                './test/specs/logout.e2e.js',
            ]
        ],
        darkWebCourse: [
            [
                './test/specs/login.e2e.js',
                './test/specs/course-darkWeb.e2e.js',
                './test/specs/logout.e2e.js',
                
            ]
        ],
        whyPasswordsCourse: [
            [
                './test/specs/login.e2e.js',
                './test/specs/course-whypassword.e2e.js',
                './test/specs/logout.e2e.js',

            ]
        ],
        hackers2FACourse: [
            [
                './test/specs/login.e2e.js',
                './test/specs/course-hackers2FA.e2e.js',
                './test/specs/logout.e2e.js',

            ]
        ],
        safeSocial: [
            [
                './test/specs/login.e2e.js',
                './test/specs/course-safeSocials.e2e.js',
                './test/specs/logout.e2e.js',

            ]
        ],
        emailSafetyCourse: [
            [
                './test/specs/login.e2e.js',
                './test/specs/course-emailSafety.e2e.js',
                './test/specs/logout.e2e.js',

            ]
        ],
        onlineSafetyCourse: [
            [
                './test/specs/login.e2e.js',
                './test/specs/course-onlineSafety.e2e.js',
                './test/specs/logout.e2e.js',

            ]
        ],
        mobileSafetyCourse: [
            [
                './test/specs/login.e2e.js',
                './test/specs/course-mobileSafety.e2e.js',
                './test/specs/logout.e2e.js',

            ]
        ],
        SafeMessagingTextingCourse: [
            [
                './test/specs/login.e2e.js',
                './test/specs/course-selfmessagingandtexting.e2e.js',
                './test/specs/logout.e2e.js',

            ]
        ],
        Ransomware:[
            [
                './test/specs/login.e2e.js',
                './test/specs/course-Ransomware.e2e.js',
                './test/specs/logout.e2e.js',

            ]
         ],
         WhatisSocialEngineering:[
            [
                './test/specs/login.e2e.js',
                './test/specs/course-WhatisSocialEngineering.e2e.js',
                './test/specs/logout.e2e.js',

            ]
         ],
        HowMalwareWorks:[
            [
                './test/specs/login.e2e.js',
                './test/specs/course-HowMalwareWorks.e2e.js',
                './test/specs/logout.e2e.js',

            ]
            

        ],
        ManyKindsofMalware:[
            [
                './test/specs/login.e2e.js',
                './test/specs/course-ManyKindsofMalware.e2e.js',
                './test/specs/logout.e2e.js',

            ]
            

        ],
        DataBreaches:[
            [
                './test/specs/login.e2e.js',
                './test/specs/course-DataBreaches.e2e.js',
                './test/specs/logout.e2e.js',

            ]
            

        ],
        APIandnationstatethreat:[
            [
                './test/specs/login.e2e.js',
                './test/specs/course-APIandnationstatethreat.e2e.js',
                './test/specs/logout.e2e.js',

            ]
            

        ],
        OnlinePayment:[
            [
                './test/specs/login.e2e.js',
                './test/specs/course-OnlinePayment.e2e.js',
                './test/specs/logout.e2e.js',

            ]
            

        ],
        PhishingQuick:[
            [
                './test/specs/login.e2e.js',
                './test/specs/course-PhishingQuick.e2e.js',
                './test/specs/logout.e2e.js',

            ]
            

        ],
        MalwareEverywhere:[
            [
                './test/specs/login.e2e.js',
                './test/specs/course-MalwareEverywhere.e2e.js',
                './test/specs/logout.e2e.js',

            ]
            

        ],
        PhishingDanger:[
            [
                './test/specs/login.e2e.js',
                './test/specs/course-PhishingDanger.e2e.js',
                './test/specs/logout.e2e.js',

            ]
            

        ],
        phishingEmail:[
            [
                './test/specs/login.e2e.js',
                './test/specs/course-phishingEmail.e2e.js',
                './test/specs/logout.e2e.js',

            ]
            

        ],
        whatsUpWithPhishing:[
            [
                './test/specs/login.e2e.js',
                './test/specs/course-whatsUpWithPhishing.e2e.js',
                './test/specs/logout.e2e.js',

            ]
            

        ],
        CloudandSharing:[
            [
                './test/specs/login.e2e.js',
                './test/specs/course-CloudandSharing.e2e.js',
                './test/specs/logout.e2e.js',

            ]
            

        ],
        SocialMediaThreats:[
            [
                './test/specs/login.e2e.js',
                './test/specs/course-SocielMediaThreats.e2e.js',
                './test/specs/logout.e2e.js',

            ]
            

        ],
        HowSocialEngineeringWorks:[
            [
                './test/specs/login.e2e.js',
                './test/specs/course-HowSocialEngineeringWorks.e2e.js',
                './test/specs/logout.e2e.js',

            ]           

        ],
        safemessageandtexting:[
            [
                './test/specs/login.e2e.js',
                './test/specs/course-safetyTexting.e2e.js',
                './test/specs/logout.e2e.js',

            ]           

        ],
        recap:[
            [
                './test/specs/login.e2e.js',
                './test/specs/course-recap.e2e.js',
                './test/specs/logout.e2e.js',

            ]           

        ],
        

        allCourses: [
            [
                './test/specs/login.e2e.js',
                './test/specs/course-welcomeCourse.e2e.js',
                './test/specs/course-cybercrime.e2e.js',
                './test/specs/course-hackers.e2e.js',
                './test/specs/course-darkWeb.e2e.js',
                './test/specs/course-whypassword.e2e.js',
                './test/specs/course-hackers2FA.e2e.js',
                './test/specs/course-emailSafety.e2e.js',
                './test/specs/course-onlineSafety.e2e.js',
                './test/specs/course-mobileSafety.e2e.js',
                './test/specs/logout.e2e.js',

            ]
        ],
       
        regression: [
            [
                './test/specs/login.e2e.js',
                './test/specs/sidebar.e2e.js',
                './test/specs/explore.e2e.js',
                './test/specs/account.e2e.js',
                './test/specs/learn.e2e.js',
                './test/specs/course-welcomeCourse.e2e.js',
                './test/specs/course-cybercrime.e2e.js',
                './test/specs/course-hackers.e2e.js',
                './test/specs/course-darkWeb.e2e.js',
                './test/specs/course-whypassword.e2e.js',
                './test/specs/course-hackers2FA.e2e.js',
                './test/specs/course-emailSafety.e2e.js',
                './test/specs/course-onlineSafety.e2e.js',
                './test/specs/course-mobileSafety.e2e.js',
                './test/specs/course-safemessageandtexting.e2e.js',
                './test/specs/course-safeSocials.e2e.js',
                './test/specs/course-recap.e2e.js',
                './test/specs/course-whatsUpWithPhishing.e2e.js',
                './test/specs/course-phishingEmail.e2e.js',
                './test/specs/course-phishingDanger.e2e.js',
                './test/specs/course-phishingQuick.e2e.js',
                './test/specs/course-malwareEverywhere.e2e.js',
                './test/specs/course-HowMalwareWorks.e2e.js',
                './test/specs/course-Ransomware.e2e.js',
                './test/specs/course-ManyKindsofMalware.e2e.js',
                './test/specs/course-WhatisSocialEngineering.e2e.js',
                './test/specs/course-DataBreaches.e2e.js',
                './test/specs/course-APIandnationstatetreat.e2e.js',
                './test/specs/course-OnlinePayment.e2e.js',
                './test/specs/course-CloudandSharing.e2e.js',
                './test/specs/course-SocialMediaThreats.e2e.js',
                './test/specs/course-HowSocialEngineeringWorks.e2e.js',
                './test/specs/logout.e2e.js',
            ]

        ]

    },
    // Patterns to exclude.
   
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://saucelabs.com/platform/platform-configurator
    //
    capabilities: [{
        browserName: 'chrome',
        browserVersion: '122.0.6261.69',
        "goog:chromeOptions": {
            binary: "C://Program Files/Google/Chrome/Application/chrome.exe",
            args: [
                'disable-web-security',
                'allow-running-insecure-content',
                'remote-allow-origins=*',
                '--disable-extensions',
                'disable-popup-blocking',
                'disable-notifications',
                'user-data-dir=C://Users/Admin/AppData/Local/Google/Chrome/User Data',
                'profile-directory=Profile 3'
            ]
        }
              
    }],

    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/appium-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    // services: [],
    //
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried spec files should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    //reporters: ['spec'],
    reporters: ['spec', 'junit',
    ['video', {
        saveAllVideos: false,       // If true, also saves videos for successful test cases
        videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
        //outputDir: 'allure-videos'
    }],
    ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]

],

    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
    capabilities: [{
        browserName: 'chrome'
    }],

    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed before a worker process is spawned and can be used to initialize specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {string} cid      capability id (e.g 0-0)
     * @param  {object} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {object} specs    specs to be run in the worker process
     * @param  {object} args     object that will be merged with the main configuration once worker is initialized
     * @param  {object} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just after a worker process has exited.
     * @param  {string} cid      capability id (e.g 0-0)
     * @param  {number} exitCode 0 - success, 1 - fail
     * @param  {object} specs    specs to be run in the worker process
     * @param  {number} retries  number of retries used
     */
    // onWorkerEnd: function (cid, exitCode, specs, retries) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {string} cid worker id (e.g. 0-0)
     */
    // beforeSession: function (config, capabilities, specs, cid) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {object}         browser      instance of created browser/device session
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {string} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Hook that gets executed before the suite starts
     * @param {object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    // beforeTest: function (test, context) {
    // },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function (test, context, hookName) {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function (test, context, { error, result, duration, passed, retries }, hookName) {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine only)
     * @param {object}  test             test object
     * @param {object}  context          scope object the test was executed with
     * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
     * @param {*}       result.result    return object of test function
     * @param {number}  result.duration  duration of test
     * @param {boolean} result.passed    true if test has passed, otherwise false
     * @param {object}  result.retries   information about spec related retries, e.g. `{ attempts: 0, limit: 0 }`
     */
    // afterTest: function(test, context, { error, result, duration, passed, retries }) {
    // },


    /**
     * Hook that gets executed after the suite has ended
     * @param {object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {string} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {number} result 0 - command success, 1 - command error
     * @param {object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {object} exitCode 0 - success, 1 - fail
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    /**
    * Gets executed when a refresh happens.
    * @param {string} oldSessionId session ID of the old session
    * @param {string} newSessionId session ID of the new session
    */
    // onReload: function(oldSessionId, newSessionId) {
    // }
    /**
    * Hook that gets executed before a WebdriverIO assertion happens.
    * @param {object} params information about the assertion to be executed
    */
    // beforeAssertion: function(params) {
    // }
    /**
    * Hook that gets executed after a WebdriverIO assertion happened.
    * @param {object} params information about the assertion that was executed, including its results
    */
    // afterAssertion: function(params) {
    // }
}
