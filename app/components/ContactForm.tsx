'use client'
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Container, Typography, Box, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Modal from './Modal';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [open, setOpen] = useState(false); // State to manage modal visibility

  // Function to handle form submission
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data); // Log form data or handle submission
    setOpen(true); // Show success modal
    reset(); // Reset the form after successful submission
  };



  return (
    <Container maxWidth="md" id="contact" style={{ padding: '50px 20px' }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <TextField
          label="Name"
          fullWidth
          variant="outlined"
          margin="normal"
          {...register('name', { required: 'Name is required' })}
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ''}
        />

        {/* Email Field */}
        <TextField
          label="Email"
          fullWidth
          variant="outlined"
          margin="normal"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Invalid email address',
            },
          })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
        />

        {/* Message Field */}
        <TextField
          label="Message"
          fullWidth
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          {...register('message', { required: 'Message is required' })}
          error={!!errors.message}
          helperText={errors.message ? errors.message.message : ''}
        />

        {/* Submit Button */}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: '20px' }}
        >
          Send Message
        </Button>
      </Box>
      <Modal open={open} setOpen={setOpen}/>
    </Container>
  );
};

export default ContactForm;
