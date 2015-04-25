import template from './templates/multipicker.jsx';

var defaultProps = {
    styles: { row: {}, cell: {}, select: {}}
};

class MultiPicker {
    render() {
        return template(this.props);
    }
}
MultiPicker.defaultProps = defaultProps;

export default MultiPicker;
