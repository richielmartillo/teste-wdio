it('Deve trocar o botão de on para off', async () => {
    const botaoOnOff = await $('~switch')

    // Troca para ON
    await botaoOnOff.click()
    await driver.pause(2000)

    // Troca novamente para OFF
    await botaoOnOff.click()
    await driver.pause(2000)
})