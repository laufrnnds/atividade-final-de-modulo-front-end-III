import { combineReducers } from '@reduxjs/toolkit';
import notificationPanel from 'app/theme-layouts/shared-components/notificationPanel/store';
import chatPanel from 'app/theme-layouts/shared-components/chatPanel/store';
import quickPanel from 'app/theme-layouts/shared-components/quickPanel/store';
import fuse from './fuse';
import i18n from './i18nSlice';
import user from './userSlice';
import tarefas from '../main/tarefas/store';

const combinedReducer = combineReducers({
  fuse,
  i18n,
  user,
  chatPanel,
  notificationPanel,
  quickPanel,
  tarefas,
});

export default combinedReducer;
