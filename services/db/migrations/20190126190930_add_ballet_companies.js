exports.up = function(knex, Promise) {
  return knex.schema.createTable("balletCompanies", (t) => {
    t.increments().index();
    t.string("name", 30)
      .unique()
      .notNullable()
      .index();
    t.string("country", 20)
      // .notNullable()
      .index();
    t.string("city", 20)
      // .notNullable()
      .index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("balletCompanies");
};
