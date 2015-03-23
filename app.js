// Renders a div containing 3 cheboxes into the DOM element with id 'main'
import {
    render,
    createElement as create,
    DOM
} from 'react';

import {
    FieldSet,
    Checkbox,
    Select,
    Submit
} from './lib';
import {
    Stage, 
    CenteredBox, 
    TextInput} from './lib/themes/mnmo';
import {
    Checkbox as MnmoCheckbox,
    Select as MnmoSelect,
    FieldSet as MnmoFieldSet,
    Submit as MnmoSubmit
} from './lib/themes/mnmo';
import mnmoCheckboxStyles from './lib/themes/mnmo/styles/checkbox';



render(
    create(Stage, null,
        create(CenteredBox, null,
            create(MnmoFieldSet, { legend: 'Bem vindo' },
                create(TextInput, {placeholder: 'usuário'}),
                create(TextInput, {placeholder: 'senha', type: 'password'}),
                create(MnmoSelect, {name: 'foobarSelector'},
                    DOM.option({value: 1}, 'FOOBAR'),
                    DOM.option({value: 1}, 'HELLO'),
                    DOM.option({value: 1}, 'WORLD')
                ),
                create(MnmoSelect, {name: 'foobarSelector'}),
                create(Checkbox, {
                        id: 'mycheckbox01',
                        checked: true,
                        styles: mnmoCheckboxStyles
                    },
                    'checked checkbox'
                )
            ),
            create(MnmoSubmit, {
                value: 'Já respondeu a pergunta?',
                disabled: true
            }),
            create(MnmoSubmit, {
                value: 'Acessar'
            }),
            create(FieldSet, {styles: {fieldset: { borderColor: '#0bb' }}},
                create(Select, {name: 'foobarSelector'},
                    DOM.option({value: 1}, 'FOOBAR'),
                    DOM.option({value: 1}, 'HELLO'),
                    DOM.option({value: 1}, 'WORLD')
                ),
                create(TextInput, {placeholder: 'my placeholder'}),
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
                ),
                create(Submit, {value: 'OK', disabled: true})
            )
        )
    ),
    document.getElementById('main')
);

