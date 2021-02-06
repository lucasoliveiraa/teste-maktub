"# teste-maktub"  

### Requisitos

- [Node.js] (https://nodejs.org/en/)
- [Yarn] (https://classic.yarnpkg.com/) ou [npm] (https://www.npmjs.com/)
- Uma instância de [PostgreSQL] (https://www.postgresql.org/)

** Clone o projeto e acesse a pasta **

`` `bash
$ https://github.com/lucasoliveiraa/teste-maktub.git && cd backend
`` `

**Siga os passos abaixo**

`` `bash
# Instale as dependências
$ yarn

# Crie a instância do postgreSQL usando docker
# Assim que os serviços estiverem em execução, execute as migrações
$ yarn typeorm migration: run

# Para terminar, execute o serviço api
$ yarn dev: server

# Muito bem, o projeto foi iniciado!
`` `