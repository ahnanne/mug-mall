import { graphql, HttpResponse } from 'msw';
import { faker } from '@faker-js/faker';

import { Product } from '@/api/product/types';

const mock_categories = Array.from({ length: 5 }, () => faker.hacker.noun());
const mock_products: Array<Product> = Array.from({ length: 20 }, () => ({
  id: faker.number.int(),
  title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
  price: String(faker.number.int({ max: 500 })),
  category: '',
  description: faker.hacker.phrase(),
  image: faker.image.url(),
  rating: {
    rate: 4.8,
    count: 2,
  },
}));

const db = {
  cart: [] as Array<number>,
};

/**\
 * Handlers are for intercepting requests and mocking responses.
 */
export default [
  graphql.query('GET_CATEGORIES', () => {
    return HttpResponse.json({
      data: mock_categories,
    });
  }),
  graphql.query('GET_PRODUCTS', (req) => {
    return HttpResponse.json({
      data: mock_products.map((product) => ({
        ...product,
        category: req.variables.category ?? 'plush toys',
      })),
    });
  }),
  graphql.query('GET_PRODUCT', (req) => {
    return HttpResponse.json({
      data: mock_products.find(
        ({ id }) => id === req.variables.id ?? mock_products[0]
      ),
    });
  }),
  graphql.mutation('ADD_TO_CART', (req) => {
    console.log('%cADD_TO_CART req: ', 'color: blue', req);
    db.cart.push(Number(req.variables.id));

    return HttpResponse.json({
      data: {
        success: true,
      },
    });
  }),
  graphql.query('GET_CART', () => {
    return HttpResponse.json({
      data: db.cart,
    });
  }),
];
