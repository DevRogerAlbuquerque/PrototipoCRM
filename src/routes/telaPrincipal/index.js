import React from 'react';
import { Container, Navbar, Card, Button, Row, Col, ProgressBar } from 'react-bootstrap';
import { FaArrowRight, FaSignOutAlt } from 'react-icons/fa'; // Importando ícone de seta
import '../../App.css';
import { useNavigate, useOutletContext } from 'react-router-dom';

const MainPage = ({ userName }) => {
    const { user } = useOutletContext();
  const unlockedModules = 1; // Simulando que apenas o primeiro módulo está desbloqueado

  // Lista de módulos com gamificação
  const modules = [
    { title: "Módulo 1: Introdução", unlocked: unlockedModules >= 1, progress: 50 },
    { title: "Módulo 2: Técnicas de Venda", unlocked: unlockedModules >= 2, progress: 0 },
    { title: "Módulo 3: Gestão de Clientes", unlocked: unlockedModules >= 3, progress: 0 },
    { title: "Módulo 4: Negociação", unlocked: unlockedModules >= 4, progress: 0 },
    { title: "Módulo 5: Análise de Resultados", unlocked: unlockedModules >= 5, progress: 0 },
  ];

  const navigate = useNavigate();

  return (
    <>
      {/* Navbar com o nome do usuário */}
      <Navbar style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'cornflowerblue', fontWeight: 'bold', color: 'white' }} className="mb-4">
        <Container>
            <Navbar.Brand style={{color: 'white'}}>Bem-vindo, {user.username}!</Navbar.Brand>
        </Container>
        <Container className="justify-content-end hover" onClick={() => navigate('..')}>
            <div><FaSignOutAlt /> Sair</div>
        </Container>
        </Navbar>


      {/* Conteúdo principal com os módulos */}
      <Container id="main">
        <Row className="g-4">
          {modules.map((module, index) => (
            <Col key={index} md={4}>
              <Card
                className={`shadow ${module.unlocked ? "border-primary" : "border-secondary"} animate__animated animate__fadeInUp`}
                style={{ transition: "transform 0.3s ease", cursor: "pointer" }}
              >
                <Card.Body>
                  <Card.Title>{module.title}</Card.Title>
                  <Card.Text>
                    {module.unlocked
                      ? `Este módulo está disponível para você.`
                      : "Complete o módulo anterior para desbloquear."}
                  </Card.Text>
                  {module.unlocked ? (
                    <>
                      <Button variant="primary" className="mb-3" block>
                        Acessar Módulo
                      </Button>
                      <div className="d-flex justify-content-end">
                        <FaArrowRight size={24} />
                      </div>
                      <ProgressBar now={module.progress} label={`${module.progress}%`} />
                    </>
                  ) : (
                    <Button variant="secondary" disabled>
                      Bloqueado
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
