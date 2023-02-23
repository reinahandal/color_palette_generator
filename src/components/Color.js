import React, { useState } from 'react'
import '../CSS/color.css'

const Color = ({color, onCopy}) => {
    const [hover, setHover] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(color);
        onCopy(color);
    }
    return (
        <div 
        className='color-container' 
        style={hover ? {backgroundColor: color, position:'relative', bottom:'10px', boxShadow:"0px 5px 8px lightgray"}: {backgroundColor: color}} 
        onMouseOver={e=>setHover(true)} 
        onMouseOut={e=>setHover(false)}
        onClick={handleCopy}
        >
            <h3 className='color-name'>{color}</h3>
        </div>
    )
}

export default Color
