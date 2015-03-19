/**
 * A div inside another div
 *
 * @param {Object} [p] - the properties of the page
 * @see mnmo-components/centeredbox
 */
import React from 'react';
export default (p) =>
<div style={p.styles.outerDiv}>
    <div style={p.styles.innerDiv}>
        {p.children}
    </div>
</div>;
