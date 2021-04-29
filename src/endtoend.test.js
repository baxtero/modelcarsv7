import { launch } from 'chrome-launcher';
import CDP from 'chrome-remote-interface';
import assert from 'assert';
 
(async function() {
  async function launchChrome() {
    return await launch({
      chromeFlags: [
        '--disable-gpu',
        '--headless'
      ]
    });
  }
  const chrome = await launchChrome();
  const protocol = await CDP({
    port: chrome.port
  });
 
  const login_flow = `document.querySelector('#username').value = 'test_user@test.com';
document.querySelector('#password').value = 'test-password1!';
document.querySelector('#login-button').click();`
 
  Page.loadEventFired(async() => {
      const result = await Runtime.evaluate({
        expression = login_flow
      });
  });
  // Test something about the page after you've logged in here
})();