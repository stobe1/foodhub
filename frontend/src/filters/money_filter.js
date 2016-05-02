angular.module('Foodhub')
  .filter('moneyFilter', function moneyFilter() {
    let services = {};
    services.currencyName = "р.";
    services.separator = ".";
    services.spaсe = " ";
    services.countNumAfterSeparator = 2;

    /**
    * Форматирование числа или строки к виду денежных единиц
    *
    * @param {string or number} value
    * @return {string} Строка в денежном формате
    */
    return function (value) {
      if( typeof(value) === 'string'){
        value = value.replace(/ /g,'');
        value = parseFloat(value);
      }

      if( typeof(value) === 'number'){
        let valueString = value+"";

        let coutn_after = 0;
        if(valueString.indexOf('.') > -1)
          coutn_after = services.countNumAfterSeparator;

        let normalNum = value.toFixed(coutn_after);

        valueString = normalNum.replace(/./g, function(curentChar, index, full_string) {
          let returnData = curentChar;

          if(curentChar !== '.' && ((full_string.length - index) % 3 === 0))
            returnData = services.spaсe + curentChar;

          return returnData;
        });

        valueString = valueString.replace(/\./g, services.separator);

        return valueString  + ' ' + services.currencyName;
      }
      return "";
    }

    //return services;
  });
