import { isArray } from './utils';

export function min(array) {
  let result;
  if (array) {
    if (!isArray(array)) {
      result = array;
    } else {
      result = Math.min(...array);
    }
  } else {
    result = undefined;
  }

  return result;
}

export function copy() {}

export function reverseMerge() {}

export function filterAttribs() {}
