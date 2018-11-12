const { GraphQLServer } = require("graphql-yoga");

const schema = require("./schema/schema.js");

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once("open", () => {
  console.log("MongoDB conencted");
});

const options = { port: process.env.PORT || 4000 };
const server = new GraphQLServer({ schema });
server.start(options, () =>
  console.log("Server is running on localhost:" + options.port)
);
