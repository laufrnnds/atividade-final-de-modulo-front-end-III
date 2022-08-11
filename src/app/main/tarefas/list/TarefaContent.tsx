/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Grid } from '@mui/material';
import CardTarefa from '../detail/CardTarefa/CardTarefa';

const rows = [
  { id: '1', lastName: 'Snow', firstName: 'Jon', age: '35' },
  { id: '2', lastName: 'Lannister', firstName: 'Cersei', age: '42' },
  { id: '3', lastName: 'Lannister', firstName: 'Jaime', age: '45' },
  { id: '4', lastName: 'Stark', firstName: 'Arya', age: '16' },
  { id: '5', lastName: 'Frances', firstName: 'Rossini', age: '36' },
];

const TarefasContent: React.FC = () => {
  return (
    <>
      <Grid container spacing={1} className=" flex flex-row items-center justify-center">
        {rows.map((item: any) => (
          <Grid item xl={12}>
            <CardTarefa
              id={item.id}
              description={item.firstName}
              detail={item.lastName}
              userid={item.age}
              key={item.id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default TarefasContent;
