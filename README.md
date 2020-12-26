<h1 align="center">
    ZEBU Challenger  | Pizzaria Page
</h1>

<h4 align="center">
  Test Front-end to ZEBU.
</h4>
<p align="center">
  <img alt="login" src=".github/sizepage.png">

</p>
<p align="center">
  <img alt="login" src=".github/toppingspage.png">

</p>
<p align="center">
  <img alt="login" src=".github/checkoutpage.png">

</p>
<br>
<p>
The challenge:

1.Cadastro de usuário;
2.Login;
3.Logout;
4.Pesquisa de canais do youtube;
5.Salvar canais nos favoritos;
6.Listar canais favoritados.
Os itens 3, 4, 5 e 6 só podem estar acessíveis se o usuário estiver logado.
Nos itens 1 e 2 deve-se persistir e validar o usuário cadastrado no RealmDB (nome de usuario e senha são suficientes);
No item 4, a pesquisa deve utilizar a API de Search do YouTube (https://developers.google.com/youtube/v3/docs/search/list?hl=pt-br). Essa pesquisa deve listar no máximo 10 itens por vez e ter botões para avançar e voltar nas páginas.
No item 5, deve-se utilizar o RealmDB para persistir o nome e o id do canal e a URL da thumbnail do canal.
No item 6, deve-se consultar os itens gravados no RealmDB e listar exibindo os nomes dos canais e a imagem da thumbnail.

</p>
<br>
<br>

##  WEB

- [React](https://pt-br.reactjs.org/)

- [Typescript](https://www.typescriptlang.org/)
- [Axios](https://github.com/axios/axios) Promise based HTTP client
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Context]
- [StyledComponents](https://styled-components.com/)
- [Realm](https://realm.io/docs/javascript/latest/#default-property-values)



##  TO DO TASKS

- [X] INITIAL CONFIG, ESLINT, PRETTIER, EDITORCONFIG, TYPESCRIPT
- [X] 1. Sign Page / Register User
- [X] 2. Channel List Page
- [X] 3. Favorite Page
- [X] 4. Context API logic - Authentication / Sign In / Sign Out / Register User
- [X] 5. Search and Validate input Fields and promise
- [X] 6. Review Realm logic.
- [X] 7.Check Layout
- [] 8.Convert favorite logic to context useFavorite
- [] 9. Add Yup for validation.
- [] 10. Tests with Jest and react-testlibrary



## Next
- [ ] Review Code and refactor code.
- [ ] Unit Tests Jest
- [ ] Make Responsive both S.O
- [ ] Review Back-end





## Install
- Install: Node JS, React JS .
- Download or clone this Repository.
- npm install ou yarn to download dependecies.
- npm start yarn start to init







