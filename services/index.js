const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
// The data below is mocked.
const config = require("../config");
const db = require("./db")(config.db);

// The schema should model the full data object available.
const schema = buildSchema(`
  type Dancer {
    firstName: String
    lastName: String
    rank: String
    nationality: String
    gender: String
  }
  type BalletCompany {
    id: String
    companyName: String
    country: String
    city: String
    dancers: [Dancer]
  }
  type Query {
    BalletCompanies: [BalletCompany]
  }
  type Mutation {
    addBalletCompany(name: String): [BalletCompany]
  }
`);

const root = {
  BalletCompanies: () => {
    return db.balletCompanies.get();
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
