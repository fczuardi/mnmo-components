/**
 * A div HTML element with an input type submit inside
 *
 * @see mnmo-components/submit
 */
import React from 'react';
export default (p) => 
<div style={p.styles.div}>
    <input
        type="submit"
        style={p.styles.input}
        {...p}
    />
</div>;
