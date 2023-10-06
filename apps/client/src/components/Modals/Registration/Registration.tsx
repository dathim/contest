import Fade from '@mui/material/Fade';
import { Box } from '@mui/system';
import { Form } from '@/components/Form/Form';
import { useGetConfigQuery } from '@/store/api/config.api';
import { IFormField } from '@utility/type-script';
import style from './Registration.module.scss';
import { useActions, useAppSelector } from '@/hooks/useActions';

export interface IRegistration {
  id: string;
}

export const Registration = ({}: IRegistration) => {
  const { storeProfileAction, setRegistrationData } = useActions();

  const registrationData = useAppSelector(
    (state) => state.profile.registration
  );

  const onFieldChangeHandler = (field: IFormField) => {
    setRegistrationData(field);
  };

  const onSubmitHandler = () => {
    storeProfileAction();
  };

  const { isSuccess, data } = useGetConfigQuery(null);
  if (!isSuccess) return <>Lading</>;

  const loadFormFields = () => {
    return [
      ...new Map(
        [
          ...(data?.registration.fields as IFormField[]),
          ...registrationData,
        ].map((field: IFormField) => {
          return [field.fieldName, field];
        })
      ).values(),
    ];
  };
  return (
    <Fade in={true}>
      <Box sx={style}>
        <h2 id="transition-modal-title">Регистрация</h2>
        <Form
          formData={loadFormFields()}
          onFieldChange={onFieldChangeHandler}
          onSubmit={onSubmitHandler}
        />
      </Box>
    </Fade>
  );
};
