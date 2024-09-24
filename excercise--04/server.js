import express from "express";
import { graphqlHTTP } from "express-graphql";
import path from "path";
import schema from "./product_schema";
import resolvers from "./resolver";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
  res.send(`Welcome To GraphQL Essentials`)
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
});

/*
curl --location 'http://localhost:3000/graphql' \
--header 'Content-Type: application/json' \
--data '{   "query":    "{  product {   id    name      description     price   soldout }   }", "variables":    {   }  }'

---------------------------------

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

----------------------------------------------------------

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


