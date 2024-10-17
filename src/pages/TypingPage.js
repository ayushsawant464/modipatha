import React, { useState } from 'react';
import { Container, TextField, Typography, Box } from '@mui/material';
import VirtualKeyboard from '../components/VirtualKeyboard';

const TypingPage = () => {
  const [text, setText] = useState('');

  const handleKeyPress = (key) => {
    setText(text + key);
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: '16px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Modi Typing Page
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        variant="outlined"
        placeholder="Type here in Modi script..."
        sx={{ marginBottom: '16px' }}
      />
      <VirtualKeyboard onKeyPress={handleKeyPress} />
      <Box mt={2}>
        <Typography variant="h6">Typed Text:</Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
          {text}
        </Typography>
      </Box>
    </Container>
  );
};

export default TypingPage;
