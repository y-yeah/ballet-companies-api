// const validateUsername = (uName) =>
//   typeof uName === "string" && uName.replace(" ", "").length > 5;

module.exports = (knex, BalletCompany) => {
  return (params) => {
    // if (!validateUsername(params.name)) {
    // return new Promise((resolve, reject) => {
    //   reject(
    //     new Error(
    //       "The company name must be provided, and be at least five characters"
    //     )
    //   );
    // });
    // }

    return knex("balletCompanies")
      .insert({
        name: params.name,
        country: params.country,
        city: params.city,
      })
      .then(() => {
        return (
          knex("balletCompanies")
            // .where({
            //   name: params.name,
            //   country: params.country,
            //   city: params.city,
            // })
            .select()
        );
      })
      .then((balletCompanies) => {
        return balletCompanies.map((company) => new BalletCompany(company));
      })
      .catch((err) => {
        // sanitize known errors
        if (err.message.match("duplicate key value"))
          throw new Error("That company name already exists");

        // throw unknown errors
        throw err;
      });
  };
};
