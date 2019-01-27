module.exports = (knex, Dancer) => {
  return () => {
    return knex("dancers")
      .select()
      .catch((err) => {
        throw err;
      });
  };
};
