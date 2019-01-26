// const validateUsername = (uName) =>
//   typeof uName === "string" && uName.replace(" ", "").length > 5;

module.exports = (knex, Dancer) => {
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

    return knex("dancers")
      .insert({
        first_name: params.firstName,
        last_name: params.lastName,
        company_name: params.companyName,
        gender: params.gender,
        nationality: params.nationality,
      })
      .then(() => {
        return knex("dancers").select();
      })
      .then((dancers) => {
        return dancers.map((dancer) => new Dancer(dancer));
      })
      .catch((err) => {
        // sanitize known errors
        if (err.message.match("duplicate key value"))
          throw new Error("That dancer's name already exists");

        // throw unknown errors
        throw err;
      });
  };
};
