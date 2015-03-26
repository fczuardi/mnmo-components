// Renders a div containing 3 cheboxes into the DOM element with id 'main'
import {
    render,
    createElement as create,
    DOM
} from 'react';

import {
    Drawer,
    FieldSet,
    Checkbox,
    Select,
    RadioButton,
    Submit,
    List,
    LI
} from './lib';
import {
    Stage,
    CenteredBox, 
    TextInput} from './lib/themes/mnmo';
import {
    Drawer as MnmoDrawer,
    Checkbox as MnmoCheckbox,
    Select as MnmoSelect,
    FieldSet as MnmoFieldSet,
    RadioButton as MnmoRadioButton,
    Submit as MnmoSubmit,
    List as MnmoList,
    LI as MnmoLI,
} from './lib/themes/mnmo';
import mnmoCheckboxStyles from './lib/themes/mnmo/styles/checkbox';



render(
    create(Stage, null,
        create(MnmoDrawer, null,
            create(MnmoList, null,
                create(MnmoLI,{type: 'link', href: '#'}, 'Item A'),
                create(MnmoLI,{type: 'link', href: '#'}, 'Item B'),
                create(MnmoLI,{type: 'link', href: '#'}, 'Item C')
            ),
            create(MnmoList, null,
                create(MnmoLI,{type: 'radio', id: 'mnmo-radio-1', name: 'menu-radio-group'}, 'Item A'),
                create(MnmoLI,{type: 'radio', id: 'mnmo-radio-2', name: 'menu-radio-group', checked: true}, 'Item B'),
                create(MnmoLI,{type: 'radio', id: 'mnmo-radio-3', name: 'menu-radio-group'}, 'Item C')
            ),
            create(MnmoList, null,
                create(MnmoLI,{type: 'checkbox', id: 'mnmo-menu-check-1'}, 'Item A'),
                create(MnmoLI,{type: 'checkbox', id: 'mnmo-menu-check-2', checked: true}, 'Item B'),
                create(MnmoLI,{type: 'checkbox', id: 'mnmo-menu-check-3'}, 'Item C'),
                create(MnmoLI,{type: 'checkbox', id: 'mnmo-menu-check-4', checked: false}, 'Item D')
            )
        ),
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
            //------------------------------------------------------------------
            create(Drawer, null,
                create(List, null,
                    create(LI,{type: 'link', href: '#'}, 'Item A'),
                    create(LI,{type: 'link', href: '#'}, 'Item B'),
                    create(LI,{type: 'link', href: '#'}, 'Item C')
                ),
                create(List, null,
                    create(LI,{type: 'radio', id: 'radio-1', name: 'menu-radio-group'}, 'Item A'),
                    create(LI,{type: 'radio', id: 'radio-2', name: 'menu-radio-group', checked: true}, 'Item B'),
                    create(LI,{type: 'radio', id: 'radio-3', name: 'menu-radio-group'}, 'Item C')
                ),
                create(List, null,
                    create(LI,{type: 'checkbox', id: 'menu-check-1'}, 'Item A'),
                    create(LI,{type: 'checkbox', id: 'menu-check-2', checked: true}, 'Item B'),
                    create(LI,{type: 'checkbox', id: 'menu-check-3'}, 'Item C'),
                    create(LI,{type: 'checkbox', id: 'menu-check-4', checked: false}, 'Item D')
                )
            ),
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

