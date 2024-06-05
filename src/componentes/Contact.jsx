import React from 'react';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => {
  return (
    <Box mt={5}>
      <Typography variant="h4" gutterBottom>Contacto</Typography>
      <Card sx={{width:"100%"}}>
        <CardContent>
          <form noValidate autoComplete="off">
            <Box mb={2}>
              <TextField
                fullWidth
                label="Nombre"
                variant="outlined"
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Mensaje"
                variant="outlined"
                multiline
                rows={4}
              />
            </Box>
            <Button variant="contained" color="primary">Enviar</Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contact;