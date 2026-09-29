import { config as shared } from './wdio.conf.js'

export const config = {
    ...shared,

    specs: [
        '../test/specs/**/*.js'
    ],

    capabilities: [
        {
            "platformName": "Android",
            "appium:automationName": "UiAutomator2",
            "appium:deviceName": "Primeiro_emulador",
            "appium:platformVersion": "13.0",
            "appium:app": "./apps/native-demo-app.apk"
        }
    ]
}