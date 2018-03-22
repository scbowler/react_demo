import React from 'react';
import Button from './button';
import Box from './box';

export default function(props){

    const { newColor, color, pos: { top, left } } = props;

    const containerStyle = {
        display: 'inline-block',
        position: 'absolute',
        transitionDuration: '500ms',
        top,
        left
    };

    return (
        <div style={containerStyle}>
            <Button updateColor={newColor} />
            <Box color={color}/>
        </div>
    )
}
