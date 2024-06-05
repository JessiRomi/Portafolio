import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';

const projects = [
  { title: 'Proyecto Uno', description:'Es una página web sobre una concesionaria de automoviles. En la cual utilice las tecnologías: Html, JavaScript, CCS y Boostrap', image: 'src/assets/logo.jpg' }, 
];

const Projects = () => {
  return (
    <Box mt={5}>
      <Typography variant="h3" gutterBottom>Proyectos</Typography>
      <Grid container spacing={4} >
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>{project.title}</Typography>
                <Typography variant="body2" color="textSecondary">{project.description}</Typography>
              </CardContent>
              <Button variant="contained" color="primary"><a href='https://github.com/JessiRomi/proyecto-de-its-motors.git'>Ir Al Proyecto</a></Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
