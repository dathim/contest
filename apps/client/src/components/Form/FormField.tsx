import { IFieldDataType, IFormField } from '@utility/type-script';
import { FormControl, FormControlState } from '@mui/base/FormControl';
import { Label } from './Label/Label';
import React from 'react';
import { Input, styled } from '@mui/material';
import style from './Form.module.scss';

export interface IFormFieldProps {
  value: string;
  field: IFormField;
  onChange(fieldName: string, value: string): void;
}

export const FormField = ({ value, field, onChange }: IFormFieldProps) => {
  const onChangeHandler = (value: string) => {
    onChange(field.fieldName, value);
  };

  return (
    <FormControl defaultValue="" required value={value}>
      {({ filled, focused }: FormControlState) => (
        <React.Fragment>
          <Label>{field.title}</Label>
          {field.dataType === IFieldDataType.STRING && (
            <Input
              className={style['form-field']}
              name={field.fieldName}
              onChange={(e) => onChangeHandler(e.target.value)}
            />
          )}
          {field.dataType === IFieldDataType.DATE && (
            <Input
              className={style['form-field']}
              name={field.fieldName}
              onChange={(e) => onChangeHandler(e.target.value)}
            />
          )}
          {field.dataType === IFieldDataType.NUMBER && (
            <Input
              className={style['form-field']}
              name={field.fieldName}
              onChange={(e) => onChangeHandler(e.target.value)}
            />
          )}
          {filled && !focused && <OkMark>✔</OkMark>}
        </React.Fragment>
      )}
    </FormControl>
  );
};

const OkMark = styled('span')`
  margin-left: 8px;
  margin-top: 10px;
  position: absolute;
  color: rgb(125 200 0 / 1);
`;
