describe('The F thing Automate Test', async  () => {
    let page;
    
    before(async () => {
        page = await browser.newPage();
        await page.setViewport( { width: 1440, height: 900} );
        await page.goto("https://thefthing.com/");
     
    });

    after(async function () {
        await page.close();
    });

    it('should login to home page', async () => {
         loginLink = await page.$('#login-anchor');
         loginEmailInput = await page.$('#login_form #exampleInputEmail1')
         loginPasswordInput = await page.$('#login_form #exampleInputPassword1')
         loginSubmit = await page.$('#login_form .btn-fthing-full')
      
         await loginLink.click();
         await page.waitForSelector('#login_form')
         await loginEmailInput.type('email@email.com')
         await loginPasswordInput.type('pasword')
         await loginSubmit.click()

        //  await linkEmail.type('tariqul.islam.rony@gmail.com'); // add the email address for linkedin //

        //  await linkPassword.click({ clickCount: 3});
        //  await linkPassword.type('programmerrony01'); // add password for linkedin account

        //  await linkSubmit.click();
         await page.waitForNavigation();
         await page.waitForSelector('.service-wrapper')
         linkAccount = await page.$('.service-wrapper li a')
         await linkAccount.click()
         console.log('sudah login')
         await page.waitFor(500);
         expect(page.url()).to.contain('/customer')
       
    });
});