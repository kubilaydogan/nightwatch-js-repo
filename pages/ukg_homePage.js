const landingPageCommands = {
  submit() {
    this.waitForElementVisible('@submitButton', 1000)
      .click('@submitButton');
    this.pause(1000);
    return this; // Return page object for chaining
  }
};

module.exports = {
  url: 'https://www.ukg.com/',
  commands: [
    landingPageCommands
  ],

  elements: {
    logo: ".logo--green",
    startWithUKG: "#ukg-takeover-video-cta",
    menu_aboutUs: {
      selector: ".menu-level-0>li>a",
      index: 3
    },
  }
};
