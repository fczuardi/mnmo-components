import shared from './shared';
let styles = {
    div: {
        paddingLeft: 20,
        paddingRight: 20
    },
    input: {
        width: '100%',
        lineHeight: 1.7,
        letterSpacing: 0.5,
        fontFamily: 'Roboto Bold',
        border: 'none',
        borderRadius: 2,
        color: '#fff',
        // backgroundColor: shared.colors.yellow[1]
        backgroundColor: shared.colors.blue[1]
    },
    disabled: {
        input: {
            backgroundColor: shared.colors.gray[0],
            color: shared.colors.gray[1]
        }
    },
    inside: {
        div: {
            paddingLeft: 0,
            paddingRight: 0
        }
    }
};
export default () => styles;
