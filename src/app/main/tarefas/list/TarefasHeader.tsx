/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { Input, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
import CustomButton from './CustomButton';

interface TarefasHeaderProps {
  title: string;
  showInput?: boolean;
}

const TarefasHeader: React.FC<TarefasHeaderProps> = ({ title, showInput }) => {
  return (
    <div className="flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 w-full items-center justify-between py-32 px-24 md:px-32">
      <Typography
        component={motion.span}
        initial={{ x: -20 }}
        animate={{ x: 0, transition: { delay: 0.2 } }}
        delay={300}
        className="text-24 md:text-32 font-extrabold tracking-tight"
      >
        {title}
      </Typography>

      <div className="flex flex-col w-full sm:w-auto sm:flex-row space-y-16 sm:space-y-0 flex-1 items-center justify-end space-x-8">
        {showInput && (
          <Paper
            component={motion.div}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="flex items-center w-full sm:max-w-256 space-x-8 px-16 rounded-full border-1 shadow-0"
          >
            <FuseSvgIcon color="disabled">heroicons-solid:search</FuseSvgIcon>

            <Input
              placeholder="Search products"
              className="flex flex-1"
              disableUnderline
              fullWidth
              inputProps={{
                'aria-label': 'Search',
              }}
            />
          </Paper>
        )}

        <CustomButton color="primary" title="Adicionar Tarefa" icon={<AddIcon />} />

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
        />
      </div>
    </div>
  );
};

export default TarefasHeader;
