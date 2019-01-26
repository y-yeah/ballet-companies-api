const { expect } = require("chai");
const config = require("../config");
const knex = require("knex")(config.db);
const sinon = require("sinon");
const db = require("../services/db")(config.db);

const stubInsert = sinon.stub(knex, "insert");
const stubSelect = sinon.stub(knex, "select");

describe("balletCompanies", () => {
  describe("setup", () => {
    it("has run the initial migrations", () =>
      knex("balletCompanies")
        .select()
        .catch((e) => console.log(e)));
  });
  describe("#create", () => {
    let params = { name: "", country: "", city: "" };

    before(() => {
      params.name = "Company";
      params.country = "Japan";
      params.city = "Tokyo";
    });

    afterEach(() => knex("users").del()); // delete all users after each spec

    it("creates a company", () => {
      db.companies.create(params).then((company) => {
        expect(company).to.include({
          name: params.name,
          country: params.country,
          city: params.city,
        });
        expect(company.id).to.be.a("number");
      });
    });
  });
});
