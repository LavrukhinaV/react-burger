import { ChangeEvent, useState } from "react";
import { TFormValue } from "../utils/types";

export function useForm(inputValues: TFormValue={}) {
  const [values, setValues] = useState<TFormValue>(inputValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;
    setValues({...values, [name]: value});
  };
  return {values, handleChange, setValues};
};