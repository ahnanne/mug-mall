import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
  },
};


(async () => {
  const server = new ApolloServer({
    typeDefs, // 구현할 데이터의 형태(schema)를 정의
    resolvers, // schema의 각 필드에 대한 실제 동작을 정의
    context: {}, // (optional) 모든 resolver에 전달되는 객체로, 모든 resolver에서 참조할 수 있다.
  });
  const app = express();

  await server.start();
  server.applyMiddleware({
    app,
    path: '/graphql',
    cors: {
      origin: ['http://localhost:5173'],
    },
  });

  app.listen({ port: 4000 }, () => console.log('server listening on 4000..'));
})();