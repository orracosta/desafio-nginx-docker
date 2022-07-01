const express = require("express");
const faker = require("faker");
const { createConnection } = require("mysql");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

app.get("/", (req, res) => {
  const name = faker.name.findName();

  const connection = createConnection(config);

  connection.query(`
    CREATE TABLE IF NOT EXISTS people(
      id INT NOT NULL AUTO_INCREMENT, 
      name VARCHAR(50) NOT NULL,
      PRIMARY KEY (ID)
    )
  `);

  connection.query(`INSERT INTO people (name) VALUES ('${name}')`);
  connection.query(`SELECT name FROM people`, (error, results) => {
    if (error) throw error;

    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${results.map((person) => `<li>${person.name}</li>`).join("")}
      </ol>
    `);
  });
  return connection.end();
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
