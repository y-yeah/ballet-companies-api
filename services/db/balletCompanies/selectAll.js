module.exports = (knex, BalletCompany) => {
  return () => {
    return knex("balletCompanies")
      .select()
      .then((companies) => {
        return companies.map((company) => new BalletCompany(company));
      })
      .catch((err) => {
        throw err;
      });
  };
};
