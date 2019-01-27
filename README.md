<h1 align="center">
<img src="./Ballet api.jpg" alt="Ballet API logo">
</h1>

<p align="center">This was created during my time as a student at Code Chrysalis.</p>
<p align="center"><b>LAST UPDATE</b>: 27 January 2018 (ver.1.0.0)</p>

---

# Table of Contents

- [**0. Introduction**](#-0.-introduction)
- [**1. Installation**](#-1.-installation-for-development)
- [**2. Features**](#-2.-features)
- [**3. Contribution**](#-3.-contribution)

---

## 0. Introduction

The Ballet API stores information of the ballet companies and the dancers belonging to them (no private information accepted).
The motivation of creating this is to hope to visualize gender and nationality equality in the ballet scene (if I can keep implementing this).

To set up this API, I used the frameworks and libraries such as followings.

<img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt="node.js" width="100px">
<img src="https://www.clipartmax.com/png/small/33-338445_open-source-vector-images-postgresql-logo.png" alt="PostgreSQL" width="100px">
<img src="https://montykamath.files.wordpress.com/2018/02/graphql.png" alt="GraphQL" width="100px">
<img src="https://knexjs.org/assets/images/knex.png" alt="Knex" width="100px">

Currently this API is at the experimental stage.

---

## 1. Installation for development

### **Step1**: Fork this repo

> Fork this repository to your GitHub account.

### **Step2**: Clone this repo to your local

> Make sure you are at the repository where you want to clone this API.

```
cd ~/<Where you want to clone>
```

> Clone this project locally.

```
git clone https://github.com/<Your GitHub Hundle>/ballet-companies-api
```

### **Step3**: Create a local database

> Make sure you have installed [PostgreSQL](https://www.postgresql.org/download/), and run PostgreSQl.

```
psql
```

> Create a database.

```
CREATE DATABASE ballet;
```

### **Step4**: Run yarn

> Install yarn at the project.

```
yarn
```

> Run a GraphQL API server.

```
yarn dev
```

> Make sure to create the tables and seed the data to them.

```
yarn migrate
yarn seed
```

### **Step5**: Open the GraphQL

> Open the following URL and you will be able to see the API in the browser.

```
localhost:4000/graphQL
```

---

## 2. Features

> Query

- all the ballet companies
- the ballet companies by a counry
- all the dancers
- the dancers by a company

> Mutation

- add a ballet company
- delete a ballet company
- modify a ballet company
- add a dancer

### FUTURE PLAN

> Query

- the ballet companies by a city
- the dancers by nationality
- the dancers by gender

> Mutation

- delete a dancer
- modify a dancer

and of course, many more columns and actual datas should be added.

---

## 3. Contribution

Contribution by anyone interested in this project is welcome. The contribution system will hopefully be provided soon.

---

**LICENSE**: CC7 YUMA SUMI

**Linkedin**: [Yuma Sumi](https://www.linkedin.com/in/yuma-sumi-15b8129a/)

**Twitter**: [@yumayeah](https://twitter.com/yumayeah)
