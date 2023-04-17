var mongoose = require("mongoose");
const config = require("./default.json");
const db = config['mongoURI'];

const connectToDatabase = async () => {
    try {
        await mongoose.connect(db);
        console.log("Mongoose Connected...")
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectToDatabase;
