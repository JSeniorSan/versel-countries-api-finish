const ROUNTRIES_URL = "https://restcountries.com/v3.1/";

export const ALL_COUNTRIES =
  ROUNTRIES_URL + "all?fields=name,flags,region,population,capital";

export const COUNTRY_BY_NAME = (name) => ROUNTRIES_URL + "name/" + name;

export const COUTRY_BY_CODE = (code) =>
  ROUNTRIES_URL + "alpha?codes=" + code.join(",");
