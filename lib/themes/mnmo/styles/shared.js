const colors = {
    blue: [
        '#5e7689', //unchecked radio blue
        '#0d99db'  //checked radio, enabled button, blue
    ],
    gray: [
        '#787878', //disabled button background gray
        '#a8a8a8', //disabled button text gray
        '#bfbfc3', //drawer menu right border
        '#dddce1', //menu list group top and bottom boundaries
        '#e2e1e4', //menu list items separator
        '#efeff4'  //drawer background color
    ]
};

export default {
    input: {
        border: '1px solid #c7c7cc',
        borderRadius: 5
    },
    menu: {
        lineHeight: 35
    },
    colors: colors,
    icons: { //icon-font characters
        menu: 'a',
        check: 'b',
        chevronRight: 'c'
    },
    inputCheckItem: {
        div: {
            paddingRight: 5
        },
        label: {
            display: 'block',
            width: '100%',
            lineHeight: 'inherit'
        },
        icon: {
            float: 'right',
            background: 'none',
            color: '#fff',
            width: 'auto',
            height: 'auto',
            marginRight: 0,
            lineHeight: 'inherit'
        },
        checked: {
            label: {
            },
            icon: {
                color: colors.blue[1]
            }
        }
    }
};
