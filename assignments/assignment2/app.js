(function() {
  'use strict';
  angular.module('ShoppingListCheckOff', [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .provider("ShoppingListCheckOffService", ShoppingListCheckOffServiceProvider)
    .config(Config);


  Config.$inject = ['ShoppingListCheckOffServiceProvider']

  function Config(ShoppingListCheckOffServiceProvider) {
    ShoppingListCheckOffServiceProvider.defaults.items = [{
        quantity: 1,
        name: 'Cookies'
      },
      {
        quantity: 5,
        name: 'Breads'
      },
      {
        quantity: 3,
        name: 'Tomtatos'
      },
      {
        quantity: 7,
        name: 'Potatos'
      },
      {
        quantity: 2,
        name: 'Oranges'
      },
      {
        quantity: 6,
        name: 'Cheeses'
      },
    ];

  }

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getBuyItems();
    toBuy.hasNoItems = function() {
      return toBuy.items.length < 1;
    }
    toBuy.boughtItem = function(itemIndex) {
      ShoppingListCheckOffService.boughtItem(itemIndex);
    };

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.getBoughtItems();
    bought.hasNoItems = function () {
      return bought.items.length < 1;
    }
  }


  function ShoppingListCheckOffService(items) {
    var service = this;
    var toBuyItems = items;
    var boughtItems = [];

    service.boughtItem = function(itemIndex) {
      var itemBought = toBuyItems[itemIndex];
      toBuyItems.splice(itemIndex, 1);
      boughtItems.push(itemBought);
    }

    service.getBuyItems = function() {
      return toBuyItems;
    }

    service.getBoughtItems = function() {
      return boughtItems;
    }

  }

  function ShoppingListCheckOffServiceProvider() {
    var provider = this;
    provider.defaults = {
      items: []
    };

    provider.$get = function() {
      var shoppingListService = new ShoppingListCheckOffService(provider.defaults.items);
      return shoppingListService;
    };
  }


})();
