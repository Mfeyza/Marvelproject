import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import md5 from "md5";
import Modal from '@mui/material/Modal';
import { useNavigate } from "react-router-dom";
import { CharacterContext } from "../context/KarakterDetayContext";



const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));


const MarvelHome = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { characterData, setCharacterData } = useContext(CharacterContext);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (searchTerm) {
        axios.get(`https://superheroapi.com/api.php/6159655490804436/search/${searchTerm}`)
          .then(response => {
            console.log(response);
            setCharacterData(response.data.results);
          })
          .catch(error => {
            console.error("API hatası:", error);
          });
      }
    }, [searchTerm]);

      const handleDetay=()=>{
        navigate("/KarakterDetay")

      }
    return (
      <div>
        <Container maxWidth="xxl" sx={{ border: "2px solid red", marginTop: "5rem", display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative" }}>
            <SearchIcon style={{ position: "absolute", left: 0, top: 0, bottom: 0, margin: 'auto' }} />
            <InputBase
              inputProps={{ "aria-label": "search" }}
              placeholder="Karakter Ara"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: 30 }}
            />
          </div>
        </Container>
{characterData && characterData.map((character) => (
        <Card sx={{ maxWidth: 345, m: 2 }} key={character.id} >
          <CardActionArea>
            <CardMedia onClick={handleDetay}
              component="img"
              height="140"
              image={character?.image.url}
              alt={character.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {character.name} 
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {character.description} 
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
    
          </CardActions>
        </Card>

        
      ))}
    </div>
  );
};

export default MarvelHome;