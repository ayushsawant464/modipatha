import React from 'react';
import { Button, Grid } from '@mui/material';

const keys = [
  '𑘀', '𑘁', '𑘂', '𑘃', '𑘄', '𑘅', '𑘆', '𑘇', 
  '𑘈', '𑘉', '𑘊', '𑘋', '𑘌', '𑘍', '𑘎', '𑘏',
  '𑘐', '𑘑', '𑘒', '𑘓', '𑘔', '𑘕', '𑘖', '𑘗',
  '𑘘', '𑘙', '𑘚', '𑘛', '𑘜', '𑘝', '𑘞', '𑘟',
  '𑘠', '𑘡', '𑘢', '𑘣', '𑘤', '𑘥', '𑘦', '𑘧',
  '𑘨', '𑘩', '𑘪', '𑘫', '𑘬', '𑘭', '𑘮', '𑘯',
  '𑘰', '𑘱', '𑘲', '𑘳', '𑘴', '𑘵', '𑘶', '𑘷',
  '𑘸', '𑘹', '𑘺', '𑘻', '𑘼', '𑘽', '𑘾', '𑘿',
  '𑙀', '𑙁', '𑙂', '𑙃', '𑙄'
];

const VirtualKeyboard = ({ onKeyPress }) => {
  return (
    <Grid container spacing={1} justifyContent="center" sx={{ marginTop: '16px' }}>
      {keys.map((key, index) => (
        <Grid item key={index}>
          <Button 
            variant="outlined" 
            onClick={() => onKeyPress(key)} 
            sx={{ minWidth: '40px', minHeight: '40px', fontSize: '24px' }}
          >
            {key}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default VirtualKeyboard;
