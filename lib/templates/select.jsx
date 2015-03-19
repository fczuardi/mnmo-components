/** 
 * A select HTML element wrapped by a div
 *
 * @param {Object} [p] - the properties of the fieldset
 * @see mnmo-components/select
 */
import React from 'react';
export default (p) => 
<div style={p.styles.div}>
    <select style={p.styles.select} {...p}>
        {p.children}
    </select>
</div>;
