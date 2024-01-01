import React from 'react'
import { CharacterContext } from '../context/KarakterDetayContext';
import  { useContext } from 'react';
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const KarakterDetay = () => {
const { characterData } = useContext(CharacterContext);
  return (
    <div>
        <Container maxWidth="xxl" sx={{ border: "2px solid red", marginTop: "4rem", display: "flex", justifyContent: "center" }}>
        {characterData && characterData.map((character) => (
        <Card sx={{ 
            maxWidth: 
            "100rem" ,  
            marginTop: "6rem" ,
            display:"flex",
            flexDirection:"column"
       }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
))}

        </Container>
    </div>
  )
}

export default KarakterDetay