import { graphql, HttpResponse } from 'msw';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

const mock_categories = Array.from({ length: 5 }, () => faker.hacker.noun());
const mock_products = Array.from({ length: 20 }, () => ({
  id: uuidv4(),
  title: 'Miffy',
  price: 70,
  category: 'plush toys',
  description: `Super soft Miffy plush in 100% recycled fabric, measures 24cm tall. Miffy looks adorable and is perfect for Miffy fans of all ages!
  Our Miffy and Melanie plushies are all produced according to the highest standards of ethical production.
  We're proud of being certified by the ICTI - Ethical Toy Program and committed to build better lives for workers around the world
  For the stuffing of our Plush we use 100% recycled PET bottles`,
  image:
    'https://contents.lotteon.com/itemimage/LO/21/06/62/68/54/_2/10/66/26/85/5/LO2106626854_2106626855_1.jpg',
  createdAt: new Date().toString(),
}));

/**\
 * Handlers are for intercepting requests and mocking responses.
 */
export default [
  graphql.query('GET_CATEGORIES', () => {
    return HttpResponse.json({
      data: mock_categories,
    });
  }),
  graphql.query('GET_PRODUCTS', () => {
    return HttpResponse.json({
      data: mock_products,
    });
  }),
];
