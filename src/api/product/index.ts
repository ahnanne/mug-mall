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
  api.get(apiPath.GET_CATEGORY_PRODUCTS(options));

const getAllProducts: GetAllProducts = (query) =>
  api.get(apiPath.GET_ALL_PRODUCTS(query));

const getProduct: GetProduct = (params) => api.get(apiPath.GET_PRODUCT(params));

export default {
  getProductCategories,
  getCategoryProducts,
  getAllProducts,
  getProduct,
};
