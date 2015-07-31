import React from 'react';
export default (p) => 
<div style={p.styles.div}>
    <input
        type="button"
        style={p.styles.input}
        {...p}
    />
</div>;
