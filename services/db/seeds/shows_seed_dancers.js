exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex("dancers")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("dancers").insert([
        {
          first_name: "Stella",
          last_name: "Abrera",
          company_name: "American Ballet Theater",
          gender: "F",
          nationality: "USA",
        },
        {
          first_name: "Roberto",
          last_name: "Bolle",
          company_name: "American Ballet Theater",
          gender: "M",
          nationality: "Italy",
        },
        {
          first_name: "Isabella",
          last_name: "Boylston",
          company_name: "American Ballet Theater",
          gender: "F",
          nationality: "USA",
        },
        {
          first_name: "Misty",
          last_name: "Copeland",
          company_name: "American Ballet Theater",
          gender: "F",
          nationality: "USA",
        },
        {
          first_name: "Herman",
          last_name: "Cornejo",
          company_name: "American Ballet Theater",
          gender: "M",
          nationality: "Argentine",
        },
        {
          first_name: "David",
          last_name: "Hallberg",
          company_name: "American Ballet Theater",
          gender: "M",
          nationality: "USA",
        },
        {
          first_name: "Sarah",
          last_name: "Lane",
          company_name: "American Ballet Theater",
          gender: "F",
          nationality: "USA",
        },
        {
          first_name: "Alban",
          last_name: "Lendorf",
          company_name: "American Ballet Theater",
          gender: "M",
          nationality: "Denmark",
        },
        {
          first_name: "Gillian",
          last_name: "Murphy",
          company_name: "American Ballet Theater",
          gender: "F",
          nationality: "USA",
        },
        {
          first_name: "Hee",
          last_name: "Seo",
          company_name: "American Ballet Theater",
          gender: "F",
          nationality: "South Korea",
        },
        {
          first_name: "Christine",
          last_name: "Shevchenko",
          company_name: "American Ballet Theater",
          gender: "F",
          nationality: "Ukraine",
        },
        {
          first_name: "Daniil",
          last_name: "Simkin",
          company_name: "American Ballet Theater",
          gender: "M",
          nationality: "Russia",
        },
        {
          first_name: "Cory",
          last_name: "Stearns",
          company_name: "American Ballet Theater",
          gender: "M",
          nationality: "USA",
        },
        {
          first_name: "Devon",
          last_name: "Teuscher",
          company_name: "American Ballet Theater",
          gender: "F",
          nationality: "USA",
        },
        {
          first_name: "James",
          last_name: "Whiteside",
          company_name: "American Ballet Theater",
          gender: "M",
          nationality: "USA",
        },
      ]);
    });
};
