import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './routes/login';
import DynamicQuestions from './routes/perguntas';
import MainPage from './routes/telaPrincipal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="*" element={<Login />} />
          <Route path="perguntas" element={<DynamicQuestions />} />
          <Route path="main" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
