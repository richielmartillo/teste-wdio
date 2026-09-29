import formPage from '../pageobjects/form.page.js'

it('Deve trocar o botão de on para off', async () => {
    await formPage.abrirFormulario()

    // Troca para ON
    await formPage.alternarBotaoOnOff()
    await expect(formPage.botaoOnOff).toHaveAttribute('checked', 'true')

    // Troca novamente para OFF
    await formPage.alternarBotaoOnOff()
    await expect(formPage.botaoOnOff).toHaveAttribute('checked', 'false')
})
