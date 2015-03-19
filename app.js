// Renders a div containing 3 cheboxes into the DOM element with id 'main'
import {
    render,
    createElement as create,
    DOM
} from 'react';

import {
    FieldSet,
    Checkbox,
    Select
} from './lib';
import {
    Stage, 
    CenteredBox, 
    TextInput} from './lib/themes/mnmo';
import {
    Checkbox as MnmoCheckbox,
    FieldSet as MnmoFieldSet 
} from './lib/themes/mnmo';
import mnmoCheckboxStyles from './lib/themes/mnmo/styles/checkbox';

console.log(TextInput);


render(
    create(Stage, null,
        create(CenteredBox, null,
            create(FieldSet, {styles: {fieldset: { borderColor: '#0bb' }}},
                create(TextInput, {placeholder: 'my placeholder'})
            ),
            create(MnmoFieldSet, { legend: 'Bem vindo' },
                create(TextInput, {placeholder: 'usuário'}),
                create(TextInput, {placeholder: 'senha', type: 'password'}),
                create(Select, {name: 'foobarSelector'},
                    DOM.option({value: 1}, 'FOOBAR'),
                    DOM.option({value: 1}, 'HELLO'),
                    DOM.option({value: 1}, 'WORLD')
                ),
                create(Checkbox, {
                        id: 'mycheckbox01',
                        checked: true,
                        styles: mnmoCheckboxStyles
                    },
                    'checked checkbox'
                ),
                create(Checkbox, {
                        id: 'mycheckbox02',
                        checked: false
                    },
                    'unchecked checkbox'
                ),
                create(MnmoCheckbox, {
                        id: 'mycheckbox03',
                    },
                    'checked property not defined'
                )
            )
        )
    ),
    document.getElementById('main')
);

