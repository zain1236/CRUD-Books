const model = require("../models")
const Joi = require("joi")


const bookSchema = Joi.object({
    tit: Joi.number()
        .required(),
});

exports.create = async (req, res) => {
    try {
        console.log("request received");
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        console.log(req.body);
        res.status(200).send("ok")
        // const book = new model.Book(req.body);        
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};