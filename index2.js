import express from "express";
import { ruruHTML } from "ruru/server";
import { createHandler } from 'graphql-http/lib/use/express';
import path from "path";
import schema from "./data/schema2";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Create and use the GraphQL handler.
app.use("/graphql", createHandler({ schema }));

// Serve the GraphiQL IDE.
app.get("/", (req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
});

app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});

