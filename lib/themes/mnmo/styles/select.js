/**
 * Styles for the themed text-input fields
 * @see mnmo-components/lib/themes/mnmo/textinput
 */
import shared from './shared';
export default {
    div: {
        width: 85,
        height: 30,
        fontSize: 14,
        border: shared.input.border,
        borderRadius: shared.input.borderRadius,
        float: 'left',
        marginRight: 10,
        overflow: 'hidden'
    },
    select: {
        border: 0,
        height: 42,
        lineHeight: '42px',
        marginTop: -6,
        marginLeft: -5,
        width: 130,
        background: '#fff',
        paddingLeft: 8
    }
};
