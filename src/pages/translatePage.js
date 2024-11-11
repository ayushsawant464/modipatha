import React, { useState } from 'react';
import ButtonAppBar from '../components/Navbar';
import { 
    Typography, 
    Box, 
    TextField, 
    Select, 
    MenuItem, 
    IconButton, 
    Divider, 
    Paper,
    Button,
    ThemeProvider,
    createTheme,
    Container
} from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B4513', // Saddle Brown
    },
    secondary: {
      main: '#D2691E', // Chocolate
    },
    background: {
      default: '#F3E5AB', // Light beige
      paper: '#FFFFFF',
    },
    text: {
      primary: '#8B4513',
      secondary: '#A0522D',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const Header = () => (
    <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: theme.palette.primary.main }}>
            Transliterate Modi to English
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4, color: theme.palette.text.secondary }}>
            We use Aksharamukha to Transliterate as of now.
        </Typography>
    </Box>
);

const LanguageSelector = ({ languages, selectedLanguage, onSelectLanguage }) => (
    <Select
        value={selectedLanguage}
        onChange={(e) => onSelectLanguage(e.target.value)}
        variant="standard"
        IconComponent={KeyboardArrowDownIcon}
        sx={{ minWidth: 120, color: theme.palette.text.primary }}
    >
        {languages.map((language) => (
            <MenuItem key={language} value={language}>
                {language}
            </MenuItem>
        ))}
    </Select>
);

const TextArea = ({ placeholder, charCount, onTextChange, value, readOnly = false }) => (
    <Box sx={{ width: '100%' }}>
        <TextField
            fullWidth
            multiline
            rows={8}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onTextChange(e.target.value)}
            variant="outlined"
            InputProps={{
                readOnly: readOnly,
            }}
            sx={{
                backgroundColor: theme.palette.background.paper,
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'transparent',
                    },
                    '&:hover fieldset': {
                        borderColor: 'transparent',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'transparent',
                    },
                },
            }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                {charCount} / 3000
            </Typography>
        </Box>
    </Box>
);

export default function TranslatePage() {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [sourceLanguage, setSourceLanguage] = useState('English');
    const [targetLanguage, setTargetLanguage] = useState('Modi');

    const handleTextChange = (text) => {
        setInputText(text);
        setCharCount(text.length);
    };

    const handleTranslation = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/convert', { text: inputText });
            setTranslatedText(response.data.translatedText);
            console.log(response.data.translatedText);
        } catch (error) {
            console.error("Error during transliteration:", error);
            setTranslatedText("Error during transliteration");
        }
    };

    const handleSwapLanguages = () => {
        setSourceLanguage(targetLanguage);
        setTargetLanguage(sourceLanguage);
        setInputText(translatedText);
        setTranslatedText(inputText);
        setCharCount(translatedText.length);
    };

    const languages = ['English', 'Modi'];

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ minHeight: '100vh', backgroundColor: theme.palette.background.default }}>
                <ButtonAppBar />
                <Container maxWidth="lg">
                    <Header />
                    
                    <Paper elevation={3} sx={{ borderRadius: 2, p: 3, mt: 4 }}>
                        <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center',
                            gap: 2,
                            mb: 3 
                        }}>
                            <LanguageSelector
                                languages={languages}
                                selectedLanguage={sourceLanguage}
                                onSelectLanguage={setSourceLanguage}
                            />
                            <IconButton onClick={handleSwapLanguages}>
                                <SwapHorizIcon />
                            </IconButton>
                            <LanguageSelector
                                languages={languages}
                                selectedLanguage={targetLanguage}
                                onSelectLanguage={setTargetLanguage}
                            />
                        </Box>

                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: 2,
                            width: '100%',
                            alignItems: 'stretch'
                        }}>
                            <Box sx={{ flex: 1 }}>
                                <TextArea 
                                    placeholder="Type to Transliterate"
                                    charCount={charCount}
                                    onTextChange={handleTextChange}
                                    value={inputText}
                                />
                            </Box>

                            <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
                            <Divider orientation="horizontal" sx={{ display: { xs: 'block', md: 'none' } }} />

                            <Box sx={{ flex: 1 }}>
                                <TextArea 
                                    placeholder="Transliteration"
                                    charCount={translatedText.length}
                                    value={translatedText}
                                    readOnly={true}
                                    onTextChange={() => {}}
                                />
                            </Box>
                        </Box>

                        <Box sx={{ mt: 3, textAlign: 'center' }}>
                            <Button 
                                variant="contained" 
                                sx={{ 
                                    backgroundColor: theme.palette.primary.main,
                                    '&:hover': {
                                        backgroundColor: theme.palette.primary.dark,
                                    }
                                }} 
                                onClick={handleTranslation}
                            >
                                Transliterate
                            </Button>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </ThemeProvider>
    );
}