# Protótipo de Curso: Implementação de Sistema de CRM para Funcionários da Área Comercial

## Descrição

Este projeto é um protótipo de curso interativo para treinamento de funcionários da área comercial, com o objetivo de ensinar como implementar e utilizar um Sistema de Gestão de Relacionamento com o Cliente (CRM). O curso oferece uma experiência personalizada, moldando-se de acordo com a trilha de conhecimento selecionada pelo usuário. Com isso, os módulos, vídeos e perguntas são ajustados conforme a área de conhecimento escolhida, garantindo que o aprendizado seja focado nas necessidades do funcionário.

## Funcionalidades

- **Trilhas de Conhecimento Personalizadas**: O curso permite que o usuário selecione uma trilha de conhecimento (ex: Técnicas de Venda, Gestão de Clientes, Negociação). Com base na trilha selecionada, o conteúdo do curso, incluindo vídeos, módulos e perguntas, se adapta automaticamente.
  
- **Perguntas e Respostas**: Cada módulo contém perguntas sobre os tópicos relevantes para a trilha escolhida. As perguntas são seguidas de alternativas e feedback em tempo real.

- **Progresso do Usuário**: O sistema acompanha o progresso do funcionário, fornecendo feedback imediato para melhorar o aprendizado, e permitindo que o usuário veja seu avanço no curso.

- **Interface Simples e Responsiva**: Interface construída com React e componentes do Bootstrap, proporcionando uma navegação fluida e agradável durante o curso.

- **Gamificação**: A interação com o conteúdo é enriquecida com gamificação, onde os usuários avançam de acordo com as respostas corretas e podem ver seu progresso à medida que completam as atividades.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **React-Bootstrap**: Framework para criar componentes de UI responsivos e modernos com o React.
- **React-Router**: Gerenciamento de navegação entre páginas no frontend.
- **Hooks do React**: Utilização de `useState`, `useNavigate` e `useOutletContext` para controlar o estado do aplicativo e navegação.
- **Icons**: Utilização do `react-icons` para ícones, como o ícone de sair.

## Funcionalidades do Sistema de CRM

O treinamento oferece uma base sólida sobre as funcionalidades chave de um sistema de CRM, com foco na trilha selecionada:

- **Gestão de Clientes**: Como registrar e organizar as informações dos clientes, monitorando o histórico de interações e gerenciando as necessidades deles.
  
- **Técnicas de Venda**: Como usar o CRM para aprimorar as interações com os clientes e fechar mais vendas.
  
- **Negociação**: Como o CRM pode facilitar o processo de negociação, fornecendo dados relevantes para alcançar acordos vantajosos para ambas as partes.

## Como Funciona a Personalização por Trilha

- **Seleção da Trilha**: O usuário escolhe uma trilha de conhecimento, que pode ser, por exemplo, "Técnicas de Venda", "Gestão de Clientes" ou "Negociação".
  
- **Mudança Dinâmica do Conteúdo**: Com base na trilha escolhida, o sistema ajusta os módulos de aprendizado, vídeos e perguntas. Cada trilha tem perguntas específicas e materiais de apoio, proporcionando uma experiência personalizada e focada.

- **Feedback Personalizado**: O feedback também é adaptado de acordo com a trilha, garantindo que o usuário saiba como está se saindo em relação ao tema que escolheu.

## Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/prototipo-curso-crm.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd prototipo-curso-crm
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

   O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

- **src/components**: Componentes reutilizáveis, como o menu principal, questões do quiz e feedback.
- **src/pages**: Páginas principais do aplicativo, como a página de perguntas e a página de progresso.
- **src/styles**: Estilos CSS personalizados para o layout e componentes.
- **src/context**: Contexto do React para gerenciar o estado global, como o progresso do usuário e informações do CRM.

## Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma nova branch para suas modificações:
   ```bash
   git checkout -b minha-nova-feature
   ```
3. Realize suas alterações e faça um commit:
   ```bash
   git commit -m "Descrição das alterações"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-nova-feature
   ```
5. Abra um Pull Request para a branch `main`.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
