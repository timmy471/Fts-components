import * as Yup from 'yup';

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
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter valid url!'
    )
    .required(`${name} is required`);
