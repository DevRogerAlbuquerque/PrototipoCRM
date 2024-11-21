import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaUnlockAlt } from 'react-icons/fa';

const ModuloDesbloqueado = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/main');
  };

  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center vh-100"
    >
      <FaUnlockAlt size={80} color="white" className="mb-4" />
      <h1 className="text-center text-white mb-4">
        Parabéns por desbloquear mais um módulo!
      </h1>
      <Button variant="white" style={{background: 'white'}} size="lg" onClick={handleNavigate}>
        Ir para o próximo módulo
      </Button>
    </Container>
  );
};

export default ModuloDesbloqueado;