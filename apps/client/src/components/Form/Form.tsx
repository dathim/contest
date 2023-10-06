import { IFormField } from '@utility/type-script';
import style from './Form.module.scss';
import { FormField } from './FormField';
import React, { useState } from 'react';
import { useActions, useAppSelector } from '@/hooks/useActions';

export interface IForm {
  formData: IFormField[];
  onSubmit(): void;
}

export const Form = ({ formData }: IForm) => {
  const registrationData = useAppSelector(
    (state) => state.profile.registration
  );

  let [fields, setFields] = useState<IFormField[]>([
    ...new Map(
      [...formData, ...registrationData].map((field: IFormField) => {
        return [field.fieldName, field];
      })
    ).values(),
  ]);

  const { setRegistrationData } = useActions();

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const onFieldChange = (key: string, value: string) => {
    const updateIndex = fields.findIndex((field) => field.fieldName === key);
    fields[updateIndex] = {
      ...fields[updateIndex],
      value: value,
    };
    setRegistrationData(fields[updateIndex]);
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
            onChange={onFieldChange}
          />
        );
      })}
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};
