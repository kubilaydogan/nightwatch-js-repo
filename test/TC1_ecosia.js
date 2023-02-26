module.exports = {

    "@tags": ["ecosia1"],

    beforeEach: () => {
        browser.url(browser.launch_url)
    },

    afterEach: function (browser) {
        browser.end();
    },

    'Demo test for search functionality': function (browser) {
        browser
            .waitForElementVisible('section .logo__icon', 15000)
            .assert.titleContains('Ecosia')
            .assert.titleEquals('Ecosia - the search engine that plants trees')
            .assert.visible('input[type=search]')
            .setValue('input[type=search]', 'nightwatch')
            .assert.visible('button[type=submit]')
            .click('button[type=submit]')
            .waitForElementVisible('.mainline', 15000)
            .assert.textContains('.mainline', 'Nightwatch');
    },

    "Should verify page title" : function (browser) {
        browser.expect.title().to.contain('Ecosia');
        browser.expect.title().to.match(/Ecosia - the search engine that plants trees/);             
        browser.assert.titleEquals("Ecosia - the search engine that plants trees");
    },

    "Should verify page url" : function (browser) {
        browser.expect.url().which.contains('https://');
        browser.expect.url().to.contain('ecosia');
        browser.expect.url().not.to.endWith('.org');
    },
    
}

