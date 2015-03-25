/**
 * A container for list items
 * 
 * @class
 * 
 * 
 */
import render from './templates/list.jsx';

class List {
    constructor() {
        this.render = () => render(this.props);
    }
}

export default List;