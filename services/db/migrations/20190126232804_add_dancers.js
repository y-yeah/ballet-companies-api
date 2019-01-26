exports.up = function(knex, Promise) {
  return knex.schema.createTable("dancers", (t) => {
    t.increments().index();
    t.string("first_name", 20)
      .notNullable()
      .index();
    t.string("last_name", 20)
      .notNullable()
      .index();
    t.string("company_name", 40)
      .notNullable()
      .index()
      .unsigned();
    t.string("nationality", 20)
      // .notNullable()
      .index();
    t.string("gender", 10)
      // .notNullable()
      .index();

    // t.foreign("companyName").references("balletCompanies.name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("dancers");
};
