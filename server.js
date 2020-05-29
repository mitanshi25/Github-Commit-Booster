const fs = require("fs");
const { execSync } = require("child_process");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/commit", (req, res) => {
  console.log("Got a new commit");

  var result = "";

  var rand = Math.random();
  rand = Math.round(rand * 1000 + 1);
  var str = `This is ${rand} line`;

  setTimeout(() => {
    fs.writeFileSync("data.txt", str, "utf8");
  }, 1000);

  setTimeout(() => {
    fs.readFile("data.txt", (e, data) => {
      console.log(data.toString());
      result = result + data.toString();
    });
  }, 2000);

  setTimeout(() => {
    execSync(`git add .`);
  }, 3000);

  setTimeout(() => {
    var result = execSync(`git commit -m "this is ${rand}th commit`);
    console.log(result.toString());
    result = result + result.toString();
  }, 5000);

  setTimeout(() => {
    var result = execSync(`git push origin master`);
    console.log(result.toString());
    result = result + result.toString();
  }, 10000);

  res.send(result);
});

app.listen(8082, () => console.log("server listening on port 8082"));
