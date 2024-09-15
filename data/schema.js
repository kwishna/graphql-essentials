import { buildSchema } from "graphql";
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

// v1
// const schema = buildSchema(`  
//     type Query {
//         hello: String
//     }
// `)

// v2
const schema = buildSchema(`
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Boolean
    }

    type Query {
        product: Product
    }
`)

// Construct a schema, using GraphQL schema language
export const dieSchema = buildSchema(/* GraphQL */`
    type RandomDie {
      numSides: Int!
      rollOnce: Int!
      roll(numRolls: Int!): [Int]
    }
   
    type Query {
      getDie(numSides: Int): RandomDie
    }
  `)


export default schema;