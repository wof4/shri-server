const delay = require('delay');

describe('заполнение формы настроек', () => {


    it('валидация формы страницы Settings', async function () {
        const browser = this.browser;
        await browser.url('/setting');
        await delay(500);
        const repoNameInput = await browser.$(`[data-testid="repoName"]`)
        const buildCommandInput = await browser.$(`[data-testid="buildCommand"]`)
        const mainBranchInput = await browser.$(`[data-testid="mainBranch"]`)
        const periodInput = await browser.$(`[data-testid="period"]`)
        
        await repoNameInput.setValue('wof4/tableData');
        await delay(500);

        await buildCommandInput.setValue('run build');
        await delay(500);

        await mainBranchInput.setValue('master');
        await delay(500);

        await periodInput.setValue('0');
        await delay(500);


        const repoNameIcon = await browser.$(`[data-testid='repoNameIcon']`)
        repoNameIcon.click()
        await delay(500);

        const buildCommandIcon = await browser.$(`[data-testid='buildCommandIcon']`)
        buildCommandIcon.click()
        await delay(500);

        const mainBranchIcon = await browser.$(`[data-testid='mainBranchIcon']`)
        mainBranchIcon.click()

        await delay(2000);
        const container = await browser.$(`[data-testid = "SettingsWrapper"]`)
        await container.waitForExist()

        await browser.assertView('settingValidation', `[data-testid = "SettingsWrapper"]`)

    })

    it(' не верно указано имя репозитория на странице Settings ', async function () {
        const browser = this.browser;
        await browser.url('/setting');
        await delay(500);
        const repoNameInput = await browser.$(`[data-testid="repoName"]`)
        const buildCommandInput = await browser.$(`[data-testid="buildCommand"]`)
        const mainBranchInput = await browser.$(`[data-testid="mainBranch"]`)
        const periodInput = await browser.$(`[data-testid="period"]`)

        await repoNameInput.setValue('wof4/tableDat');
        await delay(500);
        await buildCommandInput.setValue('run build');
        await delay(500);
        await mainBranchInput.setValue('master');
        await delay(500);
        await periodInput.setValue('0');
        await delay(500);

        const buttonSave = await browser.$(`[data-testid="button-add-settings"]`)
        buttonSave.click()
        await delay(500);

        const container = await browser.$(`[data-testid = "errorWrapper"]`)
        await delay(3000);
        await container.waitForExist()
        await browser.assertView('errorSettings', `[data-testid="errorWrapper"]`)

    })

    it('заполнение формы отправка запроса  ожидается редирект на страницу buildList', async function () {
        const browser = this.browser;
        await browser.url('/setting');
        await delay(500);
        const repoNameInput = await browser.$(`[data-testid="repoName"]`)
        const buildCommandInput = await browser.$(`[data-testid="buildCommand"]`)
        const mainBranchInput = await browser.$(`[data-testid="mainBranch"]`)
        const periodInput = await browser.$(`[data-testid="period"]`)

        await repoNameInput.setValue('wof4/tableData');
        await delay(500);
        await buildCommandInput.setValue('run build');
        await delay(500);
        await mainBranchInput.setValue('master');
        await delay(500);
        await periodInput.setValue('0');
        await delay(500);

        const buttonSave = await browser.$(`[data-testid="button-add-settings"]`)
        buttonSave.click()
        await delay(500);

        const container = await browser.$(`[data-testid="build__history_container"]`)
        await delay(3000);
        await container.waitForExist()
        await browser.assertView('plan', `[data-testid="build__history_container"]`)

    })


})




