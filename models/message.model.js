const sql = require('../config/db.config.js');

const Message  = function(message) {
    this.user_id = message.user_id;
    this.message = message.message;
    this.created_at = message.createdAt;
}

Message.findById = (id, result) => {
    sql.query(`SELECT * FROM notifications WHERE message_id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found notification: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    });
  };
  Message.getAll = (title, result) => {
    let query = "SELECT * FROM notifications";
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("notifications: ", res);
      result(null, res);
    });
  };

  module.exports = Message;