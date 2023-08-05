import React from 'react';
import { Container, Typography, TextField, TextareaAutosize, Button, Grid } from '@mui/material';
import { Box } from '@mui/system';

function ContactSection() {
  return (
    <section id="contactform" className="py-4">
      <Container>
        <Box mb={4}>
          <Typography variant="subtitle1" className="sm-title">
            get in touch with us
          </Typography>
          <Typography variant="h2" className="lg-title">
            Contact us
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <form className="contact-form">
              <TextField
                type="text"
                label="Your name"
                fullWidth
                margin="normal"
                style={{
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  color: '#000',
                  display: 'block',
                  margin: '1.6rem auto',
                }}
              />
              <TextField
                type="email"
                label="Your email"
                fullWidth
                margin="normal"
                style={{
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  color: '#000',
                  display: 'block',
                  margin: '1.6rem auto',
                }}
              />
            <TextField
                type="text"
                label="Your message"
                fullWidth
                margin="normal"
                style={{
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  color: '#000',
                  display: 'block',
                  margin: '1.6rem auto',
                }}
              />
              <Button variant="contained" color="primary" style={{ display: 'block', margin: 'auto' }}>
                Send message
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="contact-right my-2">
              <div className="contact-item">
                <span className="contact-icon flex" style={{ backgroundColor: 'var(--green)', color: '#fff', width: '60px', height: '60px', borderRadius: '50%', margin: '1rem auto', fontSize: '2rem' }}>
                  <i className="fa fa-phone"></i>
                </span>
                <div>
                  <Typography variant="subtitle1" style={{ fontWeight: 600, fontFamily: 'Raleway, sans-serif', fontSize: '1.2rem', display: 'block', marginBottom: '1rem' }}>
                    Phone
                  </Typography>
                  <Typography variant="body1" className="text">
                    +01-584-886-009
                  </Typography>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon flex" style={{ backgroundColor: 'var(--green)', color: '#fff', width: '60px', height: '60px', borderRadius: '50%', margin: '1rem auto', fontSize: '2rem' }}>
                  <i className="fa fa-map-marked-alt"></i>
                </span>
                <div>
                  <Typography variant="subtitle1" style={{ fontWeight: 600, fontFamily: 'Raleway, sans-serif', fontSize: '1.2rem', display: 'block', marginBottom: '1rem' }}>
                    Address
                  </Typography>
                  <Typography variant="body1" className="text">
                    102 East 22nd Street, NY
                  </Typography>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon flex" style={{ backgroundColor: 'var(--green)', color: '#fff', width: '60px', height: '60px', borderRadius: '50%', margin: '1rem auto', fontSize: '2rem' }}>
                  <i className="fa fa-envelope"></i>
                </span>
                <div>
                  <Typography variant="subtitle1" style={{ fontWeight: 600, fontFamily: 'Raleway, sans-serif', fontSize: '1.2rem', display: 'block', marginBottom: '1rem' }}>
                    Message
                  </Typography>
                  <Typography variant="body1" className="text">
                    info@TraviaGuru.com
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default ContactSection;
