import * as qs from 'query-string';

const queryString = {
  stringify: qs.stringify,
  parse: qs.parse,
  stringifyUrl: qs.stringifyUrl,
  parseUrl: qs.parseUrl,
};

export function stringify(object) {
  return queryString.stringify(object);
}

export function stringifyUrl(object) {
  return queryString.stringifyUrl(object);
}

export function parse(search) {
  return queryString.parse(search);
}

export function parseUrl(url) {
  return queryString.parseUrl(url, { parseFragmentIdentifier: true });
}