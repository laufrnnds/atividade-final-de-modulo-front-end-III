/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { Box } from '@mui/system';
import { useAppDispatch } from 'app/store/hooks';
import jwtService from '../../../auth/services/jwtService';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup
    .string()
    .email('Você precisa informar um e-mail válido')
    .required('Você deve inserir um e-mail'),
  password: yup
    .string()
    .required('Por favor insira uma senha')
    .min(5, 'A senha é muito curta - deve ter pelo menos 5 caracteres.'),
});

const defaultValues = {
  email: '',
  password: '',
};

function SignIn() {
  const { control, formState, handleSubmit, setError, setValue } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    setValue('email', 'teste10@teste.com', { shouldDirty: true, shouldValidate: true });
    setValue('password', '1234@', { shouldDirty: true, shouldValidate: true });
  }, [setValue]);

  function onSubmit({ email, password }) {
    jwtService
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // No need to do anything, user data will be set at app/auth/AuthContext
      })
      .catch((_errors) => {
        _errors.forEach((error) => {
          setError(error.type, {
            type: 'manual',
            message: error.message,
          });
        });
      });
  }

  return (
    <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">
      <Box className="relative hidden md:flex flex-auto items-center justify-center h-full p-64 lg:px-112 overflow-hidden fundoSignIn">
        <Paper className="w-3/4 p-8 flex text-center flex-col md:flex-row papersignin">
          <div className="z-10 relative w-full max-w-2xl">
            <div className="text-7xl font-bold leading-none">
              <div>Tarefas App</div>
              <div>meu framework</div>
              <div>ReactJS</div>
            </div>
            <div className="mt-24 text-lg tracking-tight leading-6 opacity-100">
              Sistema de tarefas para atividade final do Módulo Front-End III
            </div>
          </div>
        </Paper>
      </Box>

      <Paper className="h-full sm:h-auto md:flex w-full sm:w-auto md:h-full py-32 px-16 sm:p-48 md:p-64 md:pt-96  sm:rounded-2xl md:rounded-none sm:shadow md:shadow-none rtl:border-r-1 ltr:border-l-1">
        <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-0">
          <Typography className="mt-32 text-4xl font-extrabold tracking-tight leading-tight">
            Entrar
          </Typography>
          <div className="flex items-baseline mt-2 font-medium">
            <Typography>Não possui uma conta?</Typography>
            <Link className="ml-4" to="/sign-up">
              Cadastrar-se
            </Link>
          </div>

          <form
            name="loginForm"
            noValidate
            className="flex flex-col justify-center w-full mt-32"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Email"
                  autoFocus
                  type="email"
                  error={!!errors.email}
                  helperText={errors?.email?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Password"
                  type="password"
                  error={!!errors.password}
                  helperText={errors?.password?.message}
                  variant="outlined"
                  required
                  fullWidth
                  autoComplete="off"
                />
              )}
            />
            <Button
              variant="contained"
              color="secondary"
              className=" w-full mt-16"
              aria-label="Sign in"
              disabled={_.isEmpty(dirtyFields) || !isValid}
              type="submit"
              size="large"
            >
              Entrar
            </Button>
          </form>
        </div>
      </Paper>
    </div>
  );
}

export default SignIn;
