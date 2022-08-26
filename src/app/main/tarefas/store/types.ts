/* eslint-disable camelcase */
export interface Tarefa {
  id: string;
  description: string;
  detail: string;
  user_id?: string;
  create_at: Date;
  updated_at: Date;
}

export interface Dado {
  id?: string;
  description: string;
  detail: string;
  token?: string;
}
