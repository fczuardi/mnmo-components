import render from './templates/stage.jsx';

var defaultProps = {
    style: {}
};

class Stage {
    constructor() {
        this.render = () => render(this.props);
    }
}

Stage.defaultProps = defaultProps;

export default Stage;
