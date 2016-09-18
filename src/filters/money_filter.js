const angular = require('angular');

function moneyFilter() {
  const services = {};
  services.currencyName = 'р.';
  services.separator = '.';
  services.spaсe = ' ';
  services.countNumAfterSeparator = 2;

  /**
  * Возвращает или символ или символ с services.spaсe в зависмиости от положения входного символа
  *
  * @param {char} curentChar
  * @param {int} index
  * @param {string} fullString
  * @return {string} или curentChar, или services.spaсe + curentChar
  */
  function addSpace(curentChar, index, fullString) {
    let returnData = curentChar;

    if (curentChar !== '.' && ((fullString.length - index) % 3 === 0)) {
      returnData = services.spaсe + curentChar;
    }

    return returnData;
  }


  /**
  * Форматирование числа или строки к виду денежных единиц
  *
  * @param {string or number} dataValue
  * @return {string} Строка в денежном формате
  */
  function returnFunction(dataValue) {
    let value;
    if (typeof(dataValue) === 'string') {
      value = dataValue.replace(/ /g, '');
      value = parseFloat(value);
    }

    if (typeof(dataValue) === 'number') {
      let valueString = String(dataValue);
      let value = dataValue;

      let coutnAfter = 0;
      if (valueString.indexOf('.') > -1) {
        coutnAfter = services.countNumAfterSeparator;
      }

      const normalNum = value.toFixed(coutnAfter);

      valueString = normalNum.replace(/./g, addSpace);

      valueString = valueString.replace(/\./g, services.separator);
      valueString = `${valueString} ${services.currencyName}`;

      return valueString;
    }
    return '';
  }

  return returnFunction;
}

angular.module('Foodhub').filter('moneyFilter', moneyFilter);
