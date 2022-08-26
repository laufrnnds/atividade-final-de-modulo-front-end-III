/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { selectUser } from 'app/store/userSlice';
import CardTarefa from './CardTarefa';
import { buscarTarefas, selectAll } from '../store/TarefasSlice';
import { Tarefa } from '../store/types';
// import { buscarTarefasApi } from '../../../services/tasks-list-api';

const TarefasContent: React.FC = () => {
  const tarefas = useAppSelector(selectAll);
  const dispatch = useAppDispatch();
  const usuarioLogado = useAppSelector(selectUser);
  const [auxTarefas, setAuxTarefas] = useState<Tarefa[]>([]);
  useEffect(() => {
    const { token } = usuarioLogado.data;
    dispatch(buscarTarefas({ url: '/task/readTasksByUserId', token }));
  }, []);
  useEffect(() => {
    setAuxTarefas(tarefas);
  }, [tarefas]);
  return (
    <>
      <Grid container spacing={1} className=" flex flex-row items-center justify-center">
        {auxTarefas.map((item: any) => (
          <Grid item xl={12} key={item.id}>
            <CardTarefa id={item.id} description={item.description} detail={item.detail} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default TarefasContent;
