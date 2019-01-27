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

describe("balletCompanies", () => {
  const balletCompanies = [
    { id: "001", name: "Random", country: "China", city: "Beijing" },
  ];
  tracker.install();
  // describe("setup", () => {
  //   it("has run the initial migrations", () =>
  //     knex("balletCompanies")
  //       .select()
  //       .catch((e) => console.log(e)));
  // });
  beforeEach(() => {
    tracker.on("query", (query) => {
      query.response(balletCompanies);
    });
  });

  describe("#selectAll", () => {
    it("should be able to display all the ballet companies", () => {
      db()
        .balletCompanies.selectAll()
        .then((selected) => {
          expect(selected[0].id).to.equal(balletCompanies[0].id);
          expect(selected[0].name).to.equal(balletCompanies[0].name);
        });
    });
  });

  describe("#selectByCountry", () => {
    it("should be able to select ballet companies of the specific country", () => {
      db()
        .balletCompanies.selectByCountry({ country: "China" })
        .then((selected) => {
          console.log(selected);
          // sinon.assert.calledOnce(stub);
          expect(selected[0].country).to.equal("China");
        });
    });
  });

  describe("#add", () => {
    let params = { id: 0, name: "", country: "", city: "" };

    before(() => {
      params.name = "Sample company";
      params.country = "Japan";
      params.city = "Tokyo";
    });

    it("should be able to add a company", () => {
      db()
        .balletCompanies.add(params)
        .then((companies) => {
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
  const dancers = [
    {
      id: "001",
      first_name: "Ran",
      last_name: "dom",
      company_name: "Spy company",
      nationality: "Underworld",
      gender: "M",
    },
  ];
  tracker.install();

  beforeEach(() => {
    tracker.on("query", (query) => {
      query.response(dancers);
    });
  });

  // describe("setup", () => {
  //   it("has run the initial migrations", () =>
  //     knex("dancers")
  //       .select()
  //       .catch((e) => console.log(e)));
  // });

  describe("#selectAll", () => {
    it("should be able to display all the ballet dancers", () => {
      db()
        .dancers.selectAll()
        .then((selected) => {
          console.log(selected);
          expect(selected[0].id).to.equal(dancers[0].id);
          expect(selected[0].first_name).to.equal(dancers[0].first_name);
        });
    });
  });

  describe("#selectByCompany", () => {
    it("should display all the dancers of the specific company", () => {});
  });
});
