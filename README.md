## Organização do projeto

O projeto utiliza o padrão Page Object Model (POM) e possui uma configuração separada para execução dos testes no ambiente Android.

```text
modulo-32-test-mobile/
├── apps/
│   └── native-demo-app.apk
│
├── config/
│   ├── wdio.conf.js
│   └── wdio.android.conf.js
│
├── test/
│   ├── pageobjects/
│   │   ├── drag.page.js
│   │   ├── form.page.js
│   │   ├── login.page.js
│   │   └── swipe.page.js
│   │
│   └── specs/
│       ├── drag.spec.js
│       ├── forms.spec.js
│       ├── login.spec.js
│       └── swipe.spec.js
│
├── Jenkinsfile
├── package.json
└── README.md

## Configuração do WebdriverIO

As configurações do WebdriverIO foram separadas para facilitar a organização do ambiente.

### `config/wdio.conf.js`

Contém as configurações compartilhadas do projeto, como serviços, framework, reporters, hooks e capabilities utilizadas pela automação.

### `config/wdio.android.conf.js`

Importa a configuração compartilhada e define as configurações utilizadas especificamente para a execução dos testes Android.

Também define os arquivos de teste que serão executados:

```javascript
specs: [
    '../test/specs/**/*.js'
]


## Plataforma utilizada

O projeto foi desenvolvido e executado em ambiente Windows utilizando Android Studio, Android SDK, Appium e WebdriverIO.

A execução automatizada implementada neste projeto utiliza Android com o driver UiAutomator2.

A estrutura de configuração foi organizada de forma a permitir futuras adaptações para outras plataformas.