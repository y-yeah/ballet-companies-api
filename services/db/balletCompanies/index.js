// const moment = require("moment");
// const config = require("../../../config");
// const db = require("..")(config.db);

class BalletCompany {
  constructor(dbBalletCompany) {
    this.id = dbBalletCompany.id;
    this.name = dbBalletCompany.name;
    this.country = dbBalletCompany.country;
    this.city = dbBalletCompany.city;
    // TODO: only dancers in this company
    // this.dancers = dbDancers.selectByCompany(this.name);
    // this.dancers = db.dancers.selectAll();
  }
  //   serialize() {
  //     return {
  //       id: this.id,
  //       username: this.username,
  //       createdAt: moment(this.createdAt).format("hh:mm:ss"),
  //     };
  //   }
}

module.exports = (knex) => {
  return {
    selectAll: require("./selectAll")(knex, BalletCompany),
    add: require("./add")(knex, BalletCompany),
    // list: require("./list")(knex, BalletCompany),
  };
};
