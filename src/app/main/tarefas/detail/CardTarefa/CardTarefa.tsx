/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  FormGroup,
  Grid,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from 'app/store/hooks';
import { Box } from '@mui/system';
import CustomButton from '../../list/CustomButton';

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

interface CardTarefaProps {
  id: string;
  description: string;
  detail: string;
  userid: string;
}

const CardTarefa: React.FC<CardTarefaProps> = ({ id, description, detail, userid }) => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEditar = () => {
    console.log('oi');
    handleOpen();
  };
  const handleApagar = () => {
    confirm('Tem certeza que quer apagar o recado?');
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 300,
          backgroundColor: '#d3c3a2',
          color: '#689990',
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
          <IconButton aria-label="editar tarefa" onClick={() => handleEditar()}>
            <EditIcon color="primary" />
          </IconButton>
          <IconButton aria-label="apagar tarefa" onClick={() => handleApagar()}>
            <DeleteIcon color="secondary" />
          </IconButton>
        </CardActions>
      </Card>

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
                <Typography id="modal-modal-title" variant="h6" component="h2" className="mb-10">
                  Título da Tarefa
                </Typography>
                <TextField
                  id="titulo-tarefa"
                  label="Título"
                  multiline
                  defaultValue="Escreva aqui ..."
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
                  defaultValue="Escreva aqui ..."
                  className="mb-20"
                />
              </Grid>
              <Grid item xs={12} className="flex flex-row space-x-20 justify-center items-center">
                <CustomButton color="primary" title="Salvar" icon={<SaveIcon />} />
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
    </>
  );
};

export default CardTarefa;
