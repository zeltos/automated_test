
module.exports = async (page, scenario, vp) => {
  await page.waitForSelector("body");
  await page.waitForSelector("ul.service-wrapper > li a");
  // // await page.goto('@@@@@@@@@@@')
  await page.click("ul.service-wrapper > li a");
  await page.waitForSelector("#exampleModal .modal-content", { visible: true });
  await page.waitForSelector("#exampleInputEmail1");
  await page.click("input#exampleInputEmail1");
  // await page.type("#exampleInputEmail1", "medianto.jaelani@gmail.com");
  await setTimeout(()=> {}, 500)
  // await page.click("#exampleInputPassword1");
  // await page.type("#exampleInputPassword1", "ytrewq");
  // await page.click(".submit-button");
  // page.close()
  };