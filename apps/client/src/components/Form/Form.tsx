import { IFormField } from '@utility/type-script';
import style from './Form.module.scss';
import { FormField } from './FormField';

export interface IForm {
  formData: IFormField[];
  onSubmit(): void;
}

export const Form = ({ formData, onSubmit }: IForm) => {
  console.log(formData, onSubmit);

  return (
    <div className={style.form}>
      {formData.map((field: IFormField) => {
        return (
          <FormField
            field={field}
            onChange={() => {
              console.log('onChange');
            }}
          />
        );
      })}
    </div>
  );
};
