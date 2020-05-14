import React, { useState, useEffect } from 'react';
import ReactDataGrid from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';
import { NewItemButton, NewDateButton } from './Buttons.js';
import Cookie from 'js-cookie';
import useCookie from '@devhammed/use-cookie';


const originalColumn = { key: "item", name: "Item", editable: true };

const Grid = () => {
    let [dates, setDates, deleteDatesCookie] = useCookie("dates", []);
    let [items, setItems, deleteItemsCookie] = useCookie("items", []);

    const options = {
        expires: 60*60*24*365
    };

    let columns = [...dates];
    columns.unshift(originalColumn);    

    let addRow = () => {
        const item = prompt("New Item: ");
        let newRow = { item: item };
        let newItems = [...items];
        newItems.push(newRow);
        setItems(newItems, options);
    };

    const addCol = () => {
        const date = prompt("New Date: ");
        let newCol = { key: date, name: date, editable: true };
        let newCols = [...dates];        
        newCols.push(newCol);
        setDates(newCols, options);
    };

    let newItem = NewItemButton({addRow});
    let newDate = NewDateButton({addCol});

    const handleRowsUpdate = ({ fromRow, toRow, updated }) => {
        let newItems = [...items];
        for(let i = fromRow; i <= toRow; i++) {
            newItems[i] = { ...newItems[i], ...updated };
        }
        setItems(newItems);
    }

    return (
        <div>
            <ReactDataGrid
                columns={columns}
                rows={items}
                onRowsUpdate={handleRowsUpdate}
                enableCellSelect={true}
                minHeight={150}
            />
            {newItem}
            {newDate}  
        </div>
        
    )
}


export default Grid;