import React, { useState } from 'react';
import ButtonAppBar from '../components/Navbar';
import { 
    Container, 
    Typography, 
    Box, 
    TextField, 
    Select, 
    MenuItem, 
    IconButton, 
    Divider, 
    Paper,
    Button
} from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import axios from 'axios'; 


// Header Component
const Header = () => (
    <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
            Transliterate Modi to English
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
            We use Aksharamukha to Transliterate as of now.
        </Typography>
    </Box>
);

// Language Selector Component
const LanguageSelector = ({ languages, selectedLanguage, onSelectLanguage }) => (
    <Select
        value={selectedLanguage}
        onChange={(e) => onSelectLanguage(e.target.value)}
        variant="standard"
        IconComponent={KeyboardArrowDownIcon}
        sx={{ minWidth: 120 }}
    >
        {languages.map((language) => (
            <MenuItem key={language} value={language}>
                {language}
            </MenuItem>
        ))}
    </Select>
);

// Text Area Component
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
                backgroundColor: 'white',
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
            <Typography variant="caption" color="text.secondary">
                {charCount} / 3000
            </Typography>
        </Box>
    </Box>
);

// Main TranslatePage Component
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

    const languages = ['English', 'Modi'];

    return (
        <div className="bg-gray-50 min-h-screen">
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
                        <IconButton>
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
                        gap: 2,
                        width: '100%',
                        alignItems: 'center'
                    }}>

                        <Box sx={{ flex: 1 }}>
                            <TextArea 
                                placeholder="Type to Translate"
                                charCount={charCount}
                                onTextChange={handleTextChange}
                                value={inputText}
                            />
                        </Box>


                        <Divider orientation="vertical" flexItem />


                        <Box sx={{ flex: 1 }}>
                            <TextArea 
                                placeholder="Translation"
                                charCount={translatedText.length}
                                value={translatedText}
                                readOnly={true}
                                onTextChange={() => {}}
                            />
                        </Box>
                    </Box>


                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                        <Button variant="contained" color="primary" onClick={handleTranslation}>
                            Translate
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
}
