/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useAppDispatch } from 'app/store/hooks';
// import { adicionarProduto, removerProdutos } from '../../store/modules/carrinho/carrinhosSlice';
// import { Gibi, upsertOneGibi } from '../../store/modules/gibis/gibisSlice';
// import { adicionaUmComic, removeUmComic } from '../../store/modules/likes/likesSlice';
// import { useAppDispatch } from '../../store/modules/types-hooks';

interface CardTarefaProps {
  id: string;
  description: string;
  detail: string;
  userid: string;
}

const CardTarefa: React.FC<CardTarefaProps> = ({ id, description, detail, userid }) => {
  const dispatch = useAppDispatch();

  const handleEditar = () => {
    console.log('oi');
  };
  const handleApagar = () => {
    confirm('Tem certeza que quer apagar o recado?');
  };

  return (
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

          <Typography variant="body2" color="#689990">
            {detail}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => handleEditar()}>
          <EditIcon color="primary" />
        </IconButton>
        <IconButton aria-label="add to cart" onClick={() => handleApagar()}>
          <DeleteIcon color="secondary" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardTarefa;
