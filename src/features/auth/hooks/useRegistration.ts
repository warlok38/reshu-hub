import { enqueueSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useRegistrationMutation } from 'shared/api/registration/registrationApi';
import { RegistrationFormEntity } from 'shared/models/registration';

export function useRegistration() {
  const [registration, { isLoading, isError }] = useRegistrationMutation();
  const navigate = useNavigate();
  const form = useForm<RegistrationFormEntity>();

  const submitHandler = (values: RegistrationFormEntity) => {
    const { firstName, middleName, lastName, email, password } = values;

    registration({ firstName, middleName, lastName, email, password })
      .unwrap()
      .then(() => {
        navigate('/');
        form.reset();
      })
      .catch((error) => {
        enqueueSnackbar(error?.message || 'Ошибка при регистрации', {
          variant: 'error',
          autoHideDuration: 3000,
        });
      });
  };

  return {
    form,
    isLoading,
    isError,
    onSubmit: submitHandler,
  };
}
