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

  describe("#selectAll", () => {
    afterEach(() => knex("balletCompanies").del()); // delete all companies after each spec

    it("should be able to display all the ballet companies", () => {
      db.balletCompanies.selectAll().then(() => {
        // TODO: how can I stub?
        // sinon.assert.calledOnce(stubSelect);
      });
    });
  });

  describe("#add", () => {
    let params = { name: "", country: "", city: "" };

    before(() => {
      params.name = "Sample company";
      params.country = "Japan";
      params.city = "Tokyo";
    });

    afterEach(() => knex("balletCompanies").del()); // delete all companies after each spec

    it("should be able to add a company", () => {
      db.balletCompanies.add(params).then((companies) => {
        // sinon.assert.calledOnce(stubInsert);
        expect(companies[companies.length - 1]).to.include({
          name: params.name,
          country: params.country,
          city: params.city,
        });
        expect(companies[0].id).to.be.a("number");
      });
    });
  });
});

describe("dancers", () => {
  describe("setup", () => {
    it("has run the initial migrations", () =>
      knex("dancers")
        .select()
        .catch((e) => console.log(e)));
  });

  describe("#selectAll", () => {
    afterEach(() => knex("dancers").del()); // delete all companies after each spec

    it("should be able to display all the ballet companies", () => {
      db.dancers.selectAll().then(() => {
        // TODO: how can I stub?
        // sinon.assert.calledOnce(stubSelect);
      });
    });
  });
});
