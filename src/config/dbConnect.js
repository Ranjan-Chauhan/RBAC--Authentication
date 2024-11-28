const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MongoDB_URL);
    console.log(
      `MongoDb connected : ${connectionInstance.connection.host}, ${connectionInstance.connection.name} `
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = dbConnect;
