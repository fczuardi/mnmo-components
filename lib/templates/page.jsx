/**
 * Template of a basic HTML page
 *
 * @param {Object} [p] - the properties of the page
 * @see mnmo-components/checkbox
 */
import React from 'react';
export default (p) =>
<html lang={p.lang}>
    <head>
        <meta charSet={p.charSet} />
        {p.stylesheets.map(
           (href, key) => <link href={href} key={key} rel="stylesheet" />
        )}
        <title>{p.title}</title>
    </head>
    <body>
        {p.children}
        {p.scripts.map(
            (src, key) => <script src={src} key={key}></script>
        )}
    </body>
</html>;
