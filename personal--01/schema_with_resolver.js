import { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat, GraphQLBoolean, GraphQLInt, GraphQLList, GraphQLNonNull } from 'graphql';
import { faker } from '@faker-js/faker';
import { RandomDie } from './random_die';

// RandomDie type definition
/**
const schema = buildSchema(
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }
 
  type Query {
    getDie(numSides: Int): RandomDie
  }
)
*/

// Product type definition
const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        price: { type: GraphQLFloat },
        soldout: { type: GraphQLBoolean }
    })
});

const RandomDieType = new GraphQLObjectType({
    name: 'RandomDie',
    fields: () => ({
        numSides: { type: new GraphQLNonNull(GraphQLInt) }, // Mandatory field
        rollOnce: { type: GraphQLInt },  // Non-mandatory field
        roll: {
            type: new GraphQLNonNull(new GraphQLList(GraphQLInt)), // Mandatory field
            args: {
                numRolls: { type: new GraphQLNonNull(GraphQLInt) }  // Mandatory argument
            },
            resolve: (die, { numRolls }) => die.roll({ numRolls })
        }
    })
});

// Root query definition
const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        product: {
            type: ProductType,
            // resolver is root value
            resolve: () => ({
                id: faker.string.uuid(),
                name: faker.food.dish(),
                description: faker.word.words(5),
                price: faker.number.float({ min: 10, max: 500, fractionDigits: 2 }),
                soldout: Date.now() % 2 === 0 ? true : false
            })
        },
        getDie: {
            type: RandomDieType,
            args: { numSides: { type: GraphQLInt } },
            // resolver is root value
            resolve: (_, { numSides }, ctx, info) => {
              // console.log(`${_} | ${ctx} | ${JSON.stringify(info, null, 4)}`);
              const r = new RandomDie(numSides || 6);
              return r;
            }
        },
        helloWorld: {
            type: GraphQLString,
            // resolver is root value
            resolve: (_) => `Hello World`
        },
    }
});

// Export the unified GraphQL schema
const schema = new GraphQLSchema({
    query: RootQueryType
});

export default schema;

/*
Flow of Data in GraphQL :-

Let’s break down the flow of how GraphQL connects the query, the resolver, and your class method.

1) The Query: -

A client sends a query like this:
{
  getDie(numSides: 6) {
    roll(numRolls: 3)
  }
}

2) GraphQL Schema: -

GraphQL sees that the query is asking for the roll field inside the RandomDie type.
In the schema, you have something like:

const RandomDieType = new GraphQLObjectType({
  name: 'RandomDie',
  fields: () => ({
    roll: {
      type: new GraphQLList(GraphQLInt),
      args: { numRolls: { type: GraphQLInt } },
      resolve: (die, { numRolls }) => die.roll({ numRolls })
    }
  })
});

3) The Resolver: -

The resolver for the roll field gets triggered because the client requested roll(numRolls: 3).
The resolve function gets two things:
- die: This is the instance of the RandomDie class created by the query getDie(numSides: 6).
- numRolls: This is the argument provided by the client (numRolls: 3).

4) Calling the Class Method:

Inside the resolver: resolve: (die, { numRolls }) => die.roll({ numRolls }).

    - die.roll({ numRolls }): This calls the `roll` method on the `die` object, which is an instance of `RandomDie`,
      passing `numRolls` as an argument.

5) Returning the Data:

The result of die.roll({ numRolls }) is an array of random numbers (the result of rolling the die multiple times).
This result is returned by the resolver, and GraphQL sends it back to the client.
*/
