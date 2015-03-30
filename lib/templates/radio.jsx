/**
 * Template for a single radio button. 
 * An input type radio with corresponding label.
 *
 * @param {Object} p - properties of the radio button
 * @see mnmo-components/radio
 */
import React from 'react';
export default (p) =>
<div style={p.styles.div} className={p.className}>
    <input 
        type="radio" 
        name={p.name}
        id={p.id}
        checked={p.checked}
        disabled={p.disabled}
        value={p.value}
        onChange={p.onChange}
        style={p.styles.input}
        data-checked={p.checked}
    />
    <label 
        htmlFor={p.id}
        style={p.styles.label}
    >
        {p.children}
    </label>
</div>;
