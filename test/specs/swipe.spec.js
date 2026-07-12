import swipePage from '../pageobjects/swipe.page.js'

describe('Teste da tela Swipe', () => {

    it('Deve abrir a tela Swipe e realizar os movimentos', async () => {

        // Entra na tela Swipe
        await swipePage.abrirMenuSwipe()

        await driver.pause(2000)

        // Primeiro movimento gravado no Appium Inspector
        await driver.action('pointer')
            .move({ duration: 0, x: 504, y: 866 })
            .down({ button: 0 })
            .move({ duration: 1000, x: 501, y: 696 })
            .up({ button: 0 })
            .perform()

        await driver.pause(1000)

        // Segundo movimento gravado no Appium Inspector
        await driver.action('pointer')
            .move({ duration: 0, x: 496, y: 1394 })
            .down({ button: 0 })
            .move({ duration: 1000, x: 242, y: 1385 })
            .up({ button: 0 })
            .perform()

        await driver.pause(2000)
    })
})