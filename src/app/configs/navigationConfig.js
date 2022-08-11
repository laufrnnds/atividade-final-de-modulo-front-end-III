import i18next from 'i18next';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'tarefas',
    title: 'Tarefas',
    subtitle: 'Lista de Tarefas',
    type: 'item',
    icon: 'heroicons-outline:book-open',
    translate: 'Tarefas',
    url: 'tarefas',
    end: true,
  },
  {
    id: 'logout',
    title: 'logout',
    subtitle: 'Sair da Aplicação',
    type: 'group',
    icon: 'heroicons-outline:logout',
    translate: 'Logout',
    url: 'sign-out',
    end: true,
  },
];

export default navigationConfig;
