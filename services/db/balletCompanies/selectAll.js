module.exports = (knex, BalletCompany) => {
  return () => {
    return knex("balletCompanies")
      .select()
      .catch((err) => {
        throw err;
      });
  };
};
