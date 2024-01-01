import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from "@mui/material/Container";
import { Button } from '@mui/material/';
import { useState,useEffect } from 'react';
import { useAuthContext } from "../context/AuthContext";
import GoogleIcon from "../assets/GoogleIcon";

const Register = () => {
    const { createUser,signUpProvider } = useAuthContext();
    const [info,setInfo]=useState({
        ad:"",
        soyad:"",
        email:"",
        parola:"",

    })
   

    const handleChange=(e)=>{
  setInfo({...info, [e.target.name]: e.target.value})
  console.log(info);

}
    const handleClick=(e)=>{
        e.preventDefault()
        const { email, parola, ad, soyad } = info;
        console.log(info);
        const displayName = `${ad} ${soyad}`;
        createUser(email, parola, displayName);

    
       }
  return (
        <Container maxWidth="xxl" className='register'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh', 
            alignItems: 'center' 
          }}
        >
          <Box
          
            component="form"
            onSubmit={handleClick}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              '& .MuiTextField-root': { m: 1, width: '35ch' },
              gap:"1rem",
              marginTop:"6rem"
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
            onChange={handleChange}
            className='inputcustom2'
            name="ad"
              id="standard-text-input1"
              label="Adın"
              type="text"
              autoComplete="current-text"
              variant="standard"
            />
            <TextField
            className='inputcustom2'
            name="soyad"
             onChange={handleChange}
              id="standard-text-input2"
              label="Soyadın"
              type="text"
              autoComplete="current-text"
              variant="standard"
            />
            <TextField
            className='inputcustom2'
             onChange={handleChange}
             name="email"
          id="standard-email-input3"
          label="Email"
          type="email"
          autoComplete="current-mail"
          variant="standard"
        />
         <TextField
         className='inputcustom2'
         name='parola'
          onChange={handleChange}
              id="standard-password-input4"
              label="Parola"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
           
          
          <Container maxWidth="sm"
          sx={{
            display:"flex",
            flexDirection: 'row',
            justifyContent:"space-evenly",
            marginTop:"3rem"
            
           
    
    
          }}>
          
          <Button variant="contained"
          className='butonregister1'
          onClick={handleClick} sx={{ 
        width: 100, 
        height:40,
        fontSize: 'small', 
        textTransform: 'none' 
         
      }}>Kaydol Hadi!</Button>
          <Button variant="contained" onClick={signUpProvider} className='butonregister2' sx={{ 
        width: 180,
        height:40, 
        fontSize: 'small', 
        textTransform: 'none' 
         
      }}>Google ile gel  <GoogleIcon color="currentColor" /></Button>
          </Container>
          
          </Box>
         
        </Container>
    
      );
  
}

export default Register