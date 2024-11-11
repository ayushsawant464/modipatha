import React, { useRef, useState, useEffect } from 'react';
import {
  IconButton,
  Tooltip,
  Box,
  MenuItem,
  Select,
  Typography,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material';
import BrushIcon from '@mui/icons-material/Brush';
import DeleteIcon from '@mui/icons-material/Delete'; 
import ColorLensIcon from '@mui/icons-material/ColorLens';
import BackspaceIcon from '@mui/icons-material/Backspace'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Navbar from '../components/Navbar';

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

const Canvas = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [tool, setTool] = useState('pen');
  const [color, setColor] = useState('#8B4513');
  const [isExpanded, setIsExpanded] = useState(true);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const updateCanvasSize = () => {
      const width = window.innerWidth - (isMobile ? 20 : 40);
      const height = Math.min(window.innerHeight * 0.6, 600);
      setCanvasSize({ width, height });
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, [isMobile]);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (tool === 'pen') {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
    } else if (tool === 'eraser') {
      ctx.strokeStyle = theme.palette.background.paper;
      ctx.lineWidth = 10;
    }

    ctx.beginPath();
    ctx.moveTo(x, y);
    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        minHeight: '100vh', 
        width: '100%', 
        backgroundColor: theme.palette.background.default, 
        display: 'flex', 
        flexDirection: 'column'
      }}>
        <Navbar />
        <Box sx={{ padding: 2, textAlign: 'center', backgroundColor: theme.palette.background.paper }}>
          <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
            Modi Writing Pad
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 2,
            padding: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Tooltip title="Clear Canvas">
            <IconButton
              onClick={clearCanvas}
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.background.paper,
                borderRadius: '8px',
                transition: '0.3s',
                '&:hover': { backgroundColor: theme.palette.primary.dark },
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Pen Tool">
            <IconButton
              onClick={() => setTool('pen')}
              sx={{
                backgroundColor: tool === 'pen' ? theme.palette.secondary.light : 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                transition: '0.3s',
                '&:hover': { backgroundColor: theme.palette.secondary.light },
              }}
            >
              <BrushIcon sx={{ color: theme.palette.text.primary }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Eraser Tool">
            <IconButton
              onClick={() => setTool('eraser')}
              sx={{
                backgroundColor: tool === 'eraser' ? theme.palette.secondary.light : 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                transition: '0.3s',
                '&:hover': { backgroundColor: theme.palette.secondary.light },
              }}
            >
              <BackspaceIcon sx={{ color: theme.palette.text.primary }} />
            </IconButton>
          </Tooltip>

          {tool === 'pen' && (
            <Tooltip title="Choose Color">
              <Select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                variant="standard"
                disableUnderline
                sx={{
                  color: theme.palette.text.primary,
                  minWidth: 50,
                  '& .MuiInputBase-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 1,
                    padding: '4px 8px',
                  },
                }}
              >
                <MenuItem value="#8B4513">
                  <ColorLensIcon sx={{ color: '#8B4513' }} />
                </MenuItem>
                <MenuItem value="#000000">
                  <ColorLensIcon sx={{ color: '#000000' }} />
                </MenuItem>
                <MenuItem value="#FF0000">
                  <ColorLensIcon sx={{ color: '#FF0000' }} />
                </MenuItem>
              </Select>
            </Tooltip>
          )}

          <Tooltip title={isExpanded ? "Close Canvas" : "Expand Canvas"}>
            <IconButton onClick={toggleExpand}>
              {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Tooltip>
        </Box>

        {isExpanded && (
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              width={canvasSize.width}
              height={canvasSize.height}
              style={{
                background: theme.palette.background.paper,
                border: `2px solid ${theme.palette.primary.main}`,
                borderRadius: 12,
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                cursor: tool === 'eraser'
                  ? 'url(https://upload.wikimedia.org/wikipedia/commons/1/1e/Font_Awesome_5_regular_eraser.svg) 5 5, auto'
                  : 'crosshair',
                transition: '0.3s',
                touchAction: 'none',
              }}
            />
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Canvas;