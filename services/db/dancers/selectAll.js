module.exports = (knex, Dancer) => {
  return () => {
    return knex("dancers")
      .select()
      .then((dancers) => {
        return dancers.map((dancer) => new Dancer(dancer));
      })
      .catch((err) => {
        throw err;
      });
  };
};
