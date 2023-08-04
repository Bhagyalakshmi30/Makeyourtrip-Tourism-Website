import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const LoginContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
}));

const LoginPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  width: 400,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const LoginForm = styled('form')({
  width: '100%',
  marginTop: 16,
});

const LoginButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <LoginContainer>
      <LoginPaper elevation={3}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <LoginForm>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </LoginButton>
        </LoginForm>
      </LoginPaper>
    </LoginContainer>
  );
}

export default LoginComponent;
