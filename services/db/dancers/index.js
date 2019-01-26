class Dancer {
  constructor(dbDancers) {
    this.id = dbDancers.id;
    this.firstName = dbDancers.first_name;
    this.lastName = dbDancers.last_name;
    this.companyName = dbDancers.company_name;
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
