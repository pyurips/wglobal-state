- [Português](link)
- [English](link)

# WGlobalState

Trata-se de um método de compartilhamento global de estados em uma aplicação web usando React.

Primeiramente, é recomendado utilizar um template do React exemplificando o método:
```sh
npx create-react-app my-app-name --template wglobalstate
```

Após a instalação, dentro da pasta `src/WGlobalState` está o componente que será usado para compartilhar todo o estado global.

### Estrutura do WGlobalState.js

O componente é organizado da seguinte maneira:
- Todos os estados que são declarados neste componente serão globais. No template de exemplo, são: `text` e `buttonText`;
- `window.__globalState` é o método que será usado para compartilhar todos os estados deste componente para todos os componentes da aplicação. Logo abaixo, será explicado com detalhe sobre o método;
- A função `GlobalState` terá que retornar o componente `App` ou qualquer outro que você queira compartilhar os estados globais. Como geralmente a maioria dos aplicativos estão aninhados no `App`, se este for seu caso, não precisa retornar mais nenhum outro componente;
- Dentro do `src/index.js` basta colocar o componente `<GlobalState />`.

### Estrutura do método window.__globalState
- É uma função que pode requerer três argumentos. O primeiro, `method` recebe uma string que poderá ser `'get'`(retornará o valor do estado global que for escolhido) ou `'set'`(modificará o valor do estado global que for escolhido);
- No segundo parâmetro, `state`, terá que receber uma string do nome exato do estado global que está definido no `GlobalState`. No exemplo, só pode receber `'text'` ou `'buttonText'`;
- **O terceiro e o último argumento** (`value`) **é opcional!** Somente será necessário quando o primeiro argumento da função (`method`) for `'set'`. Poderá receber qualquer tipo de valor/dado, em que será o novo valor do estado recebido no segundo argumento (`state`).
- Dentro estrutura do `switch`, terá que ter uma atualização a cada novo estado que for declarado no estado global da aplicação. Abaixo um exemplo prático.

### Exemplo prático do passso a passo na criação de um estado global

1. Crie um novo estado `newStateExample` e um método para mudar o estado `setNewStateExample` dentro do `GlobalState`. Por exemplo, usando React Hooks, ficará: `const [newStateExample, setNewStateExample] = useState()`;
2. Agora, o último passo é modificar a estrutura do `switch` dentro do método `window.__globalState` adicionando uma condição dentro da estrutura `case 'get'`:
    ```sh
    case 'newStateExample':
        return setNewStateExample(value);
    ```
    Já dentro da estrutura `case 'set'`:
    ```sh
    case 'newStateExample':
        return newStateExample;
    ```

Pronto, para acessar o valor contido em `newStateExample` em qualquer parte da aplicação, basta chamar o método `window.__globalState('get', 'newStateExample')`. Logo, para mudar o valor que está no estado global `newStateExample`, basta chamar (também de qualquer componente dentro da aplicação) o método `window__globalState('set', 'newStateExample', yourNewValueState)`.

___

# WGlobalState

Trata-se de um método de compartilhamento global de estados em uma aplicação web usando React.

Primeiramente, é recomendado utilizar um template do React exemplificando o método:
```sh
npx create-react-app my-app-name --template wglobalstate
```

Após a instalação, dentro da pasta `src/WGlobalState` está o componente que será usado para compartilhar todo o estado global.

### Estrutura do WGlobalState.js

O componente é organizado da seguinte maneira:
- Todos os estados que são declarados neste componente serão globais. No template de exemplo, são: `text` e `buttonText`;
- `window.__globalState` é o método que será usado para compartilhar todos os estados deste componente para todos os componentes da aplicação. Logo abaixo, será explicado com detalhe sobre o método;
- A função `GlobalState` terá que retornar o componente `App` ou qualquer outro que você queira compartilhar os estados globais. Como geralmente a maioria dos aplicativos estão aninhados no `App`, se este for seu caso, não precisa retornar mais nenhum outro componente;
- Dentro do `src/index.js` basta colocar o componente `<GlobalState />`.

### Estrutura do método window.__globalState
- É uma função que pode requerer três argumentos. O primeiro, `method` recebe uma string que poderá ser `'get'`(retornará o valor do estado global que for escolhido) ou `'set'`(modificará o valor do estado global que for escolhido);
- No segundo parâmetro, `state`, terá que receber uma string do nome exato do estado global que está definido no `GlobalState`. No exemplo, só pode receber `'text'` ou `'buttonText'`;
- **O terceiro e o último argumento** (`value`) **é opcional!** Somente será necessário quando o primeiro argumento da função (`method`) for `'set'`. Poderá receber qualquer tipo de valor/dado, em que será o novo valor do estado recebido no segundo argumento (`state`).
- Dentro estrutura do `switch`, terá que ter uma atualização a cada novo estado que for declarado no estado global da aplicação. Abaixo um exemplo prático.

### Exemplo prático do passso a passo na criação de um estado global

1. Crie um novo estado `newStateExample` e um método para mudar o estado `setNewStateExample` dentro do `GlobalState`. Por exemplo, usando React Hooks, ficará: `const [newStateExample, setNewStateExample] = useState()`;
2. Agora, o último passo é modificar a estrutura do `switch` dentro do método `window.__globalState` adicionando uma condição dentro da estrutura `case 'get'`:
    ```sh
    case 'newStateExample':
        return setNewStateExample(value);
    ```
    Já dentro da estrutura `case 'set'`:
    ```sh
    case 'newStateExample':
        return newStateExample;
    ```

Pronto, para acessar o valor contido em `newStateExample` em qualquer parte da aplicação, basta chamar o método `window.__globalState('get', 'newStateExample')`. Logo, para mudar o valor que está no estado global `newStateExample`, basta chamar (também de qualquer componente dentro da aplicação) o método `window__globalState('set', 'newStateExample', yourNewValueState)`.