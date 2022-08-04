import { isArray } from './utils';

export function min(array) {
  let result;
  if (!isArray(array)) {
    result = array;
  } else {
    result = Math.min(...array);
  }
  return result;
}

export function copy() {}

export function reverseMerge() {}

export function filterAttribs() {}
