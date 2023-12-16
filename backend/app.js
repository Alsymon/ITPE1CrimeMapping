const express = require("express");
const bodyParser = require("body-parser");
const { getRoutes } = require("./routes");
const cors = require('cors');



async function configureApp(pool) {
  console.log("Entering configuration");
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

  app.get('/crimeStatistics', (req, res) => {
    const query = 'SELECT crimeType, COUNT(*) as totalCount FROM crimes GROUP BY crimeType';
    
    db.query(query, (error, results) => {
      if (error) {
        console.error('Error fetching crime statistics:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      res.json(results);
    });
  });
  app.set("db", pool);
  //FIXME:
  //   !app.get("/", (req, res) => {
  //     res.send("API Works!");
  //   });
  getRoutes(app);

  app.listen(3000, function () {
    console.log("Listening to port 3000");
  });
  console.log("Exiting configuration.");
  return app;
}

exports.configureApp = configureApp;