function isSameArray(source, target) {
  if (isEmptyArray(source) || isEmptyArray(target)) return isEqualLength(source, target);
  if (!isEqualLength(source, target)) return false;

  return source.every((sourceValue, index) => {
    return isArray(sourceValue) && isArray(target[index]) ?
      isEqualLength(sourceValue.length, target[index].length) ?
        isSameArray(sourceValue, target[index]) :
        false :
      isObject(sourceValue) && isObject(target[index]) ?
        isSameObject(sourceValue, target[index]):
        isPrimitive(sourceValue) && isPrimitive(target[index]);
  });
}

/*
* Get random number
* @param {Number} number - A number that must be generated randomly
* */
export function randomNumber(number = 1) {
  return Math.floor(Math.random() * number);
}

export const {isArray} = Array;

export function isObject(data) {
  return data !== null && typeof data === 'object' && !isArray(data);
}

export function isElement(data) {
  return isObject(data) && data.nodeType === 1;
}

export function isNumber(data) {
  return typeof data === 'number';
}

export function isBoolean(data) {
  return typeof data === 'boolean';
}

export function isString(data) {
  return typeof data === 'string';
}

export function isFunction(data) {
  return typeof data === 'function';
}

export function isPrimitive(data) {
  return !(isArray(data) || isObject(data) || isFunction(data)) && data !== null
}

export function isEmpty(data) {
  return !(isArray(data) ?
      data.length : (
        isObject(data) ?
          isElement(data) || Object.keys(data).length : (
          !(isNumber(data) || isBoolean(data)) ? data : true
        )
      )
  );
}

export function isEmptyString(data) {
  return !(isString(data) ? data : false);
}

export function isEmptyArray(data) {
  return !(isArray(data) ? data.length : false);
}

export function isEqualLength(source, target) {
  return [...source].length === [...target].length;
}

export function isSameObject(source, target) {
  const sourceKeys = Object.keys(source);
  const targetKeys = Object.keys(target);
  if (isEmptyArray(sourceKeys) || isEmptyArray(targetKeys)) return isEqualLength(sourceKeys, targetKeys);
  if (!isEqualLength(sourceKeys, targetKeys)) return false;

  return sourceKeys.every((sourceKey) => {
    return isObject(source[sourceKey]) && isObject(target[sourceKey]) ?
      isSameObject(source[sourceKey], target[sourceKey]) :
      isArray(source[sourceKey]) && isArray(target[sourceKey]) ?
        isSameArray(source[sourceKey], target[sourceKey]) :
        targetKeys.includes(sourceKey);
  });
}

export function isUnitMeasurement(data, unit) {
  const matchData = data.replace(unit, '').match(/^[0-9]+/);
  const unitData = data.substr(data.length - unit.length, unit.length);
  return unitData === unit && matchData.input === matchData[0];
}

export function resizeObserver(callback) {
  try {
    return new ResizeObserver(() => callback.call());
  } catch (error) {
    console.log('Error on resizeObserver : ', error);
  }
}
