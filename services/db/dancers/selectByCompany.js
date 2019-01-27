module.exports = (knex, Dancer) => {
  return (params) => {
    return knex("dancers")
      .select()
      .then((dancers) => {
        return dancers.filter((dancer) => {
          return (
            dancer.company_name.toLowerCase() === params.company.toLowerCase()
          );
        });
      })
      .then((dancers) => {
        return dancers.map((dancer) => new Dancer(dancer));
      })
      .catch((err) => {
        throw err;
      });
  };
};
