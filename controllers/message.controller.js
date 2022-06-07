const Message = require('../models/message.model');

exports.findById = (req, res) => { 
    Message.findById(req.params.messageId, (err, data) => {
        if (err) {
            res.status(500).send({ message: err.message || "Some error occurred while retrieving message." });
        } else {
            res.send(data);
        }
    });
};

exports.findAll = (req, res) => { 
    Message.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving messages."
            });
        else res.send(data);
    });
}
