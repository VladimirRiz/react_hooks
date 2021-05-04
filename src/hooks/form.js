import { useState } from 'react';

export const useFormValidation = () => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const valueHandler = ({ target }) => {
    setValue(target.value);
    target.value.trim() === '' ? setIsValid(false) : setIsValid(true);
  };

  return { value, valueHandler, isValid };
};
