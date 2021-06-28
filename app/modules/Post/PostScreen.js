import { Container, Text } from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';

const PostScreen = () => {
  const { singlePost } = useSelector(state => state.posts);
  const { title = '', body = '', id = '' } = singlePost[0];
  return (
    <Container>
      <Text>post {id}</Text>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </Container>
  );
};

export default PostScreen;
