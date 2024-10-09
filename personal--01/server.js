import express from "express";
import { ruruHTML } from "ruru/server";
import { createHandler } from 'graphql-http/lib/use/express';
import path from "path";
import schema from "./schema_with_resolver";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
    res.send(`Welcome To GraphQL Essentials`)
});

// Create and use the GraphQL handler.
app.use("/graphql", createHandler({ schema }));

// Serve the GraphiQL IDE.
app.get("/", (req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
});

// ----- alternate -----
// The root provides the top-level API endpoints
// const randomDieRoot = {
//     getDie({ numSides }) {
//         return new RandomDie(numSides || 6)
//     },
// }
// app.use(
//     "/graphql/randomDie",
//     createHandler({
//         schema: dieSchema,
//         rootValue: randomDieRoot,
//     })
// )

app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});

