module.exports = (knex, BalletCompanies) => {
  return (params) => {
    return knex("balletCompanies")
      .insert({
        name: params.name,
        country: params.country,
        city: params.city,
      })
      .then(() => {
        return knex("balletCompanies")
          .where({
            name: params.name,
            country: params.country,
            city: params.city,
          })
          .select();
      })
      .then((balletCompanies) => {
        return new BalletCompanies(balletCompanies.pop());
      });
  };
};
