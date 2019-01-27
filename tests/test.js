const { expect } = require("chai");
const Knex = require("knex");
const mockKnex = require("mock-knex");
// const config = require("../config");
// const sinon = require("sinon");

const knex = Knex({
  client: "pg",
  port: 6543,
});

mockKnex.mock(knex);

const db = () => {
  return {
    balletCompanies: require("../services/db/balletCompanies")(knex),
    dancers: require("../services/db/dancers")(knex),
  };
};

const tracker = mockKnex.getTracker();

// const stubInsert = sinon.stub(knex, "insert");
// const stubInsert = sinon.stub(knex, "insert");

describe("balletCompanies", () => {
  const balletCompany = [{ name: "Random", country: "China", city: "Beijing" }];
  tracker.install();
  // describe("setup", () => {
  //   const stub = sinon.stub(knex("balletCompanies"), "select");
  //   it("has run the initial migrations", () =>
  //     knex("balletCompanies")
  //       .select()
  //       .catch((e) => console.log(e)));
  //   sinon.assert.calledOnce(stub);
  // });

  describe("#selectAll", () => {
    // const stub = sinon.stub(db.balletCompanies, "selectAll");
    // stub.resolves([{ dt: "dt" }]);
    // afterEach(() => knex("balletCompanies").del()); // delete all companies after each spec
    beforeEach(() => {
      tracker.on("query", (query) => {
        query.response(balletCompany);
      });
    });

    it("should be able to display all the ballet companies", () => {
      db()
        .balletCompanies.selectAll()
        .then((selected) => {
          // TODO: how can I stub?
          console.log(selected);
          // sinon.assert.calledOnce(stub);
          expect(selected).to.deep.equal(balletCompany);
        });
    });
  });

  describe("#selectCountry", () => {
    // const stub = sinon.stub(db.balletCompanies, "selectByCountry");
    // stub.resolves([{ dt: "dt" }]);
    beforeEach(() =>
      stub.resolves(Promise.resolve([{ name: "Sample", country: "great" }]))
    );

    it("should be able to select ballet companies of the specific country", () => {
      db.balletCompanies.selectByCountry().then((selected) => {
        console.log(selected);
        // sinon.assert.calledOnce(stub);
        expect(selected[0].country).to.equal("great");
      });
    });
  });

  describe("#add", () => {
    // const stub = sinon.stub(db.balletCompanies, "add");
    let params = { id: 0, name: "", country: "", city: "" };

    before(() => {
      params.name = "Sample company";
      params.country = "Japan";
      params.city = "Tokyo";
      stub.resolves([params]);
    });

    // afterEach(() => knex("balletCompanies").del()); // delete all companies after each spec

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
  // describe("setup", () => {
  //   it("has run the initial migrations", () =>
  //     knex("dancers")
  //       .select()
  //       .catch((e) => console.log(e)));
  // });

  describe("#selectAll", () => {
    // const stub = sinon.stub(knex("dancers"), "select");
    // stub.resolves([{ dt: "dt" }]);
    // afterEach(() => knex("dancers").del()); // delete all companies after each spec

    it("should be able to display all the ballet dancers", () => {
      db.dancers.selectAll().then((selected) => {
        // TODO: how can I stub?
        console.log(selected);
        // sinon.assert.calledOnce(stub);
      });
    });
  });

  describe("#selectByCompany", () => {
    // const stub = sinon.stub(db.dancers, "selectByCompany");
    // stub.resolves([{ dt: "dt", country: "great" }]);
    it("should display all the dancers of the specific company", () => {});
  });
});
