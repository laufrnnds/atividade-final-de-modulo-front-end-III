import React from 'react';

interface TarefaProps {
  property?: string;
}

const Tarefa: React.FC<TarefaProps> = ({ property }) => {
  return (
    <>
      <h1>Tarefa</h1>
      <p>{property}</p>
    </>
  );
};

export default Tarefa;
