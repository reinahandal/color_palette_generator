import React from 'react';
import Color from './Color';
import '../CSS/home.css';
import { useState } from 'react';
import { Button, Box } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

const Home = () => {
    const [colors, setColors] = useState(["#EEEDF0", "#A1B5C1", "#F9ACA7", "#68747D", "#CF365F"]);
    const [alert, setAlert] = useState('');
    const [open, setOpen] = useState(false);
    const [duration, setDuration] = useState(4000);
    
    onkeydown = (e) => {
        if(e.keyCode === 32) {
            generateColors();
        }
    }

    const generateColors = (e) => {
        let randomColors = [];
        for(let i=0; i<5; i++){
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            randomColors.push("#".concat(randomColor).toUpperCase());
        }
        setColors(randomColors);
    }

    const copyAlert = (color) => {
        setAlert(color + ' has been copied to your clipboard');
        setDuration(4000);
        setOpen(true);
    }

    const handleClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    return (
        <>
        <Snackbar
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        open={open}
        onClose={handleClose}
        message={alert}
        key={'top' + 'center'}
        autoHideDuration={duration}
        ContentProps={{
            sx: {
                background: '#FF495C',
            }
        }}
        />
        <h1 className='header'>COLOR PALETTE GENERATOR</h1>
        <div 
        className='container'
        tabIndex={0}>
            <Color color={colors[0]} onCopy={copyAlert}/>
            <Color color={colors[1]} onCopy={copyAlert}/>
            <Color color={colors[2]} onCopy={copyAlert}/>
            <Color color={colors[3]} onCopy={copyAlert}/>
            <Color color={colors[4]} onCopy={copyAlert}/>
        </div> 
        <Box textAlign='center'>
            <Button 
            variant="contained" 
            style={{backgroundColor:"#B042FF"}} 
            onClick={generateColors}
            >Generate Palette</Button>
        </Box>
        </>
    )
}

export default Home
