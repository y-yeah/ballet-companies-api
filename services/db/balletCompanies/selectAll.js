module.exports = (knex, BalletCompanies) => {
  return (params) => {
    return knex("balletCompanies").select();
  };
};
