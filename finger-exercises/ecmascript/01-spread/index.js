import { isArray } from './utils';

export function min(...array) {
  return array.flat().length === 0 ? undefined : Math.min(...array.flat());
}

export function copy(toCopy) {
  return isArray(toCopy) ? [...toCopy] : { ...toCopy };
}

export function reverseMerge() {}

export function filterAttribs() {}
