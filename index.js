import express from "express";
import { graphqlHTTP } from "express-graphql";
import path from "path";
import schema from "./data/schema";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send(`Welcome To GraphQL Essentials`)
});

const root = {
    hello: () => `I am GraphQL.`
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))


app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});


