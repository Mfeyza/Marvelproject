import React from 'react'
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import img4 from "../assets/il_1588xN.3227261149_dobp.png"
import img5 from "../assets/indir.png"
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';



const Home = () => {
  const audioRef = useRef();
  const navigate=useNavigate()
  const [showButtons, setShowButtons] = useState(false);
  const handleMarvel =()=>{
    navigate("/MarvelHome")
  }

  const playAudio = () => {
    if(audioRef.current) {
      audioRef.current.play();
    }
  };

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  const handleOnClick = () => {
    playAudio();
    toggleButtons();
  };

  return (
    <div>
      <Container
        maxWidth="xxl"
        className='home'
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", 
          height: "100vh"
        }}
      >
        <Container sx={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            component="h2"
            className='h1'
            onClick={handleOnClick}
            sx={{ cursor: "pointer" }}
          >
            Tarafını Seç
          </Typography>
          {showButtons && (
            <Stack
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: 2
              }}
            >
              <Button onClick={handleMarvel}>
                <img src={img4} alt="Marvel" style={{ width: '150px', height: '150px' }} />
              </Button>
              <Button>
                <img src={img5} alt="DC" style={{ width: '150px', height: '150px' }} />
              </Button>
            </Stack>
          )}
        </Container>
        <audio ref={audioRef} src="/The Avengers.mp3" type="audio/mp3" autoPlay />
      </Container>
    </div>
  );
}

export default Home