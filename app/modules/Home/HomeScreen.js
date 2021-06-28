import { useMutation, useSubscription } from '@apollo/client';
import { Button, Container, Icon } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import reactotron from 'reactotron-react-native';
import { Navigations } from '../../constants';
import { DELETE_TODO, GET_SUBSCRIPTION, UPDATE_TODO } from '../../graphql/home/home';
import { Colors } from '../../theme';
import styles from './styles/HomeScreenStyle';

const RenderItems = ({ item, updateTodo, deleteTodo, updating, deleting }) => {
  const { title, id, is_completed } = item;
  return (
    <View key={id} style={styles.listItem}>
      <View style={styles.flexView}>
        <Text style={styles.todoText}>{title}</Text>
      </View>
      <Button
        style={styles.buttonView}
        onPress={() =>
          updateTodo({
            variables: { id: id, isCompleted: !is_completed },
            optimisticResponse: {
              update_todos: {
                id: id,
                is_completed: !is_completed
              }
            }
          }).catch(err => reactotron.log(err, ' err'))
        }
      >
        <Icon
          name={'check'}
          type={'FontAwesome'}
          style={is_completed ? styles.todoChecked : styles.todoUnChecked}
        />
      </Button>
      <View style={styles.spacer}/>
      <Button
        style={styles.buttonView}
        onPress={() => {
          deleteTodo({
            variables: { id: id }
          });
        }}
      >
        {!deleting && <Icon name={'close'} type={'FontAwesome'} />}
      </Button>
    </View>
  );
};

const HomeScreen = ({ route, navigation }) => {
  /**
   * @todo
   *
   * if you use subscription than the cache feature like readQuery, and writeQuery
   * dont work
   */
  const user = route?.params?.user;
  const { data = {}, loading, error } = useSubscription(GET_SUBSCRIPTION);
  const [updateTodo, { loading: updating }] = useMutation(UPDATE_TODO);
  const [deleteTodo, { loading: deleting }] = useMutation(DELETE_TODO, {
    // update: deleteCache
  });
  const todos = data?.todos;
  if (error) {
    reactotron.log(error, ' error');
    return <Text>Error</Text>;
  }
  if (loading) {
    return <Text>Loading...</Text>;
  }
  return (
    <Container style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      {todos === null && <Text>No post available</Text>}
      <FlatList
        data={todos}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={()=><Text>No todos for today</Text>}
        contentContainerStyle={styles.content}
        renderItem={item => (
          <RenderItems
            {...item}
            {...{ updateTodo, deleteTodo, updating, deleting }}
          />
        )}
      />
      <Button
        style={styles.absolutePlusView}
        onPress={() => {
          navigation.navigate(Navigations.CreatePost, {
            user: user
          });
        }}
      >
        <Icon name={'plus'} type={'FontAwesome'} />
      </Button>
    </Container>
  );
};

HomeScreen.propTypes = {
  route: PropTypes.object
};
RenderItems.propTypes = {
  item: PropTypes.object,
  updateTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  updating: PropTypes.bool,
  deleting: PropTypes.bool
};

export default HomeScreen;
