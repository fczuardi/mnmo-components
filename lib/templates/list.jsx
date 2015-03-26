/**
 *
 */
import React from 'react';
export default (p) =>
<ol style={p.styles.ol} {...p}>
    {p.children}
</ol>;
