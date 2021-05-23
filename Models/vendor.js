'use strict';

require('dotenv').config();

const events = require('../events.js');
const storeName = process.env.storename;
const faker = require('faker');

function order(){
    let order = {
      store: storeName,
      orderId: faker.random.uuid(),
      customer: faker.name.findName(),
      address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
    }
    return order;
}

function thankYou(payload) {
    payload.event = 'delivered';
    console.log(`VENDOR: Thank you for delivering ${payload.payload.orderId}`);
    console.log('EVENT ', payload);
  }

  module.exports = {
    thankYou,
    order
  };
