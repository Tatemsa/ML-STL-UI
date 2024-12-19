import React from 'react';
import "./Home.css";
import { Container, Typography, Grid, Card, CardContent, Box, Button } from '@mui/material';
import { Utensils, Wifi, Car, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Utensils size={40} />,
    title: 'Restaurant Gastronomique',
    description: 'Découvrez notre cuisine raffinée préparée par nos chefs étoilés'
  },
  {
    icon: <Wifi size={40} />,
    title: 'WiFi Haut Débit',
    description: 'Connexion internet gratuite dans tout l\'établissement'
  },
  {
    icon: <Car size={40} />,
    title: 'Service Voiturier',
    description: 'Parking privé et service voiturier 24h/24'
  },
  {
    icon: <Dumbbell size={40} />,
    title: 'Salle de Sport',
    description: 'Équipements modernes et cours collectifs'
  }
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '80vh',
          backgroundImage: 'url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)'
          }
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Marie Louise Hotel
          </Typography>
          <Typography variant="h5" gutterBottom>
            A unique experience in comfort and well-being
          </Typography>
          <div className="home-booking" >
            <form action="" className="home-booking">
              <Box className="element">
                <Typography>
                  Chambre
                </Typography>
                <Button>
                  Chambre
                </Button>
              </Box>
              <Box className="element">
                <Typography>
                  Date D'arrivée
                </Typography>
                <Button>
                  Date D'arrivée
                </Button>
              </Box><Box className="element">
                <Typography>
                  Date de départ
                </Typography>
                <Button>
                  Date de départ
                </Button>
              </Box>
              <Box className="element">
                <Typography>
                  Nombre d'enfants
                </Typography>
                <Button>
                  Nombre d'enfants
                </Button>
              </Box>
              <Box className="element">
                <Typography>
                  Nombre d'adultes
                </Typography>
                <Button>
                  Nombre d'adultes
                </Button>
              </Box>
              <Box className="element">
              
                <Button>
                  Reserver
                </Button>
              </Box>
            </form>
          </div>
        </Container>
      </Box>

      {/* Services Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Nos Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {service.icon}
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3" textAlign="center">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" textAlign="center">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;