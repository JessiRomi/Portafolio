import React from 'react';
import { Card, CardContent, Typography, Avatar, Box, Grid } from '@mui/material';

const Profile = () => {
  return (
    <Card>
      <CardContent>
        <Grid container alignItems="center" bgcolor={"yellowgreen"}>
          <Grid item xs={12} sm={3}>
            <Avatar src="/src/assets/jessica.jpg" alt="My Pothografy" sx={{ width: 200, height: 200, mx: 'auto' }} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography variant="h4" color="fuchsia">Jessica Conejero</Typography>
            <Typography variant="body3" color="fuchsia">Full Stack Developer</Typography>
            <Typography variant="body1" mt={2}>
              Hola, soy Jessica Conejero, estoy en segundo año de la carrera Técnico en desarrollo del Software Full Stack!
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Profile;
