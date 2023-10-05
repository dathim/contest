import { IFormField } from '@utility/type-script';
import style from './Form.module.scss';
import { FormControl } from '@mui/material';
import { Label } from './Label/Label';
import { Input } from '@mui/base/Input';

export interface IFormFieldProps {
  field: IFormField;
  onChange(): void;
}

export const FormField = ({ field, onChange }: IFormFieldProps) => {
  console.log(field, onChange);
  return (
    <FormControl defaultValue="" required>
      <Label>{field.title}</Label>
      <Input
        slots={{ root: 'aside' }}
        onClick={() => {
          console.log('click');
        }}
      />
    </FormControl>
  );
};
