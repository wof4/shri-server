const delay = require('delay');

describe('buildList', () => {
  it('заполнение формы для постановки коммита в очередь', async function () {
    const { browser } = this;
    await browser.url('/build');
    await delay(1000);
    const buttonRunBuild = await browser.$('[data-testid="buildIcon"]');

    buttonRunBuild.click();
    await delay(200);
    const commitHashInput = await browser.$('[data-testid="commitHash"]');
    await commitHashInput.setValue('069dd2e2770277feb3373abe3d7ef52c03f7278a');

    const addBuildButton = await browser.$('[data-testid="addBuild"]');
    await delay(200);
    addBuildButton.click();
    await delay(2000);

    const container = await browser.$('[data-testid="ditaliesPage"]');
    await container.waitForExist();

    await browser.assertView('ditalies', '[data-testid="ditaliesPage"]');
  });

  it('переход со страницы buildList на страницу Detalies по клику на карточку', async function () {
    const { browser } = this;
    await browser.url('/build');
    await delay(1000);
    const buttonGoToDetailsWithThisCard = await browser.$('[data-testid="111"]');

    buttonGoToDetailsWithThisCard.click();
    await delay(2000);
    const container = await browser.$('[data-testid = "ditaliesPage"]');
    await container.waitForExist();

    await browser.assertView('redirectToDitails', '[data-testid = "ditaliesPage"]');
  });

  it('переход со страницы Detalies на страницу Settings', async function () {
    const { browser } = this;
    await browser.url('/build');
    await delay(1000);
    const buttonRunGoToSettings = await browser.$('[data-testid="settingIcon"]');

    buttonRunGoToSettings.click();
    await delay(2000);
    const container = await browser.$('[data-testid = "SettingsWrapper"]');
    await container.waitForExist();

    await browser.assertView('redirectToSettings', '[data-testid = "SettingsWrapper"]');
  });
});
