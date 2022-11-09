- [Português](https://github.com/pyurips/WGlobalState#wglobalstate)
- [English](https://github.com/pyurips/WGlobalState#wglobalstate-1)

![WGlobalStateExampleGIF](https://cdn.discordapp.com/attachments/971787111470596136/1039796847239245834/React-App-Google-Chrome-2022-11-09-03-58-37.gif)

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
2. Agora, o último passo é modificar a estrutura do `switch` dentro do método `window.__globalState` adicionando uma condição dentro da estrutura `case 'set'`:
    ```sh
    case 'newStateExample':
        return setNewStateExample(value);
    ```
    Já dentro da estrutura `case 'get'`:
    ```sh
    case 'newStateExample':
        return newStateExample;
    ```

Pronto, para acessar o valor contido em `newStateExample` em qualquer parte da aplicação, basta chamar o método `window.__globalState('get', 'newStateExample')`. Logo, para mudar o valor que está no estado global `newStateExample`, basta chamar (também de qualquer componente dentro da aplicação) o método `window__globalState('set', 'newStateExample', yourNewValueState)`.

___

# WGlobalState

It is a global method of sharing state in an application using React.

First, it is recommended to use a React template exemplifying the method:
```sh
npx create-react-app my-app-name --template wglobalstate
```

After installation, inside the `src/WGlobalState` folder is the component that will be used to share all the global state.

### Structure of WGlobalState.js

The component is organized as follows:
- All states that are declared in this component will be global. In the example template they are: `text` and `buttonText`;
- `window.__globalState` is the method that will be used to share all states of this component to all components of the application. Below, the method will be explained in detail;
- The `GlobalState` function will have to return the `App` component or any other you want to share the global states. As most applications are usually nested under `App`, if this is your case, you don't need to return any other components;
- Inside `src/index.js` just put the `<GlobalState />` component.

### Structure of the window.__globalState method
- It is a function that may require three arguments. The first, `method` receives a string that can be `'get'` (it will return the value of the global state that is chosen) or `'set'` (it will change the value of the global state that is chosen);
- In the second parameter, `state`, it will have to receive a string of the exact name of the global state that is defined in `GlobalState`. In the example, it can only receive `'text'` or `'buttonText'`;
- **The third and last argument** (`value`) **is optional!** Only required when the first argument of the function (`method`) is `'set'`. It can receive any type of value/data, which will be the new state value received in the second argument (`state`).
- Within the `switch` structure, there will have to be an update for each new state that is declared in the global state of the application. Below is a practical example.

### Practical example of the step-by-step creation of a global state

1. Create a new `newStateExample` state and a method to change the `setNewStateExample` state inside `GlobalState`. For example, using React Hooks, it would look like: `const [newStateExample, setNewStateExample] = useState()`;
2. Now, the last step is to modify the `switch` structure inside the `window.__globalState` method by adding a condition inside the `case 'set'` structure:
    ```sh
    case 'newStateExample':
        return setNewStateExample(value);
    ```
    Inside the `case 'get'` structure:
    ```sh
    case 'newStateExample':
        return newStateExample;
    ```

Now, to access the value contained in `newStateExample` in any part of the application, just call the `window.__globalState('get', 'newStateExample')` method. So, to change the value that is in the `newStateExample` global state, just call (also from any component within the application) the `window__globalState('set', 'newStateExample', yourNewValueState)` method.
