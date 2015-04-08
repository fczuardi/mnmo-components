import React from 'react';
export default (p) => {
    let header = (p.title) ? (
<header style={p.styles.header}>
    <h1 style={p.styles.title}>{p.title}</h1>
</header>
        ) : null;
    return (
<div style={p.styles.div}>
    {header}
    {p.children}
</div>
    );
};
