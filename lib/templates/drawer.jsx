import React from 'react';
export default (p) => {
    let backButton = (p.closeLabel) ? (
        <button style={p.styles.close} onClick={p.onCloseClick}>
            {p.closeLabel}
        </button>
    ) : null;
    let saveButton = (p.saveLabel) ? (
        <button style={p.styles.save} onClick={p.onSaveClick}>
            {p.saveLabel}
        </button>
    ) : null;
    let header = (p.title) ? (
        <header style={p.styles.header}>
            <h1 style={p.styles.title}>{p.title}</h1>
            {backButton}
            {saveButton}
        </header>
    ) : null;
    return (
<div style={p.styles.div}>
    {header}
    {p.children}
</div>
    );
};
