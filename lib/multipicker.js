import template from './templates/multipicker.jsx';
import merge from 'lodash/object/merge';

var defaultProps = {
    styles: { row: {}, cell: {}, select: {}}
};

class MultiPicker {
    render() {
        let p = merge({}, this.props);
        let cellWidth = Math.floor(100 / p.cells.length) + '%';
        p.styles.cell.width = cellWidth;
        return template(p);
    }
}
MultiPicker.defaultProps = defaultProps;

export default MultiPicker;
