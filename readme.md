# GraphQL Essentials for Beginners

Welcome to **GraphQL Essentials for Beginners**, a comprehensive introduction to GraphQL for new learners. This project is designed to help you understand the core concepts, structure, and usage of GraphQL. You'll be able to build your first GraphQL API and perform basic queries and mutations by the end of this course.

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Key Concepts](#key-concepts)
  - [What is GraphQL?](#what-is-graphql)
  - [Queries](#queries)
  - [Mutations](#mutations)
  - [Schemas and Types](#schemas-and-types)
  - [Resolvers](#resolvers)
- [Hands-on Labs](#hands-on-labs)
- [Example Project](#example-project)
- [Additional Resources](#additional-resources)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

GraphQL is a query language for APIs that allows clients to request only the data they need, efficiently fetching information from the server. It provides a more flexible and efficient way to interact with APIs compared to REST.

This project introduces you to the foundational concepts of GraphQL through step-by-step examples and a simple, hands-on project that you can follow along with.

## Prerequisites

Before starting, make sure you have the following:
- Basic knowledge of JavaScript/Node.js
- Familiarity with APIs
- Basic knowledge of expressjs, reactjs, mongodb, sqlite3
- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) installed

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/kwishna/graphql-essentials.git
   ```
2. Navigate to the project directory:
   ```bash
   cd graphql-essentials
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Start the GraphQL server:
   ```bash
   npm start
   ```
5. Open your browser and go to `http://localhost:4000/graphql` to access the GraphQL playground.

## Project Structure

```
graphql-essentials/<EXCERCISES>
│
├── src/
│   ├── schema.js           # GraphQL schema definitions
│   ├── resolvers.js        # Resolver functions for queries and mutations
│   ├── server.js           # GraphQL server setup
│
├── package.json            # Project metadata and dependencies
├── README.md               # Project documentation
├── .gitignore              # Ignored files
└── ...
```

## Key Concepts

### What is GraphQL?

GraphQL is an open-source data query language for APIs and a runtime to fulfill those queries with your existing data. It lets the client specify what data it needs, reducing the over-fetching and under-fetching common in RESTful APIs.

### Queries

Queries are used to fetch data from a GraphQL API. They allow the client to request the exact structure and fields they need.

### Mutations

Mutations are used to modify server-side data. They are the equivalent of creating, updating, or deleting resources in traditional APIs.

### Schemas and Types

Schemas define the structure of your API. They describe the types of data your API can return and the operations available (queries and mutations). Types define the shape of the data within your GraphQL schema.

### Resolvers

Resolvers are functions that handle the logic behind the queries and mutations. Each field in a GraphQL query or mutation must have a corresponding resolver that fetches the requested data.

### Alias and Fragments

Alias let you rename the result of a field to anything you want.
Fragments are used to split complicated application data requirements into smaller chunks, especially when you need to combine lots of UI components with different fragments into one initial data fetch.


## Hands-on Labs

The project includes hands-on labs that guide you through building your first GraphQL API.

1. **Lab : Setting up a GraphQL Server**
2. **Lab : Defining a Schema**
3. **Lab : Writing Queries and Mutations**
4. **Lab : Creating Resolvers**

Each lab is structured with detailed instructions and code snippets to help you implement and test the concepts.

## Example Project

The final project is a simple API for managing product in store. You'll be able to:
- Query a list of products
- Add new products
- Update product
- Remove product

## Additional Resources

- [Official GraphQL Documentation](https://graphql.org/learn/)
- [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/)
- [GraphQL vs REST](https://graphql.org/learn/serving-over-http/)
- [GraphQL Specification](https://spec.graphql.org/draft/)

## Contributing

Contributions are welcome! If you find a bug or want to improve the project, feel free to open an issue or submit a pull request.

1. Fork the project
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.