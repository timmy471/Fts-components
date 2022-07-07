import * as Yup from 'yup';
import { countries } from './constants';

export const validateEmail = (email: string) => {
  //Check for @,. com
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const validatePassword = (password: string) => {
  // Regex to check for minimum 8 characters, at least one number and one letter
  const newReg = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).test(password);
  return newReg;
};

export const defaultValidation = (name: string) =>
  Yup.string().required(`${name} is required`);

export const urlValidation = (name: string) =>
  Yup.string()
    .matches(
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
      'Enter valid url!'
    )
    .required(`${name} is required`);

// /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/

export const getTableAlternatingBg = (index: number) =>
  index % 2 === 0 ? 'table-row-light' : 'table-row-dark';

export const getNationalitiesForForm = () =>
  countries.map((country) => ({ label: country.nationality, value: country.nationality }));

export const getCountries = () =>
  countries.map((country) => ({ label: country.name, value: country.name }));
