import { gql } from 'graphql-tag';

const GET_CATEGORIES = gql`
  query GET_CATEGORIES {
    categories
  }
`;

const GET_PRODUCTS = gql`
  query GET_PRODUCTS($category: string) {
    id
    title
    price
    category
    description
    image
    rating
  }
`;

const GET_PRODUCT = gql`
  query GET_PRODUCT($id: number) {
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
  GET_PRODUCT,
};

export default queries;
