import { createSlice } from '@reduxjs/toolkit';
import { Tarefa } from './types';

const initialState: Tarefa = { title: '', uid: '' };

const TarefaSlice = createSlice({
  name: 'tarefa',
  initialState,
  reducers: {
    create(state, action) {
      return action.payload;
    },
    clear() {
      return initialState;
    },
  },
});

export const { create, clear } = TarefaSlice.actions;
export default TarefaSlice.reducer;
