import formPage from '../pageobjects/form.page.js'
import FormPage from '../pageobjects/form.page.js'

describe('Funcionalidade: Tela de formulário', () => {
    beforeEach(async () => {
        await FormPage.abrirFormulario()
    })

    it('Deve validar se o texto foi preenchido corretamente', async () => {
        await FormPage.preencherTexto('Automação Appium')

        expect(await FormPage.validarTexto()).toEqual('Automação Appium')

        await driver.pause(5000)
    })

    it('Validar a seleção do dropdown', async () => {
        await formPage.selecionarOpcao()
        expect(await FormPage.validarOpcao()).toEqual('This app is awesome')
        await driver.pause(5000)
    });

    it.only('Deve trocar o botão de on para off', async () => {
        //Trocar para ON
        const botaoOnOff = await driver.$("accessibility id:switch");
        await botaoOnOff.click();
        await driver.pause(5000)
        //Trocar para off
        await driver.action('pointer')
            .move({ duration: 0, x: 253, y: 1309 })
            .down({ button: 0 })
            .move({ duration: 1000, x: 88, y: 1325 })
            .up({ button: 0 })
            .perform();
        await driver.pause(5000)
    });

})