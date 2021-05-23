  
'use strict';

const events = require('../events');
const vendor = require('./vendor.js');
const driver = require('./driver.js');



// const orderintering = new vendor.Vendor();

setInterval(() => {
  events.emit('pickup', { event: 'pickup', time: `${new Date().toString()}`, payload: vendor.order()});
}, 5000);

events.on('pickup', driver.pickedUp);
events.on('in-transit', driver.deliveredOrder);
events.on('delivered', vendor.thankYou);

