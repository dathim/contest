import Fade from '@mui/material/Fade';
import { Box, styled, Theme } from '@mui/system';
import { Form } from '@/components/Form/Form';
import { useGetConfigQuery } from '@/store/api/config.api';

export interface IRegistration {
  id: string;
}

const style = (theme: Theme) => ({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  borderRadius: '12px',
  padding: '16px 32px 24px 32px',
  backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  boxShadow: `0px 2px 24px ${
    theme.palette.mode === 'dark' ? '#000' : '#383838'
  }`,
});

export const Registration = ({}: IRegistration) => {
  const onSubmitHandler = () => {};

  const { isSuccess, data } = useGetConfigQuery(null);
  if (!isSuccess) return <>Lading</>;

  return (
    <Fade in={true}>
      <Box sx={style}>
        <h2 id="transition-modal-title">Регистрация</h2>
        <Form formData={data?.registration.fields} onSubmit={onSubmitHandler} />
      </Box>
    </Fade>
  );
};
