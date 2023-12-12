import { gql } from 'graphql-tag';

const ADD_TO_CART = gql`
  mutation ADD_TO_CART($id: number) {
    id
  }
`;

const GET_CART = gql`
  query GET_CART {
    id
    title
    price
    category
    description
    image
    rating
  }
`;

const queries = {
  ADD_TO_CART,
  GET_CART,
};

export default queries;
