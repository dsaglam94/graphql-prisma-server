import { createSchema, createYoga } from "graphql-yoga";
import { createServer } from "node:http";
import { schema } from "./schema/schema";

const PORT = Number(process.env.API_PORT) || 4000;

const yoga = createYoga({
  schema,
});

const server = createServer(yoga);

server.listen(PORT, () => {
  console.log(`🚀 GraphQL Server ready at http://localhost:${PORT}/graphql`);
});
