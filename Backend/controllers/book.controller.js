const model = require("../models")
const Joi = require("joi");
const { date } = require("joi");


const bookSchema = Joi.object({
    title: Joi.string()
        .required(),

    author : Joi.string()
        .required(),

    no_of_pages : Joi.number()
        .required(),
    
    published_at : Joi.date()
        .required()
});

const bookIdSchema =  Joi.object({
    _id : Joi.string()
        .required()
});

exports.create = async (req, res) => {
    try {
        if (!req.body) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        const bookValidate = await bookSchema.validateAsync(req.body);
        const book = new model.Book(bookValidate);
        const result = await book.save();
        res.status(200).send({"Message" : "success","data" : result})            
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};

exports.getAll = async (req, res) => {
    try {
        const books = await model.Book.find();
        res.status(200).send({"Message" : "success","data" : books})            
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};

exports.getOne = async (req, res) => {
    try {
        const {id} = req.params;
        const books = await model.Book.findById(id);
        if (books){
            res.status(200).send({"Message" : "success","data" : books})            
        } else {
            res.status(404).send({"Message" : "Book not found"})            
        }
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};

exports.delete = async (req, res) => {
    try {
        const {id} = req.params;
        const books = await model.Book.findByIdAndDelete(id);

        if (books){
            res.status(200).send({"Message" : "success","data" : books})            
        } else {
            res.status(404).send({"Message" : "Book not found"})            
        }
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};

exports.update = async (req, res) => {
    try {
        const {id} = req.params;
        const books = await model.Book.findByIdAndUpdate(id,{...req.body,updated_at: Date.now()});

        if (books){
            res.status(200).send({"Message" : "success","data" : books})            
        } else {
            res.status(404).send({"Message" : "Book not found"})            
        }
    }
    catch (error) {
        console.log("In Catch..");
        res.status(400).send({ "Message": error.message});
    }
};





