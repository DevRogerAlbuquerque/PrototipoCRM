import React from 'react';
import { Container, Navbar, Card, Button, Row, Col } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate, useOutletContext } from 'react-router-dom';

const MainPage = () => {
  const { user, setUser } = useOutletContext();
  const { username, preferencias, progresso } = user; // Adicionando o progresso
  
  // Função para criar módulos baseados nas preferências
  const generateModules = (preferencias, progresso) => {
    // Preferência principal para a trilha de aprendizado
    const trilha = preferencias[2]; // Assume que a resposta da trilha está no índice 2

    // Define os módulos com base na trilha de aprendizado selecionada
    const modules = [];
    switch (trilha) {
      case "Técnicas de Venda":
        modules.push(
          { title: "Módulo 1: Técnicas Básicas", progress: 1 },
          { title: "Módulo 2: Psicologia da Venda", progress: 2 },
          { title: "Módulo 3: Pitching", progress: 3 },
          { title: "Módulo 4: Persuasão", progress: 4 },
          { title: "Módulo 5: Fechamento", progress: 5 }
        );
        break;
      case "Gestão de Clientes":
        modules.push(
          { title: "Módulo 1: Introdução ao CRM", progress: 1 },
          { title: "Módulo 2: Retenção de Clientes", progress: 2 },
          { title: "Módulo 3: Atendimento Personalizado", progress: 3 },
          { title: "Módulo 4: Análise de Dados", progress: 4 },
          { title: "Módulo 5: Fidelização", progress: 5 }
        );
        break;
      case "Negociação":
        modules.push(
          { title: "Módulo 1: Princípios de Negociação", progress: 1 },
          { title: "Módulo 2: Técnicas de Barganha", progress: 2 },
          { title: "Módulo 3: Negociação em Grupo", progress: 3 },
          { title: "Módulo 4: Gestão de Conflitos", progress: 4 },
          { title: "Módulo 5: Fechamento de Acordos", progress: 5 }
        );
        break;
      default:
        modules.push(
          { title: "Módulo 1: Introdução", progress: 1 },
          { title: "Módulo 2: Módulo Personalizado", progress: 2 },
          { title: "Módulo 3: Módulo Personalizado", progress: 3 },
          { title: "Módulo 4: Módulo Personalizado", progress: 4 },
          { title: "Módulo 5: Módulo Personalizado", progress: 5 }
        );
    }

    // Atualiza o estado de bloqueio dos módulos com base no progresso do usuário
    return modules.map((module, index) => ({
      ...module,
      unlocked: (module.progress <= progresso),  // Desbloqueia o módulo baseado no progresso
    }));
  };

  const navigate = useNavigate();

  // Gera os módulos com base nas preferências e progresso do usuário
  const modules = generateModules(preferencias, progresso);

  return (
    <>
      {/* Navbar com o nome do usuário */}
      <Navbar 
        style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: 'cornflowerblue', fontWeight: 'bold', color: 'white' }} 
        className="mb-4">
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
              <Card className={`shadow ${module.unlocked ? "border-primary" : "border-secondary"}`}>
                <Card.Body>
                  <Card.Title>{module.title}</Card.Title>
                  <Card.Text>
                    {module.unlocked
                      ? "Este módulo está disponível para você."
                      : "Complete o módulo anterior para desbloquear."}
                  </Card.Text>
                  {module.unlocked ? (
                    <Button variant={module.progress < 4 ? "primary" : "secondary"} onClick={() => {
                      if(module.progress >= 4)
                        return;

                      setUser({...user, ...{
                        modulo: module.title
                      }})
                      navigate('../ensino');
                    }}>
                      {module.progress < 4 ? "Acessar Módulo" : "Módulo em desenvolvimento"}
                    </Button>
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
