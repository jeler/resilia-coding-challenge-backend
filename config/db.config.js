const mysql = require('mysql');
const con = mysql.createConnection({
  host: '0.0.0.0',
  port: '13306',
  user: 'root',
  password: 'Password',
  database: 'Test'
});
con.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });
  
  con.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
  });

  module.exports = con;