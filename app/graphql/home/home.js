import { gql } from '@apollo/client';

// fragment
export const FRAGMENT_TODOS = gql`
  fragment todoFragment on todos {
    id
    is_completed
    is_public
    title
  }
`;

export const GET_ALL_USER_TODO = gql`
  ${FRAGMENT_TODOS}
  {
    todos(where: { user: { name: { _eq: "chetan" } } }) {
      ...todoFragment
      user {
        name
      }
    }
  }
`;

export const GET_SUBSCRIPTION = gql`
  ${FRAGMENT_TODOS}
  subscription {
    todos(
      where: { user: { name: { _eq: "chetan" } } }
      order_by: { created_at: desc }
    ) {
      ...todoFragment
      user {
        name
      }
    }
  }
`;

export const UPDATE_TODO = gql`
  ${FRAGMENT_TODOS}
  mutation($id: Int, $isCompleted: Boolean) {
    update_todos(
      _set: { is_completed: $isCompleted }
      where: { id: { _eq: $id } }
    ) {
      returning {
        ...todoFragment
      }
    }
  }
`;

export const DELETE_TODO = gql`
  mutation($id: Int) {
    delete_todos(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;
