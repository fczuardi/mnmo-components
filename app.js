// Renders a div containing 3 cheboxes into the DOM element with id 'main'
import {
    render,
    createElement,
    DOM
} from 'react';

import {Checkbox} from './lib';
import {Checkbox as MnmoCheckbox} from './lib/themes/mnmo';
import mnmoCheckboxStyles from './lib/themes/mnmo/styles/checkbox';

render(
    DOM.div(null,
        createElement(Checkbox, {
                id: 'mycheckbox01',
                checked: true,
                styles: mnmoCheckboxStyles
            },
            'checked checkbox'
        ),
        createElement(Checkbox, {
                id: 'mycheckbox02',
                checked: false
            },
            'unchecked checkbox'
        ),
        createElement(MnmoCheckbox, {
                id: 'mycheckbox03',
            },
            'checked property not defined'
        )
    ),
    document.getElementById('main')
);

