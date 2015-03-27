/**
 * Template of a HTML checkbox input element with it's label companion.
 *
 * Useful for creating checkboxes with custom images, where the style of the
 * native element is set to hide it and the custom image used as the background
 * of the label. Since the input ```id``` and the label ```for-id```
 * attributes are set, clicking on the label background image sets the html
 * checkbox input checked state even if it is visually hidden.
 *
 * @param {Object} p - the properties of the checkbox and it's label 
 * @see mnmo-components/checkbox
 */
import React from 'react';
export default (p) => {
    return (
<div className={p.className}>
    <input type="checkbox"
        name={p.name}
        checked={p.checked}
        disabled={p.disabled}
        onChange={p.onChange}
        id={p.id}
        style={p.styles.input}
    />
    <label 
        htmlFor={p.id} 
        style={p.styles.label}
    >
        {p.children}
    </label>
</div>
    );
};
