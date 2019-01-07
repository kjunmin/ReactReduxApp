const express = require('express');
const app = express();
const cors = require('cors');
const fetch = require("node-fetch");
const port = process.env.PORT || 5000;


app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/getService', (req, res) => {
  const uri = "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=83139";

  const headers = {
      AccountKey: "*",
      accept: "application/json"
  }

  fetch(uri, {
    method: 'GET',
    headers: headers
  }).then(res => res.json())
      .then(response => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(response))
      });
  
})

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

  // console.log that your server is up and running
  app.listen(port, () => console.log(`Listening on port ${port}`));