import api from '..';
import apiPath from '../path';
import {
  GetProductCategories,
  GetCategoryProducts,
  GetAllProducts,
  GetProduct,
} from './types';

/** migrate to graphql */
import request from 'graphql-request';
import queries from '@/graphql/products';

const getProductCategories: GetProductCategories = () =>
  request(apiPath.GET_PRODUCT_CATEGORIES, queries.GET_CATEGORIES);

const getCategoryProducts: GetCategoryProducts = (options) =>
  request(apiPath.GET_CATEGORY_PRODUCTS(options), queries.GET_PRODUCTS, {
    category: options.params.category,
  });

const getAllProducts: GetAllProducts = (query) =>
  api.get(apiPath.GET_ALL_PRODUCTS(query));

const getProduct: GetProduct = (params) =>
  request(apiPath.GET_PRODUCT(params), queries.GET_PRODUCT, { id: params.id });

export default {
  getProductCategories,
  getCategoryProducts,
  getAllProducts,
  getProduct,
};
