import { IFormField } from '@utility/type-script';
import style from './Form.module.scss';
import { FormField } from './FormField';
import React, { useState } from 'react';
import { useActions, useAppSelector } from '@/hooks/useActions';

export interface IForm {
  formData: IFormField[];
  onSubmit(fields: IFormField[]): void;
  onFieldChange(field: IFormField): void;
}

export const Form = ({ formData, onSubmit, onFieldChange }: IForm) => {
  let [fields, setFields] = useState<IFormField[]>(formData);

  const onSubmitHandler = (e: React.FormEvent) => {
    console.log('onSubmitHandler');
    e.preventDefault();
    onSubmit(fields);
  };

  const onFieldChangeHandler = (key: string, value: string) => {
    const updateIndex = fields.findIndex((field) => field.fieldName === key);
    fields[updateIndex] = {
      ...fields[updateIndex],
      value: value,
    };
    onFieldChange(fields[updateIndex]);
    ///
    onFieldChange;
    setFields([...fields]);
  };

  return (
    <form onSubmit={onSubmitHandler} className={style.form}>
      {fields.map((field: IFormField) => {
        return (
          <FormField
            key={field.fieldName}
            field={field}
            value={field.value ?? ''}
            onChange={onFieldChangeHandler}
          />
        );
      })}
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};
