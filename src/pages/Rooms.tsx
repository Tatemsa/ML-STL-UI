import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { useState } from 'react';

const rooms = [
  {
    id: 1,
    title: 'Chambre Deluxe',
    description: 'Chambre spacieuse avec vue sur la ville',
    price: '200€',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
    amenities: ['Wifi', 'TV', 'Mini-bar', 'Climatisation']
  },
  {
    id: 2,
    title: 'Suite Junior',
    description: 'Suite élégante avec salon séparé',
    price: '350€',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    amenities: ['Wifi', 'TV', 'Mini-bar', 'Salon', 'Vue mer']
  },
  {
    id: 3,
    title: 'Suite Présidentielle',
    description: 'Le summum du luxe et du confort',
    price: '500€',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
    amenities: ['Wifi', 'TV', 'Mini-bar', 'Jacuzzi', 'Vue panoramique']
  }
];

const Rooms = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom textAlign="center">
        Nos Chambres
      </Typography>
      <Grid container spacing={4}>
        {rooms.map((room) => (
          <Grid item xs={12} md={4} key={room.id}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={room.image}
                alt={room.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {room.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {room.description}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  À partir de {room.price}/nuit
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {room.amenities.map((amenity, index) => (
                    <Typography key={index} variant="body2" component="span" sx={{ mr: 2 }}>
                      • {amenity}
                    </Typography>
                  ))}
                </Box>
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  sx={{ mt: 2 }}
                  href="/booking"
                >
                  Réserver
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Rooms;