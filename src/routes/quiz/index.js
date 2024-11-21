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
        pergunta: "Qual é a melhor maneira de abordar objeções comuns, como a questão de preço, durante uma venda?",
        alternativas: [
          "Concordar imediatamente e oferecer um grande desconto.",
          "Ouvir atentamente, entender a objeção e oferecer uma solução que destaque o valor do produto.",
          "Ignorar a objeção e continuar pressionando pela venda.",
          "Responder de forma defensiva e insistir que o preço é justo sem discutir benefícios."
        ],
        respostaCorreta: 1
      },
      {
        pergunta: "Como você deve lidar com um cliente indeciso para ajudá-lo a tomar uma decisão de compra?",
        alternativas: [
          "Fornecer todas as informações de uma só vez sem deixar espaço para perguntas.",
          "Dar tempo ao cliente para refletir e apresentar uma proposta que reduza suas incertezas.",
          "Usar pressão intensa para forçar uma decisão rápida.",
          "Desconsiderar as dúvidas do cliente e insistir que é a melhor escolha."
        ],
        respostaCorreta: 1
      },
      {
        pergunta: "Quais técnicas ajudam a fechar uma venda mesmo diante de objeções persistentes?",
        alternativas: [
          "Fazer promessas exageradas que você não tem certeza se pode cumprir.",
          "Reformular a objeção em algo positivo, mostrando como o produto resolve uma necessidade específica.",
          "Minimizar os problemas apresentados pelo cliente.",
          "Interromper o cliente e falar sobre outros produtos."
        ],
        respostaCorreta: 1
      }
    ],
    "Gestão de Clientes": [
      {
        pergunta: "Por que é importante personalizar o atendimento ao cliente?",
        alternativas: [
          "Porque isso ajuda a ignorar as expectativas do cliente.",
          "Porque cria uma experiência memorável e aumenta a fidelidade.",
          "Porque simplifica o trabalho dos funcionários.",
          "Porque impede o cliente de reclamar."
        ],
        respostaCorreta: 1
      },
      {
        pergunta: "Qual é um dos principais benefícios de usar um CRM para gerenciar dados de clientes?",
        alternativas: [
          "Impede que os funcionários saibam qualquer detalhe sobre os clientes.",
          "Ajuda a centralizar e acessar rapidamente informações sobre o histórico de interações.",
          "Garante que todos os clientes tenham o mesmo atendimento padrão sem personalização.",
          "Facilita a exclusão automática de clientes inativos."
        ],
        respostaCorreta: 1
      },
      {
        pergunta: "Como a retenção de clientes impacta diretamente os lucros da empresa?",
        alternativas: [
          "Aumenta os custos de aquisição de novos clientes.",
          "Reduz a necessidade de se preocupar com a experiência do cliente.",
          "Clientes fiéis são mais propensos a fazer compras recorrentes e a recomendar a empresa a outros.",
          "Diminui o valor médio das vendas."
        ],
        respostaCorreta: 2
      }
    ],
    "Negociação": [
      {
        pergunta: "Quais são os benefícios de usar técnicas de barganha durante uma negociação?",
        alternativas: [
          "Permite enganar a outra parte e sair vitorioso sem concessões.",
          "Cria um ambiente de disputa constante que prejudica as relações futuras.",
          "Ajuda a encontrar um ponto comum, tornando o acordo benéfico para ambos os lados.",
          "Ignora totalmente os interesses e focos da outra parte."
        ],
        respostaCorreta: 2
      },
      {
        pergunta: "O que é essencial para manter um bom relacionamento durante uma negociação?",
        alternativas: [
          "Ser agressivo e insistir que a sua posição é a única correta.",
          "Ter empatia e buscar soluções que sejam benéficas para ambos.",
          "Desconsiderar as preocupações e necessidades da outra parte.",
          "Oferecer sempre a menor concessão possível sem diálogo."
        ],
        respostaCorreta: 1
      },
      {
        pergunta: "Por que é importante entender o que é importante para a outra parte em uma negociação?",
        alternativas: [
          "Porque isso permite que você manipule facilmente a situação.",
          "Para ajustar suas propostas e alcançar um acordo que seja vantajoso para ambos.",
          "Para focar apenas nas suas necessidades e esquecer as deles.",
          "Para acelerar a negociação ignorando todos os detalhes."
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

    if (alternativaIndice === perguntaIndice.respostaCorreta) {
      setFeedback('Resposta correta!');
      setUser({
        ...user,
        progresso: user.progresso + 1
      });
      navigate('../moduloDesbloqueado');
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
      <Container style={{marginTop: '50px'}}>
        <Card className="mt-4">
          <Card.Header as="h4">{`${trilha} - ${modulo}`}</Card.Header>
          <Card.Body>
            {perguntas[trilha].filter((item, index) => index == progresso - 1).map((item, perguntaIndice) => (
              <div key={perguntaIndice}>
                <h5>{item.pergunta}</h5>
                <ListGroup>
                  {item.alternativas.map((alternativa, alternativaIndice) => (
                    <ListGroup.Item
                      key={alternativaIndice}
                      style={{ cursor: 'pointer', backgroundColor: respostaSelecionada === alternativa ? (feedback.includes('incorreta') ? 'red' : '#d3f9d8') : '' }}
                      onClick={() => handleRespostaClick(item, alternativaIndice)} // Passando a pergunta inteira e o índice da alternativa
                    >
                      {alternativa}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                {feedback && <div className="mt-3" style={{ color: feedback.includes('incorreta') ? 'red' : 'green' }}>{feedback}</div>}
              </div>
            ))}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default PerguntasQuiz;