import { useState } from "react";

const useForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState);

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => {
    setForm(initialState);
  };
  return [form, handleInputChange, reset];
};

export default useForm;
