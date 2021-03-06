# MuseStream - Backend

Projekt pre predmet MTAA 2022 - Sebastian Petrik a Stefan Otto Novak.

## Links
- db model https://dbdiagram.io/d/62279eb761d06e6eadc66795
- api docs https://app.swaggerhub.com/apis-docs/Plasmoxy/MTAA-api/1

## Setup

- clone project repository
- install Node.js - version 16 LTS - https://nodejs.org/dist/v16.14.1/node-v16.14.1-x86.msi
- make sure Node.js is in PATH so you can run commands (make sure `npm` command is available in your terminal)
- use VS Code - download Prettier extension, Prisma extension
- tip: use Alt+Shift+F to format code in file
- open project folder in terminal (for example vscode integrated terminal)
- install packages by running
```
npm i
```
- create .env file in root of project and add database connection url to it, it should look like this: (you must set name and password to your own)
```
DATABASE_URL="postgresql://name:password@localhost:5432/musestream-db?schema=public"
```
- activate Prisma reset migration and database initialisation
```
npm run init
```
- start the server by running
```
npm start
```