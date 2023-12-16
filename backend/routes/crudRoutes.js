const DBModel = require("../lib/DBModel");


function loginAdmin(req, res) {
  DBModel.loginAdmin(req, res);
}

function addAdmin(req, res) {
  DBModel.addAdmin(req, res);
}

function addCrime(req, res) {
  DBModel.addCrime(req, res);
}

function findAllCrimes(req, res){
  DBModel.findAllCrimes(req, res);
}
function findAllAdmin(req, res){
  DBModel.findAllAdmin(req, res);
}
function deleteCrime(req,res){
  DBModel.deleteCrime(req, res);
}
function updateCrime(req, res){
  DBModel.updateCrime(req,res);
}
function deleteAdmin(req, res){
  DBModel.deleteAdmin(req, res);
}
function updateAdmin(req, res){
  DBModel.updateAdmin(req, res);
}

exports.loginAdmin = loginAdmin;
exports.addAdmin = addAdmin;
exports.addCrime = addCrime;
exports.findAllCrimes = findAllCrimes;
exports.findAllAdmin = findAllAdmin;
exports.deleteCrime = deleteCrime;
exports.updateCrime = updateCrime;
exports.deleteAdmin = deleteAdmin;
exports.updateAdmin = updateAdmin;