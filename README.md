<h1 align="center">Financial Control</h1>
<div align="center">

![Projeto gif](./src/assets/financial_control.gif)

</div>

## Criando um projeto React com o Vite

Para a criação do projeto React com o Vite utilizei o passo a passo que consta na documentação do Vite: https://vitejs.dev/guide/;

- Primeiramente, vamos executar o comando seguinte:

```
> npm create vite@latest
```

- Feito isso, temos que inserir o nome do projeto, selecionar o framework(React) e a variante (JS ou TS).

- Para abrirmos a aplicação, vamos primeiro instalar as dependências e em seguida rodar:

```
> npm install
> npm run dev
```

## Styled Components

- Para instalar o Styled Components iremos rodar os comandos seguintes:

```
> npm i styled-components
> npm i @types/styled-components
```

### Configurando temas

- Em `src` iremos criar uma pasta `styles` e dentro dela a pasta `themes`, nas pasta `themes` vamos criar uma arquivo chamado `default.ts`. Neste arquivo, iremos definir um tema padrão da nossa aplicação:

```TS
export const defaultTheme = {
    white: "#FFF",

    "gray-100": "#E1E1E6",
    "gray-300": "#C4C4CC",
    "gray-400": "#8D8D99",
    "gray-500": "#7C7C8A",
    "gray-600": "#323238",
    "gray-700": "#29292E",
    "gray-800": "#202024",
    "gray-900": "#121214",

    "green-300": "#00B37E",
    "green-500": "#00875F",
    "green-700": "#015F43",

    "red-300": "#F75A68",
    "red-500": "#AB222E",
    "red-700": "#7A1921",

} as const
```

- Agora, no componente principal(App) basta envolver os componentes que irão usar esse tema, pelo componente `ThemeProvider`:

```TSX
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello!</h1>
    </ThemeProvider>
  )
};
```

- Feito isso, conseguimos acessar esse tema via props.

#### Tipagem de temas

- Em `src` iremos criar uma pasta `@types` e dentro dela um arquivo chamado `styled.d.ts`(arquivo de definição de tipos):

```TS
import "styled-components";

import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme; // pegando o tipo que o TS já infere

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
```

### Estilos globais

- Em `src/styles` iremos criar um arquivo chamado `global.ts`(em aplicação com styled component não iremos trabalhar com arquivos css):

```TS
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme["green-500"]};
  }

  body {
    background: ${props => props.theme["gray-800"]};
    color: ${props => props.theme["gray-100"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
```

- Agora, no componente principal(App) iremos importar esse componente `GlobalStyle`:

```TSX
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <h1>Hello!</h1>
    </ThemeProvider>
  )
};
```

## Phosphor React Icons

Link documentação: https://phosphoricons.com/;

- Vamos usar a biblioteca de icons Phosphor React e para isso vamos instalar ela executando o comando seguinte:

```
> npm i phosphor-react
```

## Radix UI

Componentes acessíveis e sem estilo para criar sistemas de design e aplicativos da web de alta qualidade em React.

Link documentação: https://phosphoricons.com/;

- Vamos usar o Radix UI para criar componentes acessíveis. Para isso vamos instalar o componente desejado executando o comando seguinte:

```
> npm install @radix-ui/react-dialog
```

## API

### JSON Server

Obtenha uma API REST falsa completa com codificação zero em menos de 30 segundos (sério).
Criado para desenvolvedores de front-end que precisam de um back-end rápido para prototipagem e mocking.

- Vamos usar o API Server para criar o back-end, para isso vamos instalar ultizando comando seguinte:

```
> npm install json-server -D
```

- Em seguida, na raiz do projeto vamos criar um arquivo chamado `server.json` com as entidades da aplicação:

```JSON
{
  "transactions": [
    {
      "id": 1,
      "description": "Desenvolvimento de site",
      "type": "income",
      "category": "Venda",
      "price": 14000,
      "createdAt": "2022-07-29T19:36:44.505Z"
    },
    {
      "id": 2,
      "description": "Hambúrguer",
      "type": "outcome",
      "category": "Alimentação",
      "price": 50,
      "createdAt": "2022-07-29T19:30:44.505Z"
    }
  ]
}
```

- Iniciar servidor JSON:

```
> npx json-server server.json --watch - D
ou
> npm run dev:server
```

### Axios

Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quanto no Node.js ou qualquer serviço de API.

Link documentação: https://axios-http.com/ptbr/docs/intro;

- Para utilizar essa biblioteca vamos instalar ultizando comando seguinte:

```
> npm i axios
```

- Em seguida, na raiz do projeto vamos criar uma pasta chamada `lib` e dentro dela um arquivo chamado `axios.ts` com a configuração da url aplicação:

```TS
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333"
});
```

## React Hook Form

Documentação: https://react-hook-form.com/.

**Controlled x Uncontrolled**

- `Controlled`: matemos em tempo real a informação do input do usuário, guardado no estado, toda vez que uma alteração é feita o React irá recalcular todo conteúdo do componente do estado que mudou.

- `Uncontrolled`: buscamos a informação do input, somente quando precisarmos dela, sem controle de estado, usando as próprias funções JS.

- Vamos instalar o React Hook Form com o comando seguinte:

```
> npm i react-hook-form
```

- Usando o React Hook Form:

```TSX
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";

import { SearchFormContainer } from "./styles";

export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const searchTransactionsHandler = (data) => {};

  return (
    <SearchFormContainer onSubmit={handleSubmit(searchTransactionsHandler)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
};
```

### Biblioteca de validação de forms - Zod

Documentação: https://github.com/colinhacks/zod.

- Vamos rodar o comando seguinte para instalar e integrar o Zod ao React Hook Form:

```
> npm i zod
> npm i @hookform/resolvers
```

- Usando o Zod intregado ao React Hook Form para validar forms:

```TSX
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { SearchFormContainer } from "./styles";

const searchFormSchema = zod.object({
  query: zod.string(),
});

export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(searchFormSchema),
  });

  const searchTransactionsHandler = (data) => {};

  return (
    <SearchFormContainer onSubmit={handleSubmit(searchTransactionsHandler)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
};
```

### TypeScript no Formulário com Zod

- Vamos usar o Zod para facilitar a passagem de valores padrão para o form:

**Obs.:**

`Interface` x `Type`: Interface - quando criamos um tipo do zero; Type quando criamos uma tipagem a partir de outra já existente.

Toda vez que precisamos utilizar uma variável JS dentro do TS precisamos converter em uma tipagem(algo específico do TS) com o `typeof`(antes dela) para que ele consiga entender.

```TSX
import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { SearchFormContainer } from "./styles";

const searchFormSchema = zod.object({
  query: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const searchTransactionsHandler = (data: SearchFormInputs) => {};

  return (
    <SearchFormContainer onSubmit={handleSubmit(searchTransactionsHandler)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
};
```
