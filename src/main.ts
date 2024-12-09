import { RESTClient } from './rest';
import * as dotenv from 'dotenv';
dotenv.config();
const thekey = '';
const client = new RESTClient('', thekey.replace(/\\n/g, '\n'));

client
  .listOrders({})
  .then((result) => {
    console.log(result);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require('fs');
    fs.writeFileSync('orders.json', JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.error(error.message);
  });
