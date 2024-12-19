import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import { BarChart, CalendarMonth, Hotel, People } from '@mui/icons-material';

const statsData = [
  { icon: <Hotel />, label: 'Chambres Occupées', value: '24/30' },
  { icon: <People />, label: 'Clients', value: '42' },
  { icon: <CalendarMonth />, label: 'Réservations', value: '15' },
  { icon: <BarChart />, label: 'Taux d\'occupation', value: '80%' }
];

const AdminDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Tableau de Bord
      </Typography>
      
      <Grid container spacing={3}>
        {/* Stats Cards */}
        {statsData.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: 140
              }}
            >
              <Box sx={{ color: 'primary.main', mb: 1 }}>
                {stat.icon}
              </Box>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                {stat.label}
              </Typography>
              <Typography component="p" variant="h4">
                {stat.value}
              </Typography>
            </Paper>
          </Grid>
        ))}

        {/* Recent Bookings */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Réservations Récentes
            </Typography>
            {/* Add a table or list of recent bookings here */}
          </Paper>
        </Grid>

        {/* Revenue Chart */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Revenus
            </Typography>
            {/* Add revenue chart here */}
          </Paper>
        </Grid>

        {/* Occupancy Chart */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Taux d'Occupation
            </Typography>
            {/* Add occupancy chart here */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;