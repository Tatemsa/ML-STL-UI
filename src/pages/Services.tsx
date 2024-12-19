import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { Spa, Restaurant, Pool, FitnessCenter, LocalBar, DirectionsCar } from '@mui/icons-material';

const services = [
  {
    icon: <Spa fontSize="large" />,
    title: 'Spa & Bien-être',
    description: 'Profitez de nos massages et soins relaxants dans notre spa luxueux',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874'
  },
  {
    icon: <Restaurant fontSize="large" />,
    title: 'Restaurant Gastronomique',
    description: 'Savourez une cuisine raffinée préparée par nos chefs étoilés',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0'
  },
  {
    icon: <Pool fontSize="large" />,
    title: 'Piscine Infinity',
    description: 'Nagez dans notre piscine à débordement avec vue panoramique',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48'
  },
  {
    icon: <FitnessCenter fontSize="large" />,
    title: 'Salle de Sport',
    description: 'Restez en forme dans notre centre de fitness moderne',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48'
  },
  {
    icon: <LocalBar fontSize="large" />,
    title: 'Bar Lounge',
    description: 'Dégustez nos cocktails signature dans une ambiance sophistiquée',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187'
  },
  {
    icon: <DirectionsCar fontSize="large" />,
    title: 'Service Voiturier',
    description: 'Profitez de notre service voiturier 24h/24',
    image: 'https://images.unsplash.com/photo-1609520778763-d11d6e636d8a'
  }
];

const Services = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom textAlign="center">
        Nos Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {service.icon}
                  <Typography variant="h5" component="h2" sx={{ ml: 1 }}>
                    {service.title}
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;