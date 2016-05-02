'use strict';

var cheerio = require('cheerio');
var request = require('request');

class Parser {
  constructor() {
    this.url = '';
    this.products = [];

  }

  load(url) {
    return new Promise(function (resolve, reject) {
      request(url, function(error, response, html) {
        if (error || response.statusCode !== 200) {
          reject(error);
          return;
        }
        resolve(cheerio.load(html));
      });
    });
  }

  toCheerio(url) {
    return cheerio.load(url);
  }

  getCategories() {
    throw new Error('Implementation of this method is required');
  }

  getProducts() {
    throw new Error('Implementation of this method is required');
  }

}
module.exports = Parser;
