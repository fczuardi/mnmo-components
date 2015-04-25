import React from 'react';

export default (p) =>        
<div style={p.styles.row}>
    {p.cells.map( (cell, key) => (
    <div key={key} style={p.styles.cell}>
        <label>{cell.label}</label>
        <select 
            style={p.styles.select}
            onChange={cell.onChange}
            value={cell.value}
        >
        {cell.options.map( (option, key) => (
            <option 
                key={key} 
                value={option.value}
            >
                {option.label}
            </option>
        ))}
        </select>
    </div>
    ))}
</div>;
