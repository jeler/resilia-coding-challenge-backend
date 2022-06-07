const express = require("express");
const cors = require("cors");
const mysql = require('mysql2');
// const sql = require('config/db.config.js');
// const Message = require('models/message.model');




const con = mysql.createConnection({
  host: 'localhost',
  port: '13306',
  user: 'root',
  password: 'Password',
  database: 'resilia'
});

con.connect((err) => {
    if(err){
      console.log(err)
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
});


const PORT = process.env.PORT || 3001;

const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to messanger application." });
});

app.get("/messages", (req, res) => {
  let query = "SELECT message_id, message, created_at FROM notifications";
  con.query(query, (err, data) => {
    if (err) {
      console.log("error: ", err);
      return;
    }
    console.log("notifications: ", data);
    res.send(data);
  });

  con.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
    console.log(err);
  });
});

// require("routes/messages.routes.js")(app);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
