import { createSchema, createYoga } from "graphql-yoga";
import { createServer } from "node:http";

const port = Number(process.env.API_PORT) || 4000;

const yoga = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        hello: String
      }
    `,
    resolvers: {
      Query: {
        hello: () => "Hello from Yoga!",
      },
    },
  }),
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`);
});
