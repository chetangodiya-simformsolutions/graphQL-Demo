import { gql } from '@apollo/client';

export const userTypeDefs = gql`
  extend type Shop {
    isInCart: Boolean!
  }
`;

export const GET_LOGIN_STATUS = gql`
  query getLoginStatus {
    isLogin @client
  }
`;
