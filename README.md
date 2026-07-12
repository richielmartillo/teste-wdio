# Módulo 25 - Testes Mobile com Appium

Projeto desenvolvido para a atividade prática do Módulo 25 do curso de Engenharia de Qualidade de Software da EBAC.

O repositório reúne a configuração do ambiente de automação mobile e testes automatizados Android utilizando Appium, WebdriverIO e o padrão Page Object.

## Objetivo

Praticar a automação de testes mobile em um aplicativo Android, validando diferentes tipos de interação, como preenchimento de campos, cliques, mensagens, gestos de swipe e drag and drop.

## Tecnologias e ferramentas

- JavaScript
- Node.js
- NPM
- WebdriverIO
- Appium
- Appium Inspector
- Appium Doctor
- Driver UiAutomator2
- Android Studio
- Android SDK
- ADB
- Emulador Android
- Jenkins
- Git
- GitHub

## Testes implementados

O projeto contém testes automatizados para as seguintes funcionalidades:

- Login com credenciais válidas
- Login com credenciais inválidas
- Validação de mensagens apresentadas pelo aplicativo
- Preenchimento e validação de formulários
- Interações com campos e botões
- Gestos de swipe vertical
- Gestos de swipe horizontal
- Movimentos utilizando coordenadas
- Drag and drop
- Navegação entre as telas do aplicativo

## Organização do projeto

Os testes foram organizados utilizando o padrão Page Object.

```text
test/
├── pageobjects/
│   ├── drag.page.js
│   ├── form.page.js
│   ├── login.page.js
│   └── swipe.page.js
│
└── specs/
    ├── drag.spec.js
    ├── forms.spec.js
    ├── login.spec.js
    └── swipe.spec.js
```

## Page Objects

Os arquivos da pasta `pageobjects` armazenam:

- Seletores dos elementos
- Métodos de interação com o aplicativo
- Ações reutilizáveis pelos testes

## Specs

Os arquivos da pasta `specs` armazenam:

- Cenários de teste
- Validações
- Execução das ações definidas nos Page Objects
- Gestos e interações realizados pelo WebdriverIO

## Configuração do ambiente

Antes de executar os testes, é necessário ter instalado e configurado:

- Node.js
- Java JDK
- Android Studio
- Android SDK
- ADB
- Appium
- Driver UiAutomator2
- Emulador Android

Também devem estar configuradas as variáveis de ambiente:

```text
JAVA_HOME
ANDROID_HOME
```

## Instalação das dependências

Após clonar o repositório, execute:

```bash
npm install
```

## Execução dos testes

Antes de executar os testes:

1. Abra o Android Studio.
2. Inicie o emulador Android.
3. Confirme que o dispositivo está conectado com o comando:

```bash
adb devices
```

Para executar todos os testes:

```bash
npm test
```

Para executar somente o teste de login:

```bash
npm test -- --spec ./test/specs/login.spec.js
```

Para executar somente o teste de formulário:

```bash
npm test -- --spec ./test/specs/forms.spec.js
```

Para executar somente o teste de swipe:

```bash
npm test -- --spec ./test/specs/swipe.spec.js
```

Para executar somente o teste de drag and drop:

```bash
npm test -- --spec ./test/specs/drag.spec.js
```

## Automação de gestos

Os movimentos de swipe foram capturados com o Appium Inspector e implementados no WebdriverIO utilizando ações do tipo `pointer`.

Exemplo:

```javascript
await driver.action('pointer')
    .move({ duration: 0, x: 504, y: 866 })
    .down({ button: 0 })
    .move({ duration: 1000, x: 501, y: 696 })
    .up({ button: 0 })
    .perform()
```

Essa abordagem permite reproduzir movimentos realizados pelo usuário diretamente na tela do dispositivo.

## Integração com Jenkins

O projeto também possui um arquivo `Jenkinsfile` para execução dos testes em uma pipeline de integração contínua.

A pipeline permite automatizar etapas como:

- Clonagem do repositório
- Instalação das dependências
- Inicialização do Appium
- Execução dos testes mobile

## Evidência de configuração

O repositório possui o arquivo:

```text
Validacao_Ambiente_Richard_Balestrim (3).pdf
```

O documento contém evidências da configuração inicial do ambiente, incluindo:

- Versões do Node.js, NPM, Java e Javac
- Validação do ADB
- Configuração das variáveis `JAVA_HOME` e `ANDROID_HOME`
- Resultado do Appium Doctor
- Instalação do driver UiAutomator2
- Emulador Android em execução
- Configuração do Appium Inspector
- Projeto Android aberto no Android Studio

## Conceitos praticados

- Automação de testes mobile
- Configuração de ambiente Android
- Seletores por Accessibility ID
- Uso do Appium Inspector
- WebdriverIO
- Page Object Model
- Hooks de teste
- Validação de elementos e mensagens
- Swipe vertical e horizontal
- Ações utilizando coordenadas
- Drag and drop
- Integração contínua com Jenkins
- Versionamento com Git e GitHub

## Status do projeto

Ambiente configurado e testes automatizados implementados com sucesso.

O projeto possui cenários de login, formulário, swipe e drag and drop executados em um emulador Android utilizando Appium e WebdriverIO.