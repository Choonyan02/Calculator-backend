const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (request, response) => {
  const status = {
     "Status": "Running?"
  };
  
  response.send(status);
});

app.use(cors());

app.post("/add", (request, response) => {
  const number1 = request.body.number1;
  const number2 = request.body.number2;
  const result = Number(number1) + Number(number2);

  const status = {
     "result": result
  };
  
  response.send(status);
});


app.post("/subtract", (request, response) => {
  const number1 = request.body.number1;
  const number2 = request.body.number2;
  const result = Number(number1) - Number(number2);

  const status = {
     "result": result
  };
  
  response.send(status);
});

module.exports = app;

