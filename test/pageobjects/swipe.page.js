class SwipePage {
    get menuSwipe() {
        return $('~Swipe')
    }

    async abrirMenuSwipe() {
        await this.menuSwipe.waitForDisplayed({ timeout: 10000 })
        await this.menuSwipe.click()
    }
}

export default new SwipePage()