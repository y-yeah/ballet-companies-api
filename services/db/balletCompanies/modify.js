module.exports = (knex, BalletCompany) => {
  return (params) => {
    return (
      knex("balletCompanies")
        .where("id", params.id)
        //   .update(params.toBe)
        .then((companies) => {
          companies.forEach((company) => {
            for (const key in params.toBe) {
              company[key] = params.toBe[key];
            }
          });
          return companies;
        })
        .then((companies) => {
          return companies.map((company) => new BalletCompany(company));
        })
        .catch((err) => {
          // throw unknown errors
          throw err;
        })
    );
  };
};
