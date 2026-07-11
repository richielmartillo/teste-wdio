class DragPage {
    get menuDrag() {
        return $("~Drag")
    }

    async abrirMenuDrag() {
        await this.menuDrag.waitForDisplayed({ timeout: 10000 })
        await this.menuDrag.click()
    }
}

export default new DragPage()