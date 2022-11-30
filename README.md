<h1 align="center"> C214 - Laboratório </h1>
<h3 align="center">:books: Projeto: FormPDF </h3>

<p align="center">
<img src="https://img.shields.io/static/v1?label=License&message=GPL&color=00bfff&style=plastic"/>

<img src="https://img.shields.io/static/v1?label=LP&message=TypeScript&color=daa520&style=plastic"/>

<img src="https://img.shields.io/static/v1?label=GD&message=NodeJS&color=9acd32&style=plastic"/>

<img src="https://img.shields.io/static/v1?label=IDE&message=vscode&color=5f9ea0&style=plastic"/>
</p>

### :speech_balloon: Projeto

FormPDF é um criador de slides que gera o conteúdo da apresentação, informado pelo usuário, em formato PDF.

### :point_right: Pré-requisitos

- *node*: v16.17 ou superior (recomendado [nvm](https://github.com/nvm-sh/nvm));
- *npm*: v8.15 ou superior;
- Editor de sua escolha. Por exemplo, [VSCode](https://code.visualstudio.com/download)

### :heavy_check_mark: Como executar a aplicação?

- Ir para o diretório do repositório:
```
cd c214l1-projeto/
```

- Instalar as dependências do *node*:
```
npm i
```

- Inicializar o servidor web:
```
npm run dev
```

### :yellow_circle: Como realizar o *debug* da aplicação utilizando a IDE *vscode*:

- No *vscode*, pressionar o atalho `Ctrl+Shift+D`. O menu de *Run and Debug* vai aparecer no *sidebar*;

- Clicar em `create a launch.json file`;

- Copiar e colar o `json` apresentado abaixo e salvar o arquivo:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "", // Escolher um navegador instalado em sua maquina ('chrome', 'firefox', etc.).
      "request": "launch",
      "name": "react debugging",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/src",
    }
  ]
}
```

- Assegurar que a **aplicação ja esta rodando**!

- Pressionar `F5` para começar o `debugger`.

### :lady_beetle::mag: Como executar os testes?

#### :one: Via linha de comando:

- Ir para o diretorio do repositório:
```
cd c214l1-projeto/
```

- Instalar as dependências do *node*:
```
npm i
```

- Executar os testes:
```
npm run test
```

#### :two: Via *vscode*:

- No *vscode*, pressionar o atalho `Ctrl+Shift+X`. O menu de *Extensions* vai aparecer no *sidebar*;

- Procurar pela extensão `Orta.vscode-jest`;

- Instalar a extensão que aparecer, com nome `Jest`;

- Assim que a extensão instalar, ir ao menu de *Testing* do *sidebar*.

### :computer: Tecnologias

- Node.js
- TypeScript
- HTML5
- CSS

### Funcionamento

### :people_holding_hands: Autores
- Álvaro
- Andressa
- Dessana
- Mariana

### :small_blue_diamond: Licença
GPL-3.0
