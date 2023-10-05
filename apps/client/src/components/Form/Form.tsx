import { IFormField } from '@utility/type-script';
import style from './Form.module.scss';
import { FormField } from './FormField';
import React, { useState } from 'react';

export interface IForm {
  formData: IFormField[];
  onSubmit(): void;
}

export const Form = ({ formData, onSubmit }: IForm) => {
  let [fields, setFields] = useState([...formData]);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const onFieldChange = (key: string, value: string) => {
    fields[fields.findIndex((field) => field.fieldName === key)] = {
      ...fields[fields.findIndex((field) => field.fieldName === key)],
      value: value,
    };
    setFields([...fields]);
  };

  return (
    <form onSubmit={onSubmitHandler} className={style.form}>
      {fields.map((field: IFormField) => {
        return (
          <FormField
            field={field}
            value={field.value ?? ''}
            onChange={onFieldChange}
          />
        );
      })}
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};
