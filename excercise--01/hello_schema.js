import { buildSchema } from "graphql";

// v1
const schema = buildSchema(`  
    type Query {
        hello: String
    }
`)

export default schema;