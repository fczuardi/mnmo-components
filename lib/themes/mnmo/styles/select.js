/**
 * Styles for the themed text-input fields
 * @see mnmo-components/lib/themes/mnmo/textinput
 */
import shared from './shared';
export default {
    div: {
        width: 90,
        height: 30,
        border: shared.input.border,
        borderRadius: shared.input.borderRadius,
        float: 'left',
        marginRight: 10,
        overflow: 'hidden'
    },
    select: {
        height: 42,
        lineHeight: 6,
        marginTop: -6,
        marginLeft: -5,
        width: 130
    }
};