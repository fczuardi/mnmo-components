export default {
    input: {
        border: '1px solid #c7c7cc',
        borderRadius: 5
    },
    menu: {
        lineHeight: 35
    },
    colors: {
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
    },
    inputCheckItem: {
        div: {
            paddingRight: 5
        },
        label: {
            display: 'block',
            width: '100%',
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            lineHeight: 'inherit',
            backgroundImage: 'url(img/icons/radio_item_unchecked.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center'
        },
        checked: {
            label: {
                backgroundImage: 'url(img/icons/radio_item_checked_blue.png)'
            }
        }
    }
};