import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Button } from "@mui/material/";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
const Login = () => {
  const { signIn, forgotPassword } = useAuthContext();
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const handleRegister = () => {
    navigate("/Register");
  };

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    console.log(info);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { email, password } = info;
    signIn(email, password);
    navigate("/Home");
  };

  return (
    <Container
      maxWidth="xxl"
      className="login"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Box
        onSubmit={handleClick}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          "& .MuiTextField-root": { m: 1, width: "35ch" },
          gap: "1rem",
          marginTop: "5rem",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          className="inputcustom"
          onChange={handleChange}
          name="email"
          id="standard-email-input"
          label="Email"
          type="email"
          autoComplete="current-mail"
          variant="standard"
        />
        <TextField
          className="inputcustom"
          name="password"
          onChange={handleChange}
          id="standard-password-input"
          label="Parola"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />

        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={()=>forgotPassword(info.email)}
            className="buton3"
            variant="text"
            sx={{
              fontSize: "small",
              textTransform: "none",
            }}
          >
            Şifreni mi unuttun?
          </Button>
          <Button
            className="buton4"
            variant="text"
            sx={{
              fontSize: "small",
              textTransform: "none",
            }}
            onClick={handleRegister}
          >
            Yok artık hala kaydolmadın mı!
          </Button>
        </Container>
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: "3rem",
          }}
        >
          <Button
            variant="contained"
            onClick={handleClick}
            className="buton1login"
            sx={{
              width: 100,
              height: 40,
              fontSize: "small",
              textTransform: "none",
            }}
          >
            Giriş yap
          </Button>
        </Container>
      </Box>
    </Container>
  );
};

export default Login;
