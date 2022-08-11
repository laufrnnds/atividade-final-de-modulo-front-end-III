import FuseUtils from '@fuse/utils';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import TarefasConfig from 'app/main/tarefas/TarefasConfig';
import FuseSplashScreen from '@fuse/core/FuseSplashScreen';
import signInConfig from '../main/authentication/sign-in/signInConfig';
import signUpConfig from '../main/authentication/sign-up/signUpConfig';
import signOutConfig from '../main/authentication/sign-out/signOutConfig';
import errorPagesConfig from '../main/error/errorPagesConfig';

const routeConfigs = [signOutConfig, signInConfig, signUpConfig, errorPagesConfig, TarefasConfig];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: '/',
    element: <Navigate to="tarefas" />,
    auth: settingsConfig.defaultAuth,
  },
  {
    path: 'loading',
    element: <FuseSplashScreen />,
  },
  {
    path: '*',
    element: <Navigate to="error/404" />,
  },
];

export default routes;
