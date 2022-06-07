const sql = require('../config/db.config.js');

const User = function(user) { 
    this.username = user.userName;
    this.first_name = user.firstName;
    this.last_name = user.lastName;
    this.email = user.email;
}

User.create = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created user: ", { id: res.user_id, ...newUser });
      result(null, { id: res.user_id, ...newUser });
    });
  };