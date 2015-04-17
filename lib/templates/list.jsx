/**
 *
 */
import React from 'react';
export default (p) => {
    let title = (p.title) ? (
<h2 style={p.styles.title}>
    {p.title}
</h2>
                            ) : null;
    return (
<div>
    {title}
    <ol style={p.styles.ol} {...p}>
        {p.children}
    </ol>
</div>
    );
}
