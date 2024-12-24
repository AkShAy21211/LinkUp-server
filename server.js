import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
import {graphqlHTTP} from "express-graphql"
import schema  from "./graphql/schema"

const app = express();

// Middlewares
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/LinkUp');

// GraphQL setup
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
