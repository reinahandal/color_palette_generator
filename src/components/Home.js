import React from 'react';
import Color from './Color';
import '../CSS/home.css';
import { useState } from 'react';
import { Button, Box } from '@mui/material';

const Home = () => {
    const [colors, setColors] = useState(["#EEEDF0", "#A1B5C1", "#F9ACA7", "#68747D", "#CF365F"]);
    let randomColors = [];

    const handleSpaceBar = e => {
        if(e.keyCode === 32) {
            generateColors();
        }
    }
    const generateColors = (e) => {
        for(let i=0; i<5; i++){
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            randomColors.push("#".concat(randomColor).toUpperCase());
        }
        setColors(randomColors);
    }

    return (
        <>
        <div 
        className='container' 
        onKeyDown={handleSpaceBar}
        tabIndex={0}>
            <Color color={colors[0]}/>
            <Color color={colors[1]}/>
            <Color color={colors[2]}/>
            <Color color={colors[3]}/>
            <Color color={colors[4]}/>
        </div> 
        <Box textAlign='center' sx={{mt:4}}>
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
