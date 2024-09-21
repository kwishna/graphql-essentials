import express from "express";
import { graphqlHTTP } from "express-graphql";
import path from "path";
import schema from "./hello_schema";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
    res.send(`Welcome To GraphQL Essentials`)
});

// v1
const helloWorldRoot = {
 hello: () => `I am GraphQL.`
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: helloWorldRoot,
    graphiql: true,
}));

app.listen(PORT, () => console.log(`Running server on localhost:${PORT}/graphql`));