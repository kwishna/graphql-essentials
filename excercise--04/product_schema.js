import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        cashOnDelivery: Boolean
        inventory: Int
        soldout: Soldout
        stores: [Store]!
    }

    enum Soldout {
        SOLD
        AVAILABLE
    }

    type Store {
        store: String
    }

    input StoreInput {
        store: String
    }

    input ProductInfo {
        id: ID
        name: String
        description: String
        price: Float
        cashOnDelivery: Boolean
        inventory: Int
        soldout: Soldout
        stores: [StoreInput]!
    }

    type Query {
        getProduct(id: ID): Product
        getAllProducts: [Product]
    }

    type Mutation {
        createProduct(product: ProductInfo): Product
    }
`);
/*

mutation {
  createProduct(product: {name: "book2", description: "holy book2", price: 110, inventory: 15, cashOnDelivery: true, soldout: AVAILABLE, stores: [{store: "LA"}, {store: "MI"}]}) {
    id
    name
    description
    soldout
    price
    inventory
    cashOnDelivery
    stores {
      store
    }
  }
}

{
  getProduct(id: "30768e76d353fae41dbc") {
    id
    name
    description
    soldout
    price
    inventory
    cashOnDelivery
    stores {
      store
    }
}

{
  getAllProducts {
    id
    name
    description
    soldout
    price
    inventory
    cashOnDelivery
    stores {
      store
  }
}

*/
export default schema;