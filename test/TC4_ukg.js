module.exports = {
    "@tags": ["ukg", "smoke"],

    beforeEach: () => {
        browser.maximizeWindow().url('https://www.ukg.com/')
    },

    afterEach: function (browser) {
        browser.end();
    },

    'Testing UKG.com': function (browser) {
        let homePage = browser.page.ukg_homePage();

        homePage.waitForElementVisible('@startWithUKG', 10000, '"Start With UKG" button is visible')
            .click('@startWithUKG')
            .waitForElementVisible('@logo', 10000, 'UKG logo is visible')
            .assert.titleContains('UKG')
            .assert.titleEquals('HR and workforce management solutions | UKG')

            .assert.elementPresent("@logo")
            .assert.elementPresent("@logo", 'Logo is present')
            .expect.element('@menu_aboutUs').text.to.equal('About Us') 
    }
    
}
