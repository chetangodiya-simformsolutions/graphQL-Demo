import { Container, Button, Text } from 'native-base';
import React, { useState } from 'react';
import styles from './styles/LoginScreenStyles';
import { Strings, Navigations } from '../../constants';
import { TextInput, ActivityIndicator, AsyncStorage } from 'react-native';
import Spacer from '../../components/Spacer';
import { useMutation } from '@apollo/client';
import { LOGIN_QUERY } from '../../graphql/auth/login';
import reactotron from 'reactotron-react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('adf@yopmail.com');
  const [password, setpassword] = useState('dfdf');
  const [loginSuccess, setloginSuccess] = useState('');
  const [login, loading] = useMutation(LOGIN_QUERY, {
    variables: { ...{ email, password } },
  });
  const checkUser = () => {
    login()
      .then(({ data }) => {
        const { signinUser } = data;
        reactotron.log(signinUser);
        setloginSuccess();
        AsyncStorage.setItem('@token', JSON.stringify(signinUser));
        navigation.navigate(Navigations.Home);
      })
      .catch((error) => {
        reactotron.log('error ', error);
        setloginSuccess(error.message);
      });
  };
  return (
    <Container style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder={'Email'}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <Spacer />

      <TextInput
        style={styles.inputStyle}
        placeholder={'Password'}
        value={password}
        onChangeText={(value) => setpassword(value)}
      />
      {loginSuccess !== '' && <Text>* {loginSuccess}</Text>}
      <Spacer />
      <Button onPress={checkUser}>
        <Text>{Strings.login}</Text>
        {loading && <ActivityIndicator />}
      </Button>
    </Container>
  );
};

export default LoginScreen;
