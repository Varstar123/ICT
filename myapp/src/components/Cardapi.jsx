import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const Card = () => {
  return (
      <div>
          <Grid container spacing={2}>
              <Grid item xs={4}>
                  <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                  Lizard
                              </Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                  Lizards are a widespread group of squamate reptiles, with over 6,000
                                  species, ranging across all continents except Antarctica
                              </Typography>
                          </CardContent>
                      </CardActionArea>
                  </Card>
              </Grid>
          </Grid>
    </div>
  )
}

export default Cardapi