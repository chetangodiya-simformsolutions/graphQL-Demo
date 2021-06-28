import { ApolloProvider } from '@apollo/client';
import React, { useEffect } from 'react';
import '../config/ReactronConfig';
import { client } from '../graphql';
import RootContainer from './RootContainer';

const App = () => {
  useEffect(() => {
    client.resetStore();
  }, []);
  return (
    <ApolloProvider client={client}>
      <RootContainer />
    </ApolloProvider>
  );
};

// allow reactotron overlay for fast design in dev mode
export default (__DEV__ ? console.tron.overlay(App) : App);
