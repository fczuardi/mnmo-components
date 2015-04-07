import render from './templates/centeredbox.jsx';

var defaultProps = {
    styles: { outerDiv: {}, innerDiv: {} }
};

class CenteredBox {
    constructor() {
        this.render = () => render(this.props);
    }
}

CenteredBox.defaultProps = defaultProps;

export default CenteredBox;
