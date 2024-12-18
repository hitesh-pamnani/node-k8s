const express = require("express");
const app = express();

app.get("/", function (request, response) {
  response.send("Welcome to Node K8S App!");
});

app.listen(3000, function () {
  console.log("Node K8S App running on 3000");
});
