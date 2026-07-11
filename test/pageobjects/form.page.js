class FormPage {
    // Seletores
    get menuForm() {
        return $('~Forms')
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

    get opcao() {
        return $('-android uiautomator:new UiSelector().text("This app is awesome")')
    }

    async selecionarOpcao() {
        //Melhorar este método
        await this.dropdown.click()
        await this.opcao.click()
    }

    async validarOpcao() {
        return await this.dropdown.getText()
    }



    // Métodos
    async abrirFormulario() {
        await this.menuForm.click()
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