import history from './history';
import { parse, stringify } from './queryString'

class RoutingService {

  setQueryString(loc) {
    const { search, pathname, key, hash, state, ...other } = loc;
    const parsed = parse(search);
    const parsedHash = parse(hash);
    return {
      ...other,
      pathname,
      search: parsed,
      hash: parsedHash,
      key,
      url: pathname + search,
    };
  };

  goTo(url, params) {
    const queryParams = stringify(params)
    console.log("history", history)
    console.log("history", queryParams ? `${url}?${queryParams}` : url)
    history.push(queryParams ? `${url}?${queryParams}` : url)
  };
};

export default new RoutingService;

