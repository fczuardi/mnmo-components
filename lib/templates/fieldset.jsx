/** 
 * A fieldset container with it's legend
 *
 * @param {Object} [p] - the properties of the fieldset
 * @see mnmo-components/fieldset
 */
import React from 'react';
export default (p) => 
<fieldset className={p.className} style={p.styles.fieldset}>
    {p.legend ? 
        <legend style={p.styles.legend}>
            {p.legend}
        </legend>
    : null}
    {p.children}
</fieldset>;
