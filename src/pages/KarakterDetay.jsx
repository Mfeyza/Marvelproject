import React from "react";
import { CharacterContext } from "../context/KarakterDetayContext";
import { useContext } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const KarakterDetay = () => {
  const navigate = useNavigate();
  const { selectedCharacter } = useContext(CharacterContext);
  console.log(selectedCharacter);
  if (!selectedCharacter || !selectedCharacter.image) {
    return <div>Veri yükleniyor...</div>;
  } //!' bak

  return (
    <div>
      <Container
        maxWidth="xxl"
        sx={{
          display: "flex",
          // justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          minHeight: "100vh",
          flexDirection: "column",
         padding:"5rem"
        }}
      >
        <Button onClick={() => navigate(-1)}>
          <span className="span1">Geri </span>
          <span className="span2"> Dön</span>
        </Button>
        <Card sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <CardMedia
            component="img"
            sx={{ width: 500, height: 400 }}
            image={selectedCharacter?.image.url}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CardContent
              sx={{
                flex: "1 0 auto",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Typography component="div" variant="h5">
                {selectedCharacter?.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {selectedCharacter?.biography["full-name"]}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Publisher:</strong>
                {selectedCharacter?.biography.publisher}
              </Typography>
              <br /> <br /> <br />
              <Typography variant="body2" color="text.secondary">
                <strong>Gender:</strong>
                {selectedCharacter?.appearance.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Eye-Color:</strong>
                {selectedCharacter?.appearance["eye-color"]}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Hair-Color:</strong>
                {selectedCharacter?.appearance["hair-color"]}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Height:</strong>{" "}
                {selectedCharacter?.appearance.height[0]}(
                {selectedCharacter?.appearance.height[1]})
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Weight:</strong>
                {selectedCharacter?.appearance.weight[0]} (
                {selectedCharacter?.appearance.weight[1]})
              </Typography>
            </CardContent>
            <CardContent></CardContent>
          </Box>

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <strong>Place of birth:</strong>
              {selectedCharacter?.biography["place-of-birth"]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Group Affiliation:</strong>
              {selectedCharacter?.connections["group-affiliation"]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Occupation: </strong>
              {selectedCharacter?.work.occupation}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>City :</strong>
              {selectedCharacter?.work.base}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default KarakterDetay;
