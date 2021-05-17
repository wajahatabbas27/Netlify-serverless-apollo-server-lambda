const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type Query {
    message: String,
    user: User
  }

  type User {
    name: String,
    age: Int,
  }
`;

const resolvers = {
  Query: {
    message: (parent, args, context) => {
      return "Hello World ! from AZ and Wajahat Abbas"
    },
    user: (parent, args, context) => {
      return {
        name: "Wajahat AZ",
        age: "23"
      }
    }
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
})

const handler = server.createHandler()

module.exports = { handler }
