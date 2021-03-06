import {useState} from 'react';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const reset = () => {setValues(initialState)};
  const handleInputChange = ({nativeEvent}, name) => {
    setValues({
      ...values,
      [name]: nativeEvent.text
    });
  };
  return [values, handleInputChange, reset];
};