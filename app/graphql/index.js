import { ApolloClient, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import Secrets from 'react-native-config';
import { cache } from './cache';
import { userTypeDefs } from './userTypeDefs';

// GRAPHQL_ENDPOINT=https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex
// GRAPHQL_TODO=https://hasura.io/learn/graphql
// GRAPHQL_TODO_WSS=wss://hasura.io/learn/graphql
// const httpLink = new HttpLink({
//   uri: Secrets.GRAPHQL_TODO,
//   headers: {
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjaGV0YW4uZ0BzaW1mb3Jtc29sdXRpb25zLmNvbSIsIm5hbWUiOiJjaGV0YW4uZyIsImlhdCI6MTYwMTcwMTk4MC41MTMsImlzcyI6Imh0dHBzOi8vaGFzdXJhLmlvL2xlYXJuLyIsImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIl0sIngtaGFzdXJhLXVzZXItaWQiOiJjaGV0YW4uZ0BzaW1mb3Jtc29sdXRpb25zLmNvbSIsIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1yb2xlIjoidXNlciJ9LCJleHAiOjE2MDE3ODgzODB9.deqwPVT6iDQN_5e1ZWBlumf_CohZuG4JOSZSn8VW5SI',
//   },
// });

const wsLink = new WebSocketLink({
  uri: Secrets.GRAPHQL_TODO_WSS,
  options: {
    reconnect: true,
    lazy: true,
    connectionParams: {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjaGV0YW5AeW9wbWFpbC5jb20iLCJuYW1lIjoiY2hldGFuIiwiaWF0IjoxNjI0ODU1NDk3LjM2NSwiaXNzIjoiaHR0cHM6Ly9oYXN1cmEuaW8vbGVhcm4vIiwiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImNoZXRhbkB5b3BtYWlsLmNvbSIsIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1yb2xlIjoidXNlciJ9LCJleHAiOjE2MjQ5NDE4OTd9.EL1eTkdBjTZ7M4IlKfFD1kliM2L5xshSgKyMRloObWs'
      }
    }
  }
});

// const httpLink = new HttpLink({
//   uri: `https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex`,
// });

// const wsLink = new WebSocketLink({
//   uri: `ws://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex`,
//   options: {
//     reconnect: true,
//     lazy: true,
//   },
// });

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink
// );

// const client = new ApolloClient({
//   splitLink,
//   cache: cache,
// });

const delay = setContext(
  request =>
    new Promise((success, fail) => {
      // do some async lookup here
      setTimeout(() => {
        success();
      }, 10);
    })
);
const appLink = new ApolloLink.from([delay, wsLink]);
const client = new ApolloClient({
  link: appLink,
  cache: cache,
  connectToDevTools: true,
  typeDefs: userTypeDefs
});

export { client };

