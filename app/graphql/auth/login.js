import { gql } from '@apollo/client';

// export const LOGIN_QUERY = gql`
//   mutation {
//     createUser(
//       authProvider: { email: { email: $email, password: $password } }
//       name: $name
//     ) {
//       id
//       name
//       posts
//     }
//   }
// `;
export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;
export const LOGIN_QUERY = gql`
  mutation login($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      user {
        id
        name
        posts(last: 10) {
          id
          comments {
            id
          }
          text
          title
        }
      }
      token
    }
  }
`;
