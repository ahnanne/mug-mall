import { graphql, HttpResponse } from 'msw';
import { faker } from '@faker-js/faker';

import { Product } from '@/api/product/types';

const mock_categories = Array.from({ length: 8 }, () => faker.hacker.noun());
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
  cart: [] as Array<Product>,
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
    const productId: number = req.variables.id;

    const isDuplicated = Boolean(db.cart.find(({ id }) => id === productId));
    const selectedProduct = mock_products.find(({ id }) => id === productId);

    if (isDuplicated || !selectedProduct) {
      return HttpResponse.json({
        data: {
          success: false,
        },
      });
    }

    db.cart.push(selectedProduct);

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
