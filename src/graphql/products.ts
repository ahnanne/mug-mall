import { gql } from 'graphql-tag';

const GET_CATEGORIES = gql`
  query GET_CATEGORIES {
    categories
  }
`;

const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
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
  GET_CATEGORIES,
  GET_PRODUCTS,
};

export default queries;
