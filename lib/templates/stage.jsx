/**
 * A styled div used as the main container for an application
 *
 */
import React from 'react';
export default (p) =>
<div style={p.style}>
    {p.children}
</div>;
