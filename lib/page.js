/**
 * A component that renders an HTML page.
 *
 * @class
 * @param {string} [lang='en']
 * @param {string} [charSet='utf-8']
 * @param {string} [title]
 * @param {string[]} [stylesheets]
 * @param {string[]} [scripts]
 * @param {...React.Component} [children]
 *
 * @module mnmo-components/page
 */
import {PropTypes, Component} from 'react';
import render from './templates/page.jsx';

var propTypes = {
    lang: PropTypes.string,
    charSet: PropTypes.string,
    title: PropTypes.string,
    scripts: PropTypes.arrayOf(PropTypes.string),
    stylesheets: PropTypes.arrayOf(PropTypes.string)
};

var defaultProps = {
    lang: 'en',
    charSet: 'utf-8',
    scripts: [],
    stylesheets: []
};

class Page extends Component{
    constructor() {
        this.render = () => render(this.props);
    }
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
