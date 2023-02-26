# Nightwatch - JS 

<!-- <details>
    <summary><b>Template</b></summary>
    
</details> -->

<details>
    <summary><b>Tags</b></summary>

```js
describe('Your test suite', function() {
  this.tags = ['demo'];
  ...
});
```

```js
module.exports ={
    "@tags": ["login"],
    ...
}
```
</details>

<details>
    <summary><b>Hooks</b></summary>
    
```js
describe('.....', function() {
  before(browser => browser.url('https://...'));

  after(browser => browser.end());
});
```

```js
module.exports ={
    beforeEach: function (browser) {
        browser.navigateTo('https://...'));
    }

    afterEach: function (browser) {
        browser.end();
    }
}
```
</details>

<details>
    <summary><b>Page Objects</b></summary>

A simple page object:
```js
module.exports = {

    url: function () {
        return `${this.api.launch_url}/default.aspx`
    },
    
    elements: {
        logo: 'section .logo__icon',
        searchResults: '.mainline',
        searchBar: {
            selector: 'input[type=search]'
        },        
        submitButton: {
            selector: "//button[@type='submit']",
            locateStrategy: 'xpath'
        },
    }
}
```    
</details>

<details>
    <summary><b>Global vs .env Variables</b></summary>

<br>

> login(`browser.globals.`username, `browser.globals.`password)

> login(`process.env.`USERNAME, `process.env.`PASSWORD)

</details>

<br>

## *`nightwatch.conf.js`*

<details>
    <summary><b>Launch URL</b></summary>

* You can add `launch_url` to your config file:
    ```
    "test_settings" : {
        "default" : {
            launch_url: "https://sample.com",
    ```

    This will allow you to navigate to the url directly in your tests:
   
    ```
    module.exports = {
        'Valid login' : function(browser) {
            browser.url(browser.launch_url)
            browser.url(browser.launch_url + '/contact');
            ...
    ```

    But you can also specify `url` in page classes
    ```
    module.exports = {
        url: 'https://www.ukg.com/',
        
        elements: {
            ...
        }
    };
    ```
    Sample of usage:
    ```
    let homePage = browser.page.homePage();
    homePage.navigate()
    ```

    Another option is to use this code in page classes:

    ```
    url: function () {
        return `${this.api.launch_url}/default.aspx`
    },
    ```

    This will allow you to write `homePage.navigate()` instead of `browser.url(browser.launch_url)`
</details>

<br>



