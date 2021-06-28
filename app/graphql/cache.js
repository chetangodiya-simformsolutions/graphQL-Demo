import { InMemoryCache, makeVar } from '@apollo/client';
import reactotron from 'reactotron-react-native';
import { GET_ALL_USER_TODO } from './home/home';

export const existedUser = makeVar([]);
export const cache = new InMemoryCache({});

export const insertCache = (client, { data: { insert_todos } }) => {
  const sdata = client.readQuery({
    query: GET_ALL_USER_TODO
  });
  reactotron.log(sdata, insert_todos, ' sdata');
  if (insert_todos?.returning) {
    const newTodo = insert_todos?.returning?.[0];
    client.writeQuery({
      query: GET_ALL_USER_TODO,
      variables: {},
      data: {
        todos: [newTodo, ...(sdata?.todos, [])]
      }
    });
  }
};
/** for updatting cache */
export const updateCache = (client, { data: { update_todos } }) => {
  const sdata = client.readQuery({
    query: GET_ALL_USER_TODO
  });
  reactotron.log(sdata, update_todos, update_todos?.returning);
  if (update_todos?.returning) {
    const newTodo = update_todos?.returning?.[0];
    reactotron.log(sdata?.todos, ' sdata?.todo');
    const newData = {
      todos: [newTodo, ...(sdata?.todos ?? [])]
    };
    client.writeQuery({
      query: GET_ALL_USER_TODO,
      data: newData
    });
  }
};

export const deleteCache = (client, { data: { delete_todos } }) => {
  const sdata = client.readQuery({
    query: GET_ALL_USER_TODO
  });
  if (delete_todos?.returning[0]) {
    const newData = {
      todos: sdata?.todos?.filter(
        item => item.id !== delete_todos?.returning[0]?.id
      )
    };
    client.writeQuery({
      query: GET_ALL_USER_TODO,
      data: newData
    });
  }
};
