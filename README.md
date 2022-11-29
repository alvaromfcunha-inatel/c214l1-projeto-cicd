# C214 L1 - Projeto - Nome do projeto?

## Pré-requisitos:

- *node* v16.17 ou superior (recomendado [nvm](https://github.com/nvm-sh/nvm));
- *npm* v8.15 ou superior.

## Como rodar a aplicação?

- Ir para o diretorio do repositório:
```
cd c214l1-projeto/
```

- Instalar dependencias do *node*:
```
npm i
```

- Startar o servidor web:
```
npm run dev
```

## Como *debuggar* a aplicação via *vscode*:

- No *vscode* pressionar o atalho `Ctrl+Shift+D`. O menu de *Run and Debug* vai aparecer no *sidebar*;

- Clicar em `create a launch.json file`;

- Colar esse `json` e salvar o arquivo:

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

## Como rodar os testes?

### Via linha de comando:

- Ir para o diretorio do repositório:
```
cd c214l1-projeto/
```

- Instalar dependencias do *node*:
```
npm i
```

- Rodar os testes:
```
npm run test
```

### Via *vscode*:

- No *vscode* pressionar o atalho `Ctrl+Shift+X`. O menu de *Extensions* vai aparecer no *sidebar*;

- Procurar pela extensão `Orta.vscode-jest`;

- Instalar a extensão que aparecer, com nome `Jest`;

- Assim que a extensão instalar ir no menu de *Testing* do *sidebar*.