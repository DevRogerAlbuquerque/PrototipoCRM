import React, { useRef, useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useOutletContext();
  const form = useRef(null);
  const [validated, setValidated] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = (e) => 
  {
    e.preventDefault();

    if(!form.current.checkValidity())
      return setValidated(true);

    setValidated(false);

    if(localStorage.getItem('user'))
    {
      const usuario = JSON.parse(localStorage.getItem('user'));

      if(usuario.username == username)
      {
        if(usuario.password != password)
          return setPasswordError("Senha incorreta!");

        setUser(usuario);
        navigate('/main');
      }
      else
        return setPasswordError('Usuário não cadastrado.');
    }
    else
      return setPasswordError("Usuário não cadastrado.");
  };

  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/perguntas');
  };

  return (
    <Container fluid className="login-container">
      <Row className="justify-content-center align-items-center h-100">
        <Col md={6}>
          <Card className="p-4 shadow login-card">
            <Card.Body>
              <h1 className="text-center login-title">Bem-vindo</h1>
              <p className="text-center login-subtitle">
                Faça login para acessar sua trilha de aprendizado
              </p>
              <Form onSubmit={handleLogin} noValidate ref={form} validated={validated}>
                <Form.Group controlId="formUsername" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Usuário"
                    value={username}
                    required={true}
                    onChange={(e) => setUsername(e.target.value)}
                    className="login-input"
                  />
                </Form.Group>
                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Senha"
                    required={true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                  />
                  {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100 login-button mb-3">
                  Entrar
                </Button>
              </Form>
              <Button
                variant="outline-primary"
                className="w-100 create-account-button"
                onClick={handleCreateAccount}
              >
                Criar Conta
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
