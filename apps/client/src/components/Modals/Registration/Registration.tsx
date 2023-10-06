import Fade from '@mui/material/Fade';
import { Box } from '@mui/system';
import { Form } from '@/components/Form/Form';
import { useGetConfigQuery } from '@/store/api/config.api';
import { IFormField } from '@utility/type-script';
import style from './Registration.module.scss';
import { useAppSelector } from '@/hooks/useActions';

export interface IRegistration {
  id: string;
}

export const Registration = ({}: IRegistration) => {
  const onSubmitHandler = () => {};

  const { isSuccess, data } = useGetConfigQuery(null);
  if (!isSuccess) return <>Lading</>;

  return (
    <Fade in={true}>
      <Box sx={style}>
        <h2 id="transition-modal-title">Регистрация</h2>
        <Form
          formData={data?.registration.fields as IFormField[]}
          onSubmit={onSubmitHandler}
        />
      </Box>
    </Fade>
  );
};
