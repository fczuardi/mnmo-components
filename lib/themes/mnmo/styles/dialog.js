const styles = {
    div: {
        position: 'fixed',
        boxSizing: 'border-box',
        height: '100%',
        overflow: 'hidden',
        zIndex: 2
    },
    alignCenter: {
        left: '50%',
        marginLeft: -150
    },
    alignRight: {
        right: 0
    },
    fullscreen: {
        width: '100%',
        top: 0,
        left: 0,
        marginLeft: 0,
        zIndex: '2'
    }
};

export default () => styles;
