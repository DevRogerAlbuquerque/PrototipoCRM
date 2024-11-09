import React, { useState } from 'react';
import { Container, Card, Button, ListGroup, Navbar } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate, useOutletContext } from 'react-router-dom';

const PerguntasQuiz = () => {
    const {user, setUser} = useOutletContext();
  const {preferencias, progresso, modulo} = user; 
  const trilha = preferencias[2]; 

  const perguntas = {
    "Técnicas de Venda": [
      {
        pergunta: "Quais são as três principais estratégias para construir uma boa rapport com um cliente durante a primeira interação?",
        alternativas: [
          "Falar rapidamente para impressionar, ser formal o tempo todo e evitar perguntas pessoais.",
          "Ouvir atentamente, fazer perguntas abertas e demonstrar empatia.",
          "Falar o máximo possível para mostrar expertise e evitar fazer perguntas.",
          "Usar piadas para criar um ambiente descontraído, evitar falar sobre o produto e focar apenas em conversas pessoais."
        ],
        respostaCorreta: 1
      }
    ],
    "Gestão de Clientes": [
      {
        pergunta: "Como um sistema de CRM pode ajudar uma empresa a melhorar a experiência do cliente e aumentar a fidelização?",
        alternativas: [
          "Mantendo um histórico das interações, ajudando a personalizar a comunicação e organizando os dados de clientes.",
          "Aumentando o número de produtos vendidos sem qualquer análise dos clientes.",
          "Reduzindo o custo de marketing, limitando o acesso dos clientes ao suporte e ignorando o feedback deles.",
          "Focando apenas em vendas rápidas, sem considerar o comportamento ou necessidades dos clientes."
        ],
        respostaCorreta: 0
      }
    ],
    "Negociação": [
      {
        pergunta: "Quais são os cinco princípios fundamentais que todo negociador deve ter em mente para alcançar acordos bem-sucedidos?",
        alternativas: [
          "Ser inflexível, não ouvir a outra parte, focar apenas no preço, ignorar o tempo e fazer concessões mínimas.",
          "Manter um bom relacionamento, ser flexível, ouvir atentamente, buscar soluções ganhadoras e entender o que é importante para a outra parte.",
          "Ignorar as necessidades da outra parte, concentrar-se em um único objetivo e ser agressivo nas negociações.",
          "Ser passivo, aceitar qualquer proposta, ignorar os detalhes e evitar contratempos."
        ],
        respostaCorreta: 1
      }
    ]
  };

  const navigate = useNavigate();


  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleRespostaClick = (perguntaIndice, alternativaIndice) => {
    setRespostaSelecionada(perguntaIndice.alternativas[alternativaIndice]);
    debugger;
    if (alternativaIndice === perguntaIndice.respostaCorreta) {
      setFeedback('Resposta correta!');
      setUser({
        ...user,
        progresso: user.progresso + 1
      });
      navigate('../main');
    } else {
      setFeedback('Resposta incorreta. Tente novamente!');
    }
  };

  return (
    <>
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
      <Container>
        <Card className="mt-4">
          <Card.Header as="h4">{`${trilha} - ${modulo}`}</Card.Header>
          <Card.Body>
            {perguntas[trilha].map((item, perguntaIndice) => (
              <div key={perguntaIndice}>
                <h5>{item.pergunta}</h5>
                <ListGroup>
                  {item.alternativas.map((alternativa, alternativaIndice) => (
                    <ListGroup.Item
                      key={alternativaIndice}
                      style={{ cursor: 'pointer', backgroundColor: respostaSelecionada === alternativa ? '#d3f9d8' : '' }}
                      onClick={() => handleRespostaClick(item, alternativaIndice)} // Passando a pergunta inteira e o índice da alternativa
                    >
                      {alternativa}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                {feedback && <div className="mt-3" style={{ color: feedback.includes('correta') ? 'green' : 'red' }}>{feedback}</div>}
              </div>
            ))}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default PerguntasQuiz;