import { Outlet } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Tema (você pode escolher outro tema)
import 'primereact/resources/primereact.min.css'; // Estilos principais do PrimeReact
import 'primeicons/primeicons.css'; // Ícones do PrimeIcons
import { Toast } from 'react-bootstrap';

function App() 
{
  const [user, setUser] = useState({});
  const toastRef = useRef(null);
  
  const exibirToast = (mensagem) => {/*
    toastRef.current.show({
      severity: 'success',
      summary: 'Parabéns!',
      detail: mensagem,
      life: 2000, // Duração do toastr (3 segundos)
    }); teste*/
  }

  return (
    <>
      <Toast ref={toastRef} />
      <Outlet context={{user: user, setUser: setUser, exibirToast: exibirToast}}/>
    </>
  );
}

export default App;
