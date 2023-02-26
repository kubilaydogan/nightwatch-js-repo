module.exports = {
	'@tags': [ 'sauceDemo' ],

	beforeEach: () => {
		browser.url('https://www.saucedemo.com/');
	},

	afterEach: function() {
		browser.end();
	},

	'Using custom commands': function(browser) {
		browser.login('standard_user', 'secret_sauce').assert.visible('#shopping_cart_container');
	},

	'Using custom commands 2': function(browser) {
		browser.loginAs('Standard user').assert.visible('#shopping_cart_container');
	},

	'Using global variables': function(browser) {
		var sauceDemoPage = browser.page.sauceDemo();
		sauceDemoPage.login(browser.globals.username, browser.globals.password)
			.assert.visible('#shopping_cart_container');
	},

	'Using .env variables': function(browser) {
		var sauceDemoPage = browser.page.sauceDemo();
		sauceDemoPage.login(process.env.USERNAME, process.env.PASSWORD)
            .assert.visible('#shopping_cart_container');
	}
};
