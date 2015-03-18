/**
 * A div HTML element with an input type text or password inside
 *
 * @see mnmo-components/textinput
 */
import React from 'react';
export default (p) => 
<div style={p.styles.div}>
    <input 
        style={p.styles.input}
        {...p}
    />
</div>;
