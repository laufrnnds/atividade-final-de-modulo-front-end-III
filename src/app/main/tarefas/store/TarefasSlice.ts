import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Tarefa } from './types';

const adapter = createEntityAdapter<Tarefa>({
  selectId: (item) => item.uid,
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.tarefas);

const TarefasSlice = createSlice({
  name: 'tarefas',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
  },
});

export const { addOne, addMany, updateOne } = TarefasSlice.actions;
export default TarefasSlice.reducer;
