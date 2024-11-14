import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Container, Navbar } from 'react-bootstrap';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

const VideoPlayer = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const { user } = useOutletContext(); 
  const navigate = useNavigate();

  const { progresso, modulo } = user;
  console.log('user: ');
  console.log(user);
  const trilha = user.preferencias[2]; // Assume que a resposta da trilha está no índice 2
  
  // Define os vídeos baseados na trilha de aprendizado selecionada
  const videoUrls = {
    "Técnicas de Venda": [
      {progresso: 1, video: "https://www.youtube.com/watch?v=R_Pbx3C0t2M"},  // Técnicas de Venda: Como Quebrar as Objeções
      {progresso: 2, video: "https://www.youtube.com/watch?v=WHwBn4nOV4U"},  // Vencendo Objeções: Como Lidar com Clientes Indecisos
      {progresso: 3, video: "https://www.youtube.com/watch?v=ZYOQwT5Srxk"}   // Como Lidar com Objeções de Clientes e Fechar Vendas
    ],
    "Gestão de Clientes": [
      {progresso: 1, video: "https://www.youtube.com/watch?v=YbsTLkuM4tM"},  // Introdução ao CRM
      {progresso: 2, video: "https://www.youtube.com/watch?v=cvAn9Q5rp-I"},  // Como reter clientes
      {progresso: 3, video: "https://www.youtube.com/watch?v=fLdOGoCBgBk"}   // Atendimento Personalizado ao Cliente
    ],
    "Negociação": [
      {progresso: 1, video: "https://www.youtube.com/watch?v=ezWR5TIXdaY"},  // Princípios de Negociação
      {progresso: 2, video: "https://www.youtube.com/watch?v=_wY7dKVrTEM"},  // Técnicas de Barganha
      {progresso: 3, video: "https://www.youtube.com/watch?v=JDaWSbD7TeU"}   // Negociação em Grupo
    ]
  };

  // Determina o URL do vídeo de acordo com a trilha do usuário
  const videoUrl = videoUrls[trilha] ? videoUrls[trilha].find(x => x.progresso == progresso).video : "";  // Ajuste conforme a lógica de seleção

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handleFinishClick = () => {
    navigate('../quiz');
  };

  return (
    <>
      <Navbar 
        style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'cornflowerblue', fontWeight: 'bold', color: 'white' }} 
        className="mb-4">
        <Container>
          <Navbar.Brand style={{ color: 'white' }}>Bem-vindo, {user.username}!</Navbar.Brand>
        </Container>
        <Container className="justify-content-end hover" onClick={() => navigate('..')}>
          <div><FaSignOutAlt /> Sair</div>
        </Container>
      </Navbar>
      <div style={styles.container}>
        {/* Exibe o título do Módulo */}
        <h2 style={styles.moduleTitle}>{trilha} - {modulo}</h2>

        <div style={styles.videoWrapper}>
          <ReactPlayer
            url={videoUrl}
            playing={!videoEnded}
            onEnded={handleVideoEnd}
            width="100%"
            height="100%"
          />
        </div>
        
        <button style={styles.button} onClick={handleFinishClick}>
          Finalizar Vídeo - Responder Perguntas
        </button>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    marginTop: '100px'
  },
  moduleTitle: {
    color: 'white',
    fontSize: '24px',
    marginBottom: '20px',
    fontFamily: 'Roboto',
  },
  videoWrapper: {
    position: 'relative',
    width: '80%',
    maxWidth: '800px',
    height: '450px',
    border: '15px solid white',
    borderRadius: '5%',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default VideoPlayer;
