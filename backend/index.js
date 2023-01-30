const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MySQLBananeuh2!",
  database: "crew",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

app.get("/member/get", (req, res) => {
  const q = "SELECT * FROM member";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/member/add", (req, res) => {
  const q = "INSERT INTO member (`name`,`role`) VALUE (?)";
  const values = [req.body.name, req.body.role];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.delete("/member/:id", (req, res) => {
  const memberId = req.params.id;
  const q = "DELETE FROM member WHERE id = ?";

  db.query(q, [memberId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log(`Server is running`);
});
