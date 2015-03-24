/**
 * Template for a single radio button. 
 * An input type radio with corresponding label.
 *
 * @param {Object} p - properties of the radio button
 * @see mnmo-components/radio
 */
import React from 'react';
export default (p) =>
<div style={p.styles.div}>
    <input 
        type="radio" 
        name={p.name}
        id={p.id}
        key={p.key}
        value={p.value}
        checked={p.checked}
        disabled={p.disabled}
        style={p.styles.input}
        onChange={p.onChange}
    />
    <label 
        htmlFor={p.id}
        style={p.styles.label}
    >
        {p.children}
    </label>
</div>;
