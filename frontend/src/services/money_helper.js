angular.module('Foodhub')
  .factory('MoneyHelper', function MoneyHelper() {
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
    services.convertToMoney = function (value) {
      if( typeof(value) === 'string'){
        value = value.replace(/ /g,'');
        value = parseFloat(value);
      }

      if( typeof(value) === 'number'){
        let valueString = value+"";

        let coutn_after = 0;
        if(valueString.indexOf('.') > -1)
          coutn_after = services.countNumAfterSeparator;

        let normal_num = value.toFixed(coutn_after);

        valueString = normal_num.replace(/./g, function(curent_char, index, full_string) {
          let return_data = curent_char;

          if(curent_char !== '.' && ((full_string.length - index) % 3 === 0))
            return_data = services.spaсe + curent_char;

          return return_data;
        });

        valueString = valueString.replace(/\./g, services.separator);

        return valueString  + ' ' + services.currencyName;
      }
      return "";
    }

    return services;
  });
