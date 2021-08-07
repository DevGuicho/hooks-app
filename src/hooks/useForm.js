import { useState } from "react";

const useForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState);

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return [form, handleInputChange];
};

export default useForm;
