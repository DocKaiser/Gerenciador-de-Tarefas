# Gerenciador de Tarefas - Estudo Prático de React

Este projeto foi desenvolvido como um exercício fundamental para o aprendizado de React.js, focando na manipulação de estados, fluxos de dados, roteamento e integração com APIs externas. O objetivo principal foi aplicar na prática os conceitos fundamentais da biblioteca e seu ecossistema moderno.

## Tecnologias Utilizadas

- **React** (Biblioteca principal)
- **Vite** (Ferramenta de build e ambiente de desenvolvimento)
- **Tailwind CSS** (Estilização via classes utilitárias)
- **React Router Dom v6.26.1** (Gerenciamento de rotas e navegação)
- **Lucide React** (Biblioteca de ícones)
- **UUID v4** (Geração de identificadores únicos universais)

## Conceitos e Funcionalidades Implementadas

### 1. Manipulação de Estado e Props

- Gerenciamento dinâmico da lista de tarefas utilizando o hook `useState`.
- Comunicação entre componentes via Props (Lifting State Up).
- Componentização avançada: criação de componentes reutilizáveis para `Input` e `Button`, abstraindo lógica de estilização e atributos.

### 2. Ciclo de Vida e Efeitos (Hooks)

- **Persistência Local**: Uso do hook `useEffect` para sincronizar o estado das tarefas com o `localStorage`, garantindo a persistência dos dados após o recarregamento da página.
- **Consumo de API**: Implementação de chamadas assíncronas com `fetch` e `async/await` para buscar dados iniciais da API JSONPlaceholder.
- **Lógica Condicional de Efeitos**: Controle para evitar sobreposição de dados da API sobre os dados salvos localmente.

### 3. Navegação e Roteamento Moderno

- Configuração de rotas utilizando os novos padrões do React Router (`createBrowserRouter` e `RouterProvider`).
- Navegação programática através do hook `useNavigate`.
- Manipulação de parâmetros de busca (`URLSearchParams`) para transferir dados entre rotas sem a necessidade de estados globais complexos.

### 4. Operações de CRUD

- **Create**: Adição de tarefas com validação e geração de IDs únicos via `uuid`.
- **Read**: Renderização otimizada de listas utilizando o método `.map()`.
- **Update**: Sistema de alternância de status (concluído/pendente) com atualização imutável de estado.
- **Delete**: Remoção de registros utilizando o método `.filter()`.

## Como Executar o Projeto

1. Instale as dependências do projeto:

````bash
npm install

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev

3.Acesse o endereço indicado no terminal
````
