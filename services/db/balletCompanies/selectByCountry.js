module.exports = (knex, BalletCompany) => {
  return (params) => {
    return knex("balletCompanies")
      .select()
      .then((companies) => {
        return companies.filter((company) => {
          return company.country.toLowerCase() === params.country.toLowerCase();
        });
      })
      .then((companies) => {
        return companies.map((company) => new BalletCompany(company));
      })
      .catch((err) => {
        throw err;
      });
  };
};
