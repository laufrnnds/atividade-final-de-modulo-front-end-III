/* eslint-disable camelcase */
import { Dado, Tarefa } from 'app/main/tarefas/store/types';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-tasks-list.herokuapp.com',
});

async function buscarTarefasApi(url: string, token: string): Promise<Tarefa[]> {
  try {
    const response = await api.get(url, { params: { token } });

    return response.data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

async function criarTarefaApi(url: string, data: Dado): Promise<Tarefa | null> {
  try {
    const response = await api.post(url, data);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function excluirTarefaApi(url: string, id: string, token: string): Promise<boolean> {
  try {
    const response = await api.delete(`${url}/${id}?token=${token}`);
    return response.data.ok;
  } catch (err) {
    console.log(err);
    return false;
  }
}

async function atualizarTarefaApi(url: string, data: Dado): Promise<boolean> {
  try {
    const response = await api.put(url, data);
    return response.data.ok;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export { buscarTarefasApi, criarTarefaApi, atualizarTarefaApi, excluirTarefaApi };
