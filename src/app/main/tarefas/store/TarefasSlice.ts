/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import {
  atualizarTarefaApi,
  buscarTarefasApi,
  criarTarefaApi,
  excluirTarefaApi,
} from '../../../services/tasks-list-api';
import { Dado, Tarefa } from './types';

interface buscaTarefasParametro {
  url: string;
  token: string;
}

interface criaEditaTarefaParametro {
  url: string;
  data: Dado;
}

interface deletaTarefaParametro {
  url: string;
  id: string;
  token: string;
}

export const buscarTarefas = createAsyncThunk(
  'tarefas/buscarTarefas',
  async (dado: buscaTarefasParametro) => {
    const { url, token } = dado;
    const response = await buscarTarefasApi(url, token)
      .then((tarefas: any) => {
        return tarefas;
      })
      .catch((erro: any) => {
        return erro;
      });
    return response;
  }
);

export const criarTarefa = createAsyncThunk(
  'tarefas/criarTarefa',
  async (dado: criaEditaTarefaParametro) => {
    const { url, data } = dado;
    const response = await criarTarefaApi(url, data)
      .then((tarefa: any) => tarefa)
      .catch((erro: any) => erro);
    return response;
  }
);

export const atualizarTarefa = createAsyncThunk(
  'tarefas/atualizarTarefas',
  async (dado: criaEditaTarefaParametro) => {
    const { url, data } = dado;
    const response = await atualizarTarefaApi(url, data)
      .then((res: any) => (res ? 'Tarefa atualizada!' : 'Tarefa não atualizada'))
      .catch((erro: any) => 'Tarefa não atualizada');
    return response;
  }
);

export const excluirTarefa = createAsyncThunk(
  'tarefas/excluirTarefas',
  async (dado: deletaTarefaParametro) => {
    const { url, id, token } = dado;
    const response = await excluirTarefaApi(url, id, token)
      .then((res: any) => (res ? 'Tarefa excluída!' : 'Não foi possivel excluir a tarefa!'))
      .catch((erro: any) => 'Não foi possivel excluir a tarefa!');
    return response;
  }
);

const adapter = createEntityAdapter<Tarefa>({
  selectId: (item) => item.id,
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.tarefas);

const TarefasSlice = createSlice({
  name: 'tarefas',
  initialState: adapter.getInitialState({ loading: false }),
  reducers: {
    deletarTarefa: adapter.removeOne,
    updateTarefa: adapter.updateOne,
  },
  extraReducers(builder) {
    builder.addCase(buscarTarefas.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(buscarTarefas.fulfilled, (state, action) => {
      state.loading = false;
      adapter.setAll(state, action.payload);
    });
    builder.addCase(criarTarefa.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(criarTarefa.fulfilled, (state, action) => {
      state.loading = false;
      adapter.addOne(state, action.payload);
    });
    builder.addCase(atualizarTarefa.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
    });
    builder.addCase(excluirTarefa.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload);
    });
  },
});

export const { deletarTarefa, updateTarefa } = TarefasSlice.actions;
export default TarefasSlice.reducer;
