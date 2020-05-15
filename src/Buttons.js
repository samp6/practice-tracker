import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dateFormat from 'dateformat';

const NewItemButton = ({addRow}) => {
    return (
        <button onClick={addRow}>New Item</button>
    )
}

const NewDate = ({addCol}) => {
    const [date, setDate] = useState(new Date());

    const handleSubmit = () => {
        var formatted = dateFormat(date, "shortDate");
        addCol(formatted);
    }

    return (
        <div>
            <DatePicker selected={date} onChange={date => setDate(date)} />
            <button onClick={handleSubmit}>Add Date</button>
        </div>        
    )
}

export { NewItemButton, NewDate };