import dragPage from "../pageobjects/drag.page.js"

describe("Testes na tela DragDrop", () => {
    beforeEach(async () => {
        await dragPage.abrirMenuDrag()
        await browser.pause(1000)
    })

    it.skip("Deve arrastar uma peça até o lugar certo", async () => {
        const peca_1 = await $("~drag-l1")
        const destino_1 = await $("~drop-l1")

        await peca_1.dragAndDrop(destino_1)
        await browser.pause(2000)
    })

    it.only("Deve montar o quebra-cabeça completo com dragAndDrop", async () => {
        // Primeira linha
        const peca_l1 = await $("~drag-l1")
        const destino_l1 = await $("~drop-l1")
        await peca_l1.dragAndDrop(destino_l1)
        await browser.pause(500)

        const peca_c1 = await $("~drag-c1")
        const destino_c1 = await $("~drop-c1")
        await peca_c1.dragAndDrop(destino_c1)
        await browser.pause(500)

        const peca_r1 = await $("~drag-r1")
        const destino_r1 = await $("~drop-r1")
        await peca_r1.dragAndDrop(destino_r1)
        await browser.pause(500)

        // Segunda linha
        const peca_l2 = await $("~drag-l2")
        const destino_l2 = await $("~drop-l2")
        await peca_l2.dragAndDrop(destino_l2)
        await browser.pause(500)

        const peca_c2 = await $("~drag-c2")
        const destino_c2 = await $("~drop-c2")
        await peca_c2.dragAndDrop(destino_c2)
        await browser.pause(500)

        const peca_r2 = await $("~drag-r2")
        const destino_r2 = await $("~drop-r2")
        await peca_r2.dragAndDrop(destino_r2)
        await browser.pause(500)

        // Terceira linha
        const peca_l3 = await $("~drag-l3")
        const destino_l3 = await $("~drop-l3")
        await peca_l3.dragAndDrop(destino_l3)
        await browser.pause(500)

        const peca_c3 = await $("~drag-c3")
        const destino_c3 = await $("~drop-c3")
        await peca_c3.dragAndDrop(destino_c3)
        await browser.pause(500)

        const peca_r3 = await $("~drag-r3")
        const destino_r3 = await $("~drop-r3")
        await peca_r3.dragAndDrop(destino_r3)

        // Validação apresentada depois de completar o quebra-cabeça
        const mensagem = await $(
            'android=new UiSelector().text("Congratulations")'
        )

        await expect(mensagem).toBeDisplayed()
    })
})