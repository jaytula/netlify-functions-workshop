/* Step 3. In this_file, require 'apollo-server-lambda' */
const { ApolloServer, gql } = require('apollo-server-lambda');

/* Step 4. In this_file, define your graphQL types */
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

/* Step 5. In this_file, define your graphQL resolvers */
const resolvers = {
  Query: {
    hello: () => "hello worlld"
  }
};

/* Step 6. In this_file, create a new `ApolloServer` and pass it your typeDefs and resolves */
const server = new ApolloServer({
  typeDefs,
  resolvers
});

/* Step 7. In this_file, turn your server into a lambda compatible function signature

    ```js
    server.createHandler()
    ```

    Then export the handler
*/
exports.handler = server.createHandler();
