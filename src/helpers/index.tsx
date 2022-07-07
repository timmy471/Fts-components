import { countries } from './constants';

// /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/

export const getTableAlternatingBg = (index: number) =>
  index % 2 === 0 ? 'table-row-light' : 'table-row-dark';

export const getNationalitiesForForm = () =>
  countries.map((country) => ({ label: country.nationality, value: country.nationality }));

export const getCountries = () =>
  countries.map((country) => ({ label: country.name, value: country.name }));
