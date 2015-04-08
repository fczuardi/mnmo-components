/**
 * HTML menu element of type toolbar
 * @see mnmo-components/toolbar
 */
import React from 'react';
export default (p) =>
<menu style={p.styles.menu} type="toolbar">
    {p.children}
</menu>;
