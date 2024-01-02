import React from "react";
import img8 from "../assets/hakkımda.png";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Hakkımda = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container maxWidth="xxl" className="hakkımda">
        <div style={{ textAlign: "center" }}>
          <Typography className="hakkımdatitle" component="div" variant="h4">
            Projelerimin tüm kurgusu ve CSS i bana aittir 🚀🤘🏻
          </Typography>
          <Button onClick={() => navigate(-1)}>
            <span className="span1">Geri </span>
            <span className="span2"> Dön</span>
          </Button>
        </div>

        <div style={{ marginTop: "5rem", textAlign: "center" }}>
          <img src={img8} alt="" width="550rem" height="350rem" />
        </div>
      </Container>
    </div>
  );
};

export default Hakkımda;
