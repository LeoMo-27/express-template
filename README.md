# Express Template

An Express template that uses:

* [Node 16.x](https://nodejs.org/en/)
* [Express.js 4](https://expressjs.com/) 
* [Sequelize v6](https://sequelize.org/)
* [PostgreSQL](https://www.postgresql.org/)
* [Yarn](https://yarnpkg.com/)

This template is free to use and can be used for any purpose. Also, you can change it however you want. The folder distribution is just to show I would like it to be distributed.

## Setup

### Env Variables

First you will need to create a .env file in the root of your project. This file will contain the following information:

```text
PORT: By default 3000, but you can change it with this variable
DB_USERNAME: The username for your database
DB_PASSWORD: The password for your database
DB_NAME: The name of your database
DB_PORT: The port in which your database is running (by default 5432)
JWT_SECRET: The secret key used to sign the JWT token
```

### Running the project

To run this project you can either use [docker-compose](https://docs.docker.com/compose/) or run it manually.

If you choose to use docker-compose, you can run the following command to start the project:

```bash
docker-compose up
```

And that's it!

If you choose to run the project manually, you will need to install the following programs:

* [Node 16.x](https://nodejs.org/en/)
* [PostgreSQL](https://www.postgresql.org/)
* [Yarn](https://yarnpkg.com/)

Then you must install the dependencies using the following command:

```bash
yarn install
```
Finally, you can run the project in development mode using the following command:

```bash
yarn dev
```

This command will reset the server every time a file changes.

If you wish to run the project normally, you can run the following command:

```bash
yarn start
```

## Extra packages
I also included some extra packages that I use in my projects, if you want to remove them feel free to do it!
* [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) to hash user passwords.
* [Dotenv](https://github.com/motdotla/dotenv) to read .env files.
* [Eslint](https://eslint.org/) with airbnb configuration, to check code quality.
* [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) to generate auth tokens.

## Extra

This template also includes a User CRUD. If you wish to remove it, please **feel free to do it!** I just included it to show you how I would use this template. 