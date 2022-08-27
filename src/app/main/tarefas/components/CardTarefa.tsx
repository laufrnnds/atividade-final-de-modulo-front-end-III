/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { selectUser } from 'app/store/userSlice';
import ModalTarefa from './ModalTarefa';
import { deletarTarefa, excluirTarefa } from '../store/TarefasSlice';

interface CardTarefaProps {
  id: string;
  description: string;
  detail: string;
}

const CardTarefa: React.FC<CardTarefaProps> = ({ id, description, detail }) => {
  const dispatch = useAppDispatch();
  const usuarioLogado = useAppSelector(selectUser);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleEditar = () => {
    handleOpen();
  };
  const handleApagar = (id: string) => {
    const confirma = confirm('Tem certeza que quer apagar o recado?');
    if (confirma) {
      const { token } = usuarioLogado.data;
      dispatch(excluirTarefa({ url: '/task', id, token }));
      dispatch(deletarTarefa(id));
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          minWidth: 300,
          maxWidth: 300,
          backgroundColor: '#d3c3a2',
          color: '#689990',
          maxHeight: 400,
          minHeight: 150,
          marginBottom: '15px',
        }}
        id={id}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {description}
            </Typography>

            <Typography variant="body2" component="div">
              {detail}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
          <IconButton aria-label="editar tarefa" onClick={handleEditar}>
            <EditIcon color="primary" />
          </IconButton>
          <IconButton aria-label="apagar tarefa" onClick={() => handleApagar(id)}>
            <DeleteIcon color="secondary" />
          </IconButton>
        </CardActions>
      </Card>
      <ModalTarefa criar={false} openModal={open} id={id} actionCancel={handleClose} />
    </>
  );
};

export default CardTarefa;
