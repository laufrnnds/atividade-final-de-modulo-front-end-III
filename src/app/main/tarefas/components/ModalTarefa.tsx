/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, FormGroup, Grid, Modal, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import { selectUser } from 'app/store/userSlice';
import CustomButton from './CustomButton';
import {
  atualizarTarefa,
  criarTarefa,
  selectAll,
  selectById,
  updateTarefa,
} from '../store/TarefasSlice';
import { Dado, Tarefa } from '../store/types';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ModalTarefaProps {
  openModal: boolean;
  id: string;
  criar: boolean;
  actionCancel: () => void;
}

const ModalTarefa: React.FC<ModalTarefaProps> = ({ openModal, id, criar, actionCancel }) => {
  const [open, setOpen] = useState(false);
  const tarefas = useAppSelector(selectAll);
  const [auxTarefas, setAuxTarefas] = useState<Tarefa[]>([]);
  const [titulo, setTitulo] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');
  const usuarioLogado = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const tarefa = useAppSelector((state) => selectById(state, id));

  useEffect(() => {
    setAuxTarefas(tarefas);
  }, [tarefas]);

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  useEffect(() => {
    if (criar) {
      setTitulo('');
      setDescricao('');
    }
    if (!criar) {
      setTitulo(tarefa?.description ?? '');
      setDescricao(tarefa?.detail ?? '');
    }
  }, []);

  const handleCriar = () => {
    console.log('ENTROU NO CRIAR TAREFA');
    const { token } = usuarioLogado.data;
    const novaTarefa: Dado = {
      description: titulo,
      detail: descricao,
      token,
    };
    console.log(novaTarefa);
    dispatch(criarTarefa({ url: '/task', data: novaTarefa }));
    handleClose();
  };

  const handleAtualizar = () => {
    const { token } = usuarioLogado.data;
    const tarefaAtualizada = {
      id,
      description: titulo,
      detail: descricao,
      token,
    };
    console.log('atualizar', tarefaAtualizada);
    dispatch(atualizarTarefa({ url: '/task', data: tarefaAtualizada }));
    dispatch(updateTarefa({ id, changes: { description: titulo, detail: descricao } }));
    handleClose();
  };

  const handleClose = () => {
    actionCancel();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <FormGroup>
          <Grid container className="flex flex-col space-y-3 h-full">
            <Grid item xs={12} className="mb-20 flex flex-col justify-center items-center">
              {criar ? (
                <Typography id="modal-modal-title" variant="h6" component="h2" className="mb-10">
                  Cadastrar Tarefa
                </Typography>
              ) : (
                <Typography id="modal-modal-title" variant="h6" component="h2" className="mb-10">
                  Editar Tarefa
                </Typography>
              )}
              <Typography id="modal-modal-title" variant="h6" component="h2" className="mb-10">
                Título da Tarefa
              </Typography>
              <TextField
                id="titulo-tarefa"
                label="Título"
                multiline
                defaultValue={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} className="flex flex-col justify-center items-center">
              <Typography id="modal-modal-description" className="mb-10">
                Escreva os detalhes da sua tarefa!
              </Typography>
              <TextField
                id="descricao-tarefa"
                label="Descrição"
                multiline
                rows={4}
                defaultValue={descricao}
                className="mb-20"
                onChange={(e) => setDescricao(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} className="flex flex-row space-x-20 justify-center items-center">
              {criar ? (
                <>
                  <CustomButton
                    color="primary"
                    title="Criar Tarefa"
                    onClick={handleCriar}
                    icon={<SaveIcon />}
                  />
                </>
              ) : (
                <CustomButton
                  color="primary"
                  title="Salvar"
                  icon={<SaveIcon />}
                  onClick={handleAtualizar}
                />
              )}
              <CustomButton
                color="primary"
                title="Cancelar"
                icon={<CloseIcon />}
                onClick={() => handleClose()}
              />
            </Grid>
          </Grid>
        </FormGroup>
        ;
      </Box>
    </Modal>
  );
};

export default ModalTarefa;
