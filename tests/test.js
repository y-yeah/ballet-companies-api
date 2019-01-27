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
    { id: 0, name: "Random", country: "China", city: "Beijing" },
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
          expect(selected[0].country).to.equal("China");
        });
    });
  });

  describe("#add", () => {
    let params;
    before(() => {
      params = {
        id: 1,
        name: "Sample company",
        country: "Japan",
        city: "Tokyo",
      };
      balletCompanies.push(params);
    });
    after(() => {
      balletCompanies.pop();
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
      id: 0,
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
          expect(selected[0].id).to.equal(dancers[0].id);
          expect(selected[0].firstName).to.equal(dancers[0].first_name);
        });
    });
  });

  describe("#selectByCompany", () => {
    it("should display all the dancers of the specific company", () => {
      db()
        .dancers.selectByCompany({ company: "American Ballet Theater" })
        .then((selected) => {
          expect(selected[0]).to.equal(undefined);
        });
      db()
        .dancers.selectByCompany({ company: "Spy company" })
        .then((selected) => {
          expect(selected[0].firstName).to.equal(dancers[0].first_name);
        });
    });
  });

  describe("#add", () => {
    let params;
    before(() => {
      params = {
        id: 1,
        first_name: "Mr.",
        last_name: "Batman",
        nationality: "Gotham",
        gender: "M",
      };
      dancers.push(params);
    });
    after(() => {
      dancers.pop();
    });

    it("should be able to add a company", () => {
      db()
        .dancers.add(params)
        .then((dancers) => {
          expect(dancers[dancers.length - 1]).to.include({
            firstName: params.first_name,
            lastName: params.last_name,
            nationality: params.nationality,
            gender: params.gender,
          });
          expect(dancers[0].id).to.be.a("number");
        });
    });
  });
});
