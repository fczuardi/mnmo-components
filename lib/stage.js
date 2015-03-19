import render from './templates/stage.jsx';

var defaultProps = {
    style: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        display: 'table',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: 'cover'
    }
};

class Stage {
    constructor() {
        this.render = () => render(this.props);
    }
}

Stage.defaultProps = defaultProps;

export default Stage;