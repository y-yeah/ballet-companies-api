// const moment = require("moment");
// const dbDancers = require("../dancers");

class BalletCompany {
  constructor(dbBalletCompany) {
    this.id = dbBalletCompany.id;
    this.name = dbBalletCompany.name;
    this.country = dbBalletCompany.country;
    this.city = dbBalletCompany.city;
    // TODO: innerJoin with dbDancers
    this.dancers = [
      {
        firstName: "",
        lastName: "",
        rank: "",
        nationality: "",
        gender: "",
      },
    ];
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
    add: require("./add")(knex, BalletCompany),
    selectAll: require("./selectAll")(knex, BalletCompany),
    // list: require("./list")(knex, BalletCompany),
  };
};
