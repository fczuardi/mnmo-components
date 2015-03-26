/**
 *
 */
import React from 'react';
export default (p, input, label) => {
    const type = p.type.toLowerCase();
    const input = (( type === 'checkbox') || (type === 'radio')) ? (
<input style={p.styles.input} type={p.type} id={p.id} name={p.name} />
    ) : null;
    const label = (type === 'link') ? (
<a style={p.styles.label} onClick={p.onClick} {...p}>
    {p.children}
</a>
    ) : ((type === 'checkbox') || (type === 'radio')) ? (
<label style={p.styles.label} htmlFor={p.id}>
    {p.children}
</label>
    ) : (
<div style={p.styles.label} {...p}>
    {p.children}
</div>
    );
    return (    
<li style={p.styles.li}>
    {input}
    {label}
</li>
    );
}
