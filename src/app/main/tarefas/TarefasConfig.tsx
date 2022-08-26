import { authRoles } from 'app/auth';
import { lazy } from 'react';

const Tarefas = lazy(() => import('./Tarefas'));

const TarefasConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: true,
        },
        toolbar: {
          display: true,
        },
      },
    },
  },
  auth: authRoles.admin, // isso aqui tem que existir
  routes: [
    {
      path: 'tarefas',
      element: <Tarefas />,
    },
  ],
};

export default TarefasConfig;
