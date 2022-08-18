/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getTarefas } from '../../../../services/tasks-list-api';

interface ITarefa {
  id: string;
  description: string;
  details: string;
}

const adapter = createEntityAdapter<ITarefa>({
  selectId: (item) => item.id,
});

export const { selectAll, selectById } = adapter.getSelectors((state: any) => state.tarefas);

export const buscaTarefas = createAsyncThunk(
  'tarefas/buscarTodasTarefas',
  async (token: string) => {
    const dados = getTarefas(token)
      .then((resposta) => resposta)
      .catch((error) => console.log(error));
    if (!dados) {
      return [];
    }
    return dados;
  }
);

const TarefasSlice = createSlice({
  name: 'tarefas',
  initialState: adapter.getInitialState(),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(buscaTarefas.fulfilled, (state, action) => {
      adapter.setAll(state, action.payload);
    });
  },
});

// export const {} = TarefasSlice.actions;
export default TarefasSlice.reducer;
