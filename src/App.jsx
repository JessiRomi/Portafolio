import React from 'react';
import { Container, Box } from '@mui/material';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Profile from './componentes/Profile';
import Projects from './componentes/Projects';
import Contact from './componentes/Contact';
import './index.css';  

function App() {
  return (
    <Container maxWidth="xl">
      {/* Cabecera */}
      <Header />
      {/* Contenido principal */}
      <Box my={4}>
        <Profile />
        <Projects />
        <Contact />
      </Box>
      {/* Pie de página */}
      <Footer />
    </Container>
  );
}

export default App;
