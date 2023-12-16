const Sequelize = require("sequelize");
require("dotenv").config();

async function connectToDB() {
  const sequelize = new Sequelize("db_crud", "root", "alsymon12", {
    host: "localhost",
    dialect: "mysql",
  });
  const Admin = require("../model/Admin")(sequelize);
  const Crime = require("../model/Crime")(sequelize);


 Admin.hasMany(Crime, { foreignKey: 'adminUsername' });
 Crime.belongsTo(Admin, { foreignKey: 'adminUsername' });

  await sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database: ", error);
    });

  await sequelize
    .sync({ force: false }) // Set force to true to drop and recreate tables on each sync
    .then(() => {
      console.log("Database synchronized");
    })
    .catch((error) => {
      console.error("Error synchronizing database:", error);
    });
}

exports.connectToDB = connectToDB;
