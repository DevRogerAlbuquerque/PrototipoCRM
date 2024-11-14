import React, { useRef, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Toast } from 'primereact/toast';

const DynamicQuestions = () => {
  // Perguntas e opções

  const {user, setUser, exibirToast} = useOutletContext();
  const questionsTemplate = [
    {
      question: (name) => `${name}, quanto tempo você trabalha na área comercial?`,
      options: ["Menos de 1 ano", "1-3 anos", "Mais de 3 anos"],
    },
    {
      question: (name) => `${name}, qual é o seu interesse?`,
      options: ["Vendas", "Marketing", "Suporte"],
    },
    {
      question: (name) => `${name}, qual trilha de aprendizado você quer seguir?`,
      options: ["Técnicas de Venda", "Gestão de Clientes", "Negociação"],
    },
    {
      question: (name) => `${name}, qual é o seu hobby?`,
      options: ["Esportes", "Leitura", "Viagens"],
    },
  ];

  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();
  const form = useRef(null);
  const [validated, setValidated] = useState(false);
  const toast = useRef(null);

  const handleNameSubmit = (e) => {
    if(!form.current.checkValidity())
      return setValidated(true);

    setValidated(false);

    e.preventDefault();

    if (name.trim() !== '') 
      setStep(1);
   
  };

  const handleAnswer = (answer) => 
  {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
    
    if (step < questionsTemplate.length) 
      setStep(step + 1);
    else {
      const usuario = {...{
          username: name,
          password: password,
          progresso: 1
      }, ...{
          preferencias: [...answers, answer]
      }};

      setUser(usuario);
      localStorage.setItem('user', JSON.stringify(usuario));

      navigate('../main');
    }
  };

  return (
    <Container id="perguntas" className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      
      <Card className="p-4 shadow" style={{ maxWidth: "500px", width: "100%" }}>
        <Card.Body>
          {step === 0 ? (
            <Form onSubmit={handleNameSubmit} ref={form} noValidate validated={validated}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Qual é o seu nome?</Form.Label>
                <Form.Control
                  type="text"
                  required={true}
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Crie uma senha</Form.Label>
                <Form.Control
                  type="password"
                  required={true}
                  placeholder="Crie uma senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100">
                Confirmar
              </Button>
            </Form>
          ) : (
            <>
              <h3 className="mb-3">
                {questionsTemplate[step - 1].question(name)}
              </h3>
              <div className="d-flex flex-column">
                {questionsTemplate[step - 1].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline-primary"
                    className="mb-2"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DynamicQuestions;
