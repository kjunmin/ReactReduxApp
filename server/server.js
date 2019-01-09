import { getBusSchedule }from "./services/index";
import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/getService/:busStopCode', (req, res) => {
  const busStopCode = req.params.busStopCode;
  getBusSchedule(busStopCode).then(res => res.json())
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