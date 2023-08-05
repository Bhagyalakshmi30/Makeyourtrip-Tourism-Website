import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailId: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    emailId: '',
    password: '',
  });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name: fieldName, value } = e.target;

    setFormData({
      ...formData,
      [fieldName]: value,
    });

    if (fieldName === 'emailId') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: !validateEmail(value) ? 'Please enter a valid email address.' : '',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: value.trim() === '' ? 'This field is required.' : '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting login data:', formData);

    try {
      const response = await axios.post('https://localhost:7239/api/Users/login', {
        emailId: formData.emailId, // Corrected
        password: formData.password, // Corrected
      });

      if (response.status === 200) {
        const token = response.data;
        localStorage.setItem('token', token);

        const decodedToken = jwt_decode(token);
        console.log('Token:', token);
        console.log('Name:', formData.emailId); // Corrected
        console.log('Role:', decodedToken.role);
        console.log('nameid', decodedToken.nameid);
        localStorage.setItem('nameid', decodedToken.nameid);
        if (decodedToken.role === 'Admin') {
          toast.success('Hi Admin Login Successful'); // You should import 'toast' if using react-toastify
          navigate('/adminhome');
        } else if (decodedToken.role === 'Agent') {
          toast.success('Hi Agent Login Successful'); // You should import 'toast' if using react-toastify
          navigate('/travelagenthome');
        } else if (decodedToken.role === 'User') {
          toast.success('Hi User Login Successful'); // You should import 'toast' if using react-toastify
          navigate('/service');
        } else {
          toast.error('Invalid Credentials'); // You should import 'toast' if using react-toastify
        }
      } else {
        console.error('Error during login:', response);
        toast.error('Invalid Credentials'); // You should import 'toast' if using react-toastify
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Invalid Credentials'); // You should import 'toast' if using react-toastify
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography variant="h5">Login</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                error={!!errors.emailId}
                helperText={errors.emailId}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                fullWidth
                variant="outlined"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
