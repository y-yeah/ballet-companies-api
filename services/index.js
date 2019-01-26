const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
// The data below is mocked.
const config = require("../config");
const db = require("./db")(config.db);
const knex = require("knex")(config.db);

// The schema should model the full data object available.
const schema = buildSchema(`
  type Dancer {
    id: String!
    firstName: String
    lastName: String
    companyName: String
    nationality: String
    gender: String
  }
  type BalletCompany {
    id: String!
    name: String
    country: String
    city: String
    dancers: [Dancer]
  }
  type Query {
    BalletCompanies: [BalletCompany]
    Dancers: [Dancer]
  }
  type Mutation {
    addBalletCompany(name: String, country: String, city: String): [BalletCompany]
    addDancers(firstName: String, lastName: String, companyName: String, nationality: String, gender: String): [Dancer]
  }
`);

const root = {
  BalletCompanies: () => {
    return db.balletCompanies.selectAll();
  },
  addBalletCompany: (req) => {
    console.log(req);
    return db.balletCompanies.add(req);
  },
  Dancers: () => {
    return db.dancers.selectAll();
  },
  addDancers: (req) => {
    console.log(req);
    return db.dancers.add(req);
  },
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
});
