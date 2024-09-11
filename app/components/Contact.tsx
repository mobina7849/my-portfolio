import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <Container maxWidth="md" id="contact" style={{ padding: '50px 20px' }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Box component="form">
        <TextField label="Name" fullWidth variant="outlined" margin="normal" />
        <TextField label="Email" fullWidth variant="outlined" margin="normal" />
        <TextField label="Message" fullWidth variant="outlined" margin="normal" multiline rows={4} />
        <Button variant="contained" color="primary" type="submit" style={{ marginTop: '20px' }}>
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
