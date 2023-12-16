const {
  loginAdmin,
  addAdmin,
  addCrime,
  findAllCrimes,
  findAllAdmin,
  deleteCrime,
  updateCrime,
  deleteAdmin,
  updateAdmin,
} = require("./crudRoutes");

function getRoutes(app) {
  app.post("/login/user",loginAdmin);
  app.post("/user-management/add-admin", addAdmin);
  app.post("/crime-list/add-crime",addCrime);
  app.post("/findAllCrime/list", findAllCrimes);
  app.post("/findAllAdmin/admin", findAllAdmin);
  app.delete("/delete/crime/:id",deleteCrime);
  app.put("/update/crime/:id", updateCrime); 
  app.delete("/delete/admin/:id", deleteAdmin);
  app.put("/update/admin/:id", updateAdmin);
}

exports.getRoutes = getRoutes;