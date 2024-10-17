import React, { useState } from 'react';
import ButtonAppBar from '../components/Navbar';
// Header Component
const Header = () => (
    <header className="flex   justify-between p-4 bg-white shadow">
        <div className="flex ">
            <i className="fas fa-bars text-xl mr-4"></i>
            <h1 className="text-2xl font-bold text-gray-700">
                Google <span className="text-blue-500">Translate</span>
            </h1>
        </div>
        <div className="flex items-center">
            <i className="fas fa-cog text-xl mr-4"></i>
            <i className="fas fa-th text-xl mr-4"></i>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign in</button>
        </div>
    </header>
);
function TextEditor() {
    return (
      <div style={{ padding: '35px' }}   className="w-full h-48 p-4  rounded ">
        <textarea
          style={{
            width: '100%',
            height: '300px',
            fontFamily: '"Noto Sans Modi", sans-serif',
            fontSize: '18px',
          }}
          placeholder="Type in Modi script here..."
        ></textarea>
      </div>
    );
  }
// Language Selector Component
const LanguageSelector = ({ languages, selectedLanguage, onSelectLanguage }) => (
    <div  className=" container mx-auto flex items-center space-x-2 md:space-x-4 mb-2">
        {languages.map((language, index) => (
            <button
                key={index}
                className={`text-gray-700 ${selectedLanguage === language ? 'border-b-2 border-blue-700 text-blue-700' : ''}`}
                onClick={() => onSelectLanguage(language)}
            >
                {language}
            </button>
        ))}
        <button className="text-gray-700">▼</button>
    </div>
);

// Text Area Component
const TextArea = ({ placeholder, charCount, onTextChange }) => (
    <div>
        <textarea
            className="w-full h-48 p-4 border rounded"
            placeholder={placeholder}
            style={{
                width: '100%',
                height: '300px',
                fontFamily: '"Noto Sans Modi"',
                fontSize: '18px',
              }}
            onChange={(e) => onTextChange(e.target.value)}
        ></textarea>
        <div className="flex justify-between mt-2 text-gray-500">
            <i className="fas fa-microphone"></i>
            <span>{charCount} / 5,000</span>
        </div>
    </div>
);

// Translation Box Component
const TranslationBox = ({ text }) => (
    <div className="w-full h-48 p-4 border rounded bg-gray-100" >
        <p className="text-gray-700">{text}</p>
    </div>
);



// Main TranslatePage Component
export default function TranslatePage() {
    const [inputText, setInputText] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [sourceLanguage, setSourceLanguage] = useState('Detect language');
    const [targetLanguage, setTargetLanguage] = useState('English');

    const handleTextChange = (text) => {
        setInputText(text);
        setCharCount(text.length);
    };

    return (
        <div>
            <ButtonAppBar/>
            <main className="mx-auto container py-4" >
                <div className=" container mx-auto py-2">
                    <div className="flex space-x-2 md:space-x-4 mb-2 md:mb-0">
                        <button className="bg-blue-100 text-blue-700 px-2 py-1 md:px-4 md:py-2 rounded">Text</button>
                        <button className="bg-white text-gray-700 px-2 py-1 md:px-4 md:py-2 rounded border">Images</button>
                        <button className="bg-white text-gray-700 px-2 py-1 md:px-4 md:py-2 rounded border">Documents</button>
                        <button className="bg-white text-gray-700 px-2 py-1 md:px-4 md:py-2 rounded border">Websites</button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full md:w-1/2">
                  <TextArea placeholder="Enter text in modi" charCount={charCount} onTextChange={handleTextChange} /> 
                    </div>
                    <div className="w-full md:w-1/2">
                  <TextArea placeholder="Translation here" charCount={charCount} onTextChange={handleTextChange} /> 
                    </div>
                </div>
                

            </main>
        </div>
    );
}
