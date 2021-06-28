import { useMutation } from '@apollo/client';
import { Button, Container, Icon, Text } from 'native-base';
import React, { useState } from 'react';
import { View } from 'react-native';
import reactotron from 'reactotron-react-native';
import CustomTextInput from '../../components/CustomTextInput';
import { CREATE_TODO } from '../../graphql/createPost/createPost';
import styles from './styles/CreatePostScreenStyles';

const CreatePostScreen = ({ navigation }) => {
  const [addPost, { loading }] = useMutation(CREATE_TODO, {
    // update: insertCache,
    optimisticResponse: true
  });
  const [text, setText] = useState('');
  return (
    <Container style={styles.container}>
      <View style={styles.modal}>
        <CustomTextInput
          placeholder={'Enter todo'}
          style={styles.text}
          onChangeText={value => setText(value)}
        />
        <Button
          style={styles.buttonStyle}
          disabled={loading}
          onPress={() =>
            addPost({
              variables: {
                title: text
              },
              optimisticResponse: {
                addTodo: {
                  id: new Date(),
                  __typename: 'insert',
                  title: 'loading...'
                }
              }
            })
              .then(res => {
                navigation.goBack();
              })
              .catch(err => {
                reactotron.log('Error ', err);
              })
          }
        >
          <Text>Create Post</Text>
        </Button>
        <Button
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name={'close'} type={'FontAwesome'} />
        </Button>
      </View>
    </Container>
  );
};

export default CreatePostScreen;
