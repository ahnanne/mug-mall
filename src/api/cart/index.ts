import apiPath from '../path';
import { AddToCart, GetCart } from './types';

/** migrate to graphql */
import request from 'graphql-request';
import queries from '@/graphql/cart';

const addToCart: AddToCart = (id: number) =>
  request(apiPath.ADD_TO_CART({ id }), queries.ADD_TO_CART, { id });

const getCart: GetCart = () => request(apiPath.GET_CART, queries.GET_CART);

export default {
  getCart,
  addToCart,
};
