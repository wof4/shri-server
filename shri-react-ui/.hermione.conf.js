
module.exports = {
    baseUrl: 'http://localhost:3001/',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',


    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    },
    plugins: {
        
        'html-reporter/hermione': {
            path: 'hermione-html-report',
        },
        // 'hermione-selenium-runner': true,
        'url-decorator': {
            query: {
                'test': 1,
            }
        },
    }
}