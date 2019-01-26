module.exports = (knex, BalletCompanies) => {
  return () => {
    return knex("balletCompanies")
      .select()
      .catch((err) => {
        throw err;
      });
  };
};
