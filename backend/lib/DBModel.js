const Sequelize = require("sequelize");
const sequelize = new Sequelize("db_crud", "root", "alsymon12", {
  host: "localhost",
  dialect: "mysql",
});
const { Op } = require('sequelize');
const Admin = require('../model/Admin')(sequelize);
const Crime = require('../model/Crime')(sequelize);
const bcrypt = require('bcrypt');

async function findAllCrimes(req, res) {
  try {
    const crimes = await Crime.findAll();
    res.json(crimes.map((crime) => crime.toJSON()));
  } catch (error) {
    console.error("Error fetching crimes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function findAllAdmin(req, res) {
  try {
    const admin = await Admin.findAll();
    res.json(admin.map((admin) => admin.toJSON()));
  } catch (error) {
    console.error("Error fetching crimes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

function addAdmin(req, res) {
  const body = req.body;
  const { username, password,position } = body;
  try {
    Admin.create({
      username: username,
      password: password,
      position: position,
    }).then((newAdmin) => {
      res.json({
        admin: newAdmin.toJSON(), 
      }
      )      
    });
  }  catch (error) {
    console.error(error); 
    res.json({
      error: "An error occurred while creating the admin user",
    });
  }
}

async function deleteAdmin(req, res) {
  const adminId = req.params.id; // Assuming the admin ID is passed in the URL

  try {
    const admin = await Admin.findByPk(adminId);

    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    await admin.destroy();

    res.json({ message: 'Admin deleted successfully' });
  } catch (error) {
    console.error('Error deleting admin:', error);

    res.status(500).json({
      error: 'An error occurred while deleting the admin.',
    });
  }
}

async function updateAdmin(req, res) {
  const adminId = req.params.id; // Assuming the admin ID is passed in the URL
  const { username, password, position } = req.body;

  try {
    const existingAdmin = await Admin.findByPk(adminId);

    if (!existingAdmin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    // Update admin details
    existingAdmin.username = username || existingAdmin.username;
    existingAdmin.password = password || existingAdmin.password;
    existingAdmin.position = position || existingAdmin.position;

    // Save the updated admin details to the database
    await existingAdmin.save();

    res.json({ message: 'Admin updated successfully', updatedAdmin: existingAdmin.toJSON() });
  } catch (error) {
    console.error('Error updating admin:', error);

    res.status(500).json({
      error: 'An error occurred while updating the admin.',
    });
  }
}

async function addCrime(req, res) {
  const body = req.body;
  const { crime, location, date, status, report, coordinates } = body;
  console.log('Received payload:', body);
  try {
    const newCrime = await Crime.create({
      crime: crime,
      location: location,
      date: date,
      status: status,
      report: report,
      coordinates: coordinates, // No need to parse here
    });

    res.json({
      Crime: newCrime.toJSON(),
    });
    
  } catch (error) {
    console.error('Error adding crime:', error);

    res.status(500).json({
      error: 'An error occurred while adding the crime.',
    });
  }
}

async function deleteCrime(req, res) {
  const crimeId = req.params.id; // Assuming the crime ID is passed in the URL

  try {
    const crime = await Crime.findByPk(crimeId);

    if (!crime) {
      return res.status(404).json({ error: 'Crime not found' });
    }

    await crime.destroy();

    res.json({ message: 'Crime deleted successfully' });
  } catch (error) {
    console.error('Error deleting crime:', error);

    res.status(500).json({
      error: 'An error occurred while deleting the crime.',
    });
  }
}

async function updateCrime(req, res) {
  const crimeId = req.params.id; // Assuming the crime ID is passed in the URL
  const { crime, location, date, status, report, coordinates } = req.body;

  try {
    const existingCrime = await Crime.findByPk(crimeId);

    if (!existingCrime) {
      return res.status(404).json({ error: 'Crime not found' });
    }

    // Update crime details
    existingCrime.crime = crime || existingCrime.crime;
    existingCrime.location = location || existingCrime.location;
    existingCrime.date = date || existingCrime.date;
    existingCrime.status = status || existingCrime.status;
    existingCrime.report = report || existingCrime.report;
    existingCrime.coordinates = coordinates || existingCrime.coordinates;

    // Save the updated crime details to the database
    await existingCrime.save();

    res.json({ message: 'Crime updated successfully', updatedCrime: existingCrime.toJSON() });
  } catch (error) {
    console.error('Error updating crime:', error);

    res.status(500).json({
      error: 'An error occurred while updating the crime.',
    });
  }
}



function loginAdmin(req, res) {
  const { username, password } = req.body;

  try {
    
    Admin.findOne({ where: { username: username } })
    .then((admin) => {
      if (!admin || !bcrypt.compareSync(password, admin.password)) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      res.json({ message: 'Login successful' });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}




exports.addAdmin = addAdmin;
exports.loginAdmin = loginAdmin;
exports.addCrime = addCrime;
exports.findAllCrimes = findAllCrimes;
exports.findAllAdmin = findAllAdmin;
exports.deleteCrime = deleteCrime;
exports.updateCrime = updateCrime;
exports.deleteAdmin = deleteAdmin;
exports.updateAdmin = updateAdmin;