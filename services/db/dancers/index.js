class Dancer {
  constructor(dbDancers) {
    this.id = dbDancers.id;
    this.name = dbDancers.name;
    this.companyName = dbDancers.companyName;
    // this.company_id = dbDancers.company_name;
    this.nationality = dbDancers.nationality;
    this.gender = dbDancers.gender;
  }
}

module.exports = (knex) => {
  return {
    selectAll: require("./selectAll")(knex, Dancer),
    add: require("./add")(knex, Dancer),
    // selectByCompany: require("./selectByCompany")(knex, Dancer),
  };
};
