import React, { useRef, useState } from 'react';
import {
  IconButton,
  Tooltip,
  Box,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import BrushIcon from '@mui/icons-material/Brush';
import DeleteIcon from '@mui/icons-material/Delete'; 
import ColorLensIcon from '@mui/icons-material/ColorLens';
import BackspaceIcon from '@mui/icons-material/Backspace'; 

const Canvas = () => {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [tool, setTool] = useState('pen');
  const [color, setColor] = useState('black'); 

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (tool === 'pen') {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
    } else if (tool === 'eraser') {
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 10;
    }

    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#f5f7fa', overflow:'hidden' }}>

      <Box sx={{ padding: 2, textAlign: 'center', backgroundColor: '#f3f4f6' }}>
        <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
          Modi Writing Pad
        </Typography>
      </Box>


      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: 2,
          padding: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >

        <Tooltip title="Clear Canvas" PopperProps={{ modifiers: [{ name: 'offset', options: { offset: [0, 10] } }] }}>
          <IconButton
            color="default" 
            onClick={clearCanvas}
            sx={{
              backgroundColor: 'black', 
              color: 'white', 
              borderRadius: '8px',
              transition: '0.3s',
              '&:hover': { backgroundColor: '#333' }, 
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>


        <Tooltip title="Pen Tool" PopperProps={{ modifiers: [{ name: 'offset', options: { offset: [0, 10] } }] }}>
          <IconButton
            color={tool === 'pen' ? 'secondary' : 'default'}
            onClick={() => setTool('pen')}
            sx={{
              backgroundColor: tool === 'pen' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              transition: '0.3s',
              '&:hover': { backgroundColor: 'rgba(16, 185, 129, 0.2)' },
            }}
          >
            <BrushIcon sx={{ color: 'black' }} /> 
          </IconButton>
        </Tooltip>

        <Tooltip title="Eraser Tool" PopperProps={{ modifiers: [{ name: 'offset', options: { offset: [0, 10] } }] }}>
          <IconButton
            color={tool === 'eraser' ? 'secondary' : 'default'}
            onClick={() => setTool('eraser')}
            sx={{
              backgroundColor: tool === 'eraser' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              transition: '0.3s',
              '&:hover': { backgroundColor: 'rgba(16, 185, 129, 0.2)' },
            }}
          >
            <BackspaceIcon sx={{ color: 'black' }} />
          </IconButton>
        </Tooltip>

        {tool === 'pen' && (
          <Tooltip title="Choose Color" PopperProps={{ modifiers: [{ name: 'offset', options: { offset: [0, 10] } }] }}>
            <Select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              variant="standard"
              disableUnderline
              sx={{
                color: 'black', 
                minWidth: 50,
                '& .MuiInputBase-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 1,
                  padding: '4px 8px',
                },
              }}
            >
              <MenuItem value="black">
                <ColorLensIcon sx={{ color: 'black' }} />
              </MenuItem>
              <MenuItem value="red">
                <ColorLensIcon sx={{ color: 'red' }} />
              </MenuItem>
            </Select>
          </Tooltip>
        )}
      </Box>

      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          width={1200}
          height={800} 
          style={{
            background: '#ffffff',
            border: '2px solid #ccc',
            borderRadius: 12,
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
            cursor: tool === 'eraser'
              ? 'url(https://upload.wikimedia.org/wikipedia/commons/1/1e/Font_Awesome_5_regular_eraser.svg) 5 5, auto' // Example URL for eraser image
              : 'crosshair',
            transition: '0.3s',
          }}
        />
      </Box>
    </div>
  );
};

export default Canvas;
