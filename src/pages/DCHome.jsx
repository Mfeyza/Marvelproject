import axios from "axios";
import { CharacterContext } from "../context/KarakterDetayContext";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import datadc from "../helper/datadc";

const DCHome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { characterData, setCharacterData } = useContext(CharacterContext);
  const navigate = useNavigate();
  const { selectedCharacter, setSelectedCharacter } =
    useContext(CharacterContext);

  useEffect(() => {
    setCharacterData(datadc);
  }, []);
  useEffect(() => {
    if (searchTerm) {
      axios
        .get(
          `https://superheroapi.com/api.php/6159655490804436/search/${searchTerm}`
        )
        .then((response) => {
          console.log(response);
          setCharacterData(response.data.results);
        })
        .catch((error) => {
          console.error("API hatası:", error);
        });
    } else {
      setCharacterData(datadc);
    }
  }, [searchTerm]);
  const handleDetay = (character) => {
    setSelectedCharacter(character);
    navigate("/KarakterDetay");
  };

  return (
    <div>
      <Container
        className="DC"
        maxWidth="xxl"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            position: "relative",
            marginTop: "7rem",
            border: "3px solid ",
            borderRadius: "10px",
          }}
        >
          <SearchIcon
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              margin: "auto",
            }}
          />
          <InputBase
            className="search"
            inputProps={{ "aria-label": "search" }}
            placeholder="Karakter Ara"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: 30 }}
          />
        </div>
        <div
          align="center"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {characterData &&
            characterData.map((character) => (
              <Card sx={{ maxWidth: 345, m: 2 }} key={character.id}>
                <CardActionArea>
                  <CardMedia
                    onClick={() => handleDetay(character)}
                    component="img"
                    height="140"
                    image={character?.image.url}
                    alt={character?.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {character?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {character?.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions></CardActions>
              </Card>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default DCHome;
