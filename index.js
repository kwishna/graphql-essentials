import express from "express";
import { ruruHTML } from "ruru/server";
import { createHandler } from 'graphql-http/lib/use/express';
import path from "path";
import { faker } from '@faker-js/faker';
// import schema from "./data/schema";
import schema from "./data/schema2";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
    res.send(`Welcome To GraphQL Essentials`)
});

// v1
// const helloWorldRoot = {
//  hello: () => `I am GraphQL.`
// };

// v2
const productRoot = {
    product: function () {
        return {
            id: faker.string.uuid(),
            name: faker.food.dish(),
            description: faker.word.words(5),
            price: faker.number.float({ min: 10, max: 500, fractionDigits: 2 }),
            soldout: Date.now() % 2 == 0 ? true : false
        }
    }
};

// app.use("/graphql", createHandler({
//     schema: schema
//     rootValue: productRoot
// }));

// ---------------------------------------------------------

// ------ deprecated ------
// import { graphqlHTTP } from "express-graphql";
// app.use('/graphql', graphqlHTTP({
//     schema: schema,
//     rootValue: helloWorldRoot,
//     graphiql: true
// }))

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

/*
// ---------------------------------

curl --location 'http://localhost:3000/graphql' \
--header 'Content-Type: application/json' \
--data '{   "query":    "{  product {   id    name      description     price   soldout }   }", "variables":    {   }  }'

// ---------------------------------

const axios = require('axios');
let data = JSON.stringify({
  query: `{
    product {
        id
        name
        description
        price
        soldout
    }
  }`,
  variables: {}
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/graphql',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

Response :-

{
    "data": {
        "product": {
            "id": "e94b89f6-6b95-4efd-b5c8-c132b31901e1",
            "name": "Pizza",
            "description": "cafe plastic very so victoriously",
            "price": 310.17,
            "soldout": false
        }
    }
}
*/


