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
    balletCompaniesByCountry(country: String): [BalletCompany]
    Dancers: [Dancer]
    dancersByCompany(company: String): [Dancer]
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
  balletCompaniesByCountry: (req) => {
    return db.balletCompanies.selectByCountry(req);
  },
  Dancers: () => {
    return db.dancers.selectAll();
  },
  dancersByCompany: (req) => {
    return db.dancers.selectByCompany(req);
  },
  addBalletCompany: (req) => {
    return db.balletCompanies.add(req);
  },
  addDancers: (req) => {
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
