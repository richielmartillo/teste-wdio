class FormPage {
    // Seletores
    get menuForm() {
        return $('~Forms')
    }

    get botaoOnOff() {
        return $('~switch')
    }

    get campoTexto() {
        return $('~text-input')
    }

    get labelResultado() {
        return $('~input-text-result')
    }

    get dropdown() {
        return $('-android uiautomator:new UiSelector().resourceId("text_input")')
    }



    async selecionarOpcao(txtOpcao) {

        await this.dropdown.click()
        const opcao = $(`-android uiautomator:new UiSelector().text("${txtOpcao}")`)
        await opcao.click()
    }

    async validarOpcao() {
        return await this.dropdown.getText()
    }

    // Métodos
    async abrirFormulario() {
        await this.menuForm.waitForDisplayed()
        await this.menuForm.click()
    }

    async alternarBotaoOnOff() {
        await this.botaoOnOff.waitForDisplayed()
        await this.botaoOnOff.click()
    }

    async preencherTexto(texto) {
        await this.campoTexto.clearValue()
        await this.campoTexto.addValue(texto)
    }

    async validarTexto() {
        return await this.labelResultado.getText()
    }
}

export default new FormPage()
