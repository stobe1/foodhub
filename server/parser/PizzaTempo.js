'use strict';

var request = require('request');
var cheerio = require('cheerio');
var Parser = require('./Parser');

class PizzaTempo extends Parser {
  constructor() {
    super();
    this.url = 'http://www.pizzatempo.by/';
    this.products = [];
  }

  getProducts() {
    this.getCategories().then((pages) => {
      console.log(pages);
    });
  }

  getCategories() {
    return this.load(this.url).then(($) => {
      var pages = [];

      var category = $('.menu a').map(function() {
        return $(this).attr('href');
      }).toArray();

      var promise = category.reduce((promise, url) => {
        return promise.then(() => {
          return this.load(url).then(($) => {
            if ($('.paging').length) {

              var n = $('.paging li').length;

              for (var j = 1; j < n; j++) {
                pages.push(url + '?paging=true&page=' + j);
              }

            } else pages.push(url + '?paging=true&page=1');
          });
        });
      }, Promise.resolve());

      return promise.then(() => pages);
    });
  }
}

var a = new PizzaTempo();

a.getProducts();
