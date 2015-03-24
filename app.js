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
    RadioButton,
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
    RadioButton as MnmoRadioButton,
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
            create(MnmoFieldSet, {legend: 'Quanto é 3 + 5?'},
                create(MnmoRadioButton, {
                    name: 'group-0', 
                    id: 'radio-mnmo-1',
                    first: true,
                    onChange: function(){console.log('foo');}
                }, '8'),
                create(MnmoRadioButton, {
                    name: 'group-0', 
                    id: 'radio-mnmo-2',
                    checked: true,
                    onChange: function(){console.log('foo');}
                }, '4'),
                create(MnmoRadioButton, {
                    name: 'group-0', 
                    id: 'radio-mnmo-3',
                    onChange: function(){console.log('foo');}
                }, '35')
            ),
            create(MnmoSubmit, {
                value: 'Já respondeu a pergunta?',
                disabled: true
            }),
            create(MnmoSubmit, {
                value: 'Acessar'
            }),
            create(FieldSet, {styles: {fieldset: { borderColor: '#0bb' }}},
                create(RadioButton, {
                    name: 'group-1', 
                    id: 'radio-1',
                    onChange: function(){console.log('foo');}
                }, 'A'),
                create(RadioButton, {
                    name: 'group-1', 
                    id: 'radio-2',
                    onChange: function(){console.log('foo');}
                }, 'B'),
                create(RadioButton, {
                    name: 'group-1', 
                    id: 'radio-3',
                    onChange: function(){console.log('foo');}
                }, 'C'),
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

