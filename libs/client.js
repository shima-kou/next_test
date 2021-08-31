import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'stripeportfolio',
  apiKey: process.env.API_KEY,
});
