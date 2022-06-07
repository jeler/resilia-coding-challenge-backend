export default app => {
    const messages = require("../controllers/message.controller.js");
    var router = require("express").Router();
    // Retrieve all Tutorials
    router.get("/messages", messages.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", messages.findOne);
    app.use('/api/messages', router);
};