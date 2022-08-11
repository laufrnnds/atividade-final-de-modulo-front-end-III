/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useThemeMediaQuery } from '@fuse/hooks';
import { Typography } from '@mui/material';
import React from 'react';
import TarefasContent from './TarefaContent';
import TarefasHeader from './TarefasHeader';

interface TarefasProps {
  property?: string;
}

const Tarefas: React.FC<TarefasProps> = ({ property }) => {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  return (
    <FusePageCarded
      header={<TarefasHeader title="Lista de Tarefas" showInput />}
      content={
        <>
          <Typography variant="body1" sx={{ padding: '30px' }}>
            Essas são suas tarefas ainda não cumpridas.
          </Typography>
          <TarefasContent />
        </>
      }
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
};

export default Tarefas;
