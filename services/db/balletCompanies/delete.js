module.exports = (knex, BalletCompany) => {
  return (params) => {
    return knex("balletCompanies")
      .where("id", params.id)
      .del()
      .then(() => {
        return knex("balletCompanies").select();
      })
      .then((balletCompanies) => {
        return balletCompanies.map((company) => new BalletCompany(company));
      })
      .catch((err) => {
        // throw unknown errors
        throw err;
      });
  };
};
