import React from 'react';

const NewItemButton = ({addRow}) => {
    return (
        <button onClick={addRow}>New Item</button>
    )
}


const NewDateButton = ({addCol}) => {
    
    return (
        <button onClick={addCol}>New Date</button>
    )
}

export { NewItemButton, NewDateButton };