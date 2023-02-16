import React, { useState } from 'react'
import '../CSS/color.css'

const Color = ({color}) => {
    const [hover, setHover] = useState(false);
    return (
        <div className='color-container' style={hover ? {position:'relative', bottom:'10px', boxShadow:"3px 5px 8px lightgray"}: {}} onMouseOver={e=>setHover(true)} onMouseOut={e=>setHover(false)}>
            <div style={{backgroundColor:color, height:'75%'}}>
            </div>
            <div className='color-name'>
                <h3>{color}</h3>
            </div>
        </div>
    )
}

export default Color
