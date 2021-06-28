import { gql } from '@apollo/client';

export const CREATE_TODO = gql`
  mutation addTodo($title: String!) {
    insert_todos(objects: { title: $title }) {
      returning {
        id
        is_completed
        title
        is_public
      }
    }
  }
`;
