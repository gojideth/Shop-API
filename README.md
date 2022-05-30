
# Shop API

This projects consists in an API for a shop that sells books and products, it allows to make a CRUD 
to both entities, register, login and buy products and books.



## Stack used

- GraphQL
- Node.js
- PostgreSQL
- Apollo-Server
- Prisma 
- Docker

Requirements
------------

Shop-API requires the following to run (I recommend it to run on Linux or WSL2):
 


  * [Node.js][node] v16.14.2
  * [npm][npm] (normally comes with Node.js)
  * [Docker][docker] and [Docker compose]
  * [npx]



[node]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[docker]: [https://docs.docker.com/desktop/linux/install/ubuntu/](https://docs.docker.com/engine/install/ubuntu/)
[Docker compose]:https://docs.docker.com/compose/install/
[npx]:https://www.npmjs.com/package/npx
## Run Locally

Clone the project

```bash
  git clone https://github.com/gojideth/Shop-API
```

Go to the project directory

```bash
  cd Shop-API
```

Install dependencies

```bash
  npm install
```

Launch the PostgreSQL database server with the following command

```bash
  docker-compose up -d
```

Once the PostgreSQL database is running go ahead and start the server

```bash
  npm run start
```


## Features

- CRUD to the products and books
- Creation of the shopping cart
- Login and CRUD to the users
- Buy products
- Database connection
- Use of Prisma's ORM

