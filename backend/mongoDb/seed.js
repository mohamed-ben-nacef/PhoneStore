const { db } = require("./index.js");
const phone = require("./product.js");

const sampleData = require("../../frontend/src/data.json");

const insertSamplePhones = function () {
  phone.create(sampleData)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};

insertSamplePhones();