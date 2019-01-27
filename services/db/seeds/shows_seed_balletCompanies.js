exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex("balletCompanies")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("balletCompanies").insert([
        {
          name: "American Ballet Theater",
          country: "USA",
          city: "New York",
        },
      ]);
    });
};
