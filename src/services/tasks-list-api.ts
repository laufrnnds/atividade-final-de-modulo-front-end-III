/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-tasks-list.herokuapp.com',
});

async function getTarefas(token: string): Promise<any> {
  const response = await axios.get(`/task/readTasksByUserId?token=${token}`);

  const { data } = response;

  if (data.ok === false) {
    console.log('AXIOS ERROR: ', data.error);
    console.log(data.error);
    throw new Error('Deu ruim em alguma parte');
  }

  return data.data;
}

export { getTarefas };
export default api;
