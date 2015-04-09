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
    Switch,
    RadioGroup,
    A,
    Toolbar,
    ToolbarButton
} from './lib/themes/mnmo';

let drawerMenu = create(MnmoDrawer, {container: true, panelsOpened: 2},
    create(MnmoDrawer, {
            title: 'Drawer Title', 
            closeLabel: 'Voltar',
            closed: false
        },
        create(MnmoList, null,
            create(MnmoLI,null, 
                create(A, {href: 'http://example.com'},
                'A link'
                )
            ),
            create(MnmoLI,null, 
                create(Switch, {
                    id: 'switch-2',
                    checked: true,
                    isItem: true,
                    onChange: function(event){
                        console.log(event.target.value, event.target.checked);
                            }
                },
                'With label'
                )
            ),
            create(MnmoLI,null, 
                create(Switch, {
                    id: 'switch-0',
                    onChange: function(event){
                        console.log(event.target.value, event.target.checked);
                    }
                })
            ),
            create(MnmoLI,null, 
                'Foobar',
                create(Switch, {
                    id: 'switch-1',
                    styles: {div: {float: 'left'}},
                    onChange: function(event){
                        console.log(event.target.value, event.target.checked);
                    }
                })
            )
        ),
        create(MnmoList, null,
            create(MnmoLI, null,
                create(MnmoRadioButton, {
                    isItem: true, 
                    id: 'mnmo-radio-1', 
                    onChange: function(event){
                        console.log(event.target.value);
                    },
                    value: 'itema',
                    name: 'menu-radio-groupt'
                }, 'Item A')
            ),
            create(MnmoLI, null,
                create(MnmoRadioButton, {
                    isItem: true, id: 'mnmo-radio-2', checked: true, 
                    name: 'menu-radio-group',
                    value: 'itemb',
                    onChange: function(event){
                        console.log(event.target.value);
                    },
                }, 'Item B')
            ),
            create(MnmoLI, null,
                create(MnmoRadioButton, {
                    isItem: true, 
                    id: 'mnmo-radio-3', 
                    value: 'itemc',
                    name: 'menu-radio-group',
                    onChange: function(event){
                        console.log(event.target.value);
                    },
                }, 'Item C')
            )
        ),
        create(MnmoList, null,
            create(MnmoLI, null,
                create(MnmoCheckbox, {
                    isItem: true, id: 'mnmo-menu-check-1'
                }, 'Item A')
            ),
            create(MnmoLI, null,
                create(MnmoCheckbox, {
                    isItem: true, id: 'mnmo-menu-check-2', checked: true
                }, 'Item B')
            ),
            create(MnmoLI, null,
                create(MnmoCheckbox, {
                    isItem: true, id: 'mnmo-menu-check-3'
                }, 'Item C')
            )
        )
    ),
    create(MnmoDrawer, {
            title: 'Subdrawer', 
            closeLabel: 'Voltar',
            closed: false
        },
        create(MnmoList, null,
            create(MnmoLI,null, 
                create(A, {href: 'http://example.com'},
                'A link'
                )
            )
        )
    )
);

render(
    create(Stage, null,
        drawerMenu,
        DOM.div({style: {float: 'left'}},
            create(Toolbar, null,
                create(ToolbarButton, {
                    type: 'menuToggle',
                }, 'Menu'),
                create(ToolbarButton, {
                }, 'A Button')
            ),
            DOM.div(null,
                DOM.p(null, 'Foobar')
            )
        )
        // create(CenteredBox, null,
        //     create(MnmoFieldSet, { legend: 'Bem vindo' },
        //         create(TextInput, {placeholder: 'usuário'}),
        //         create(TextInput, {placeholder: 'senha', type: 'password'}),
        //         create(MnmoSelect, {name: 'foobarSelector'},
        //             DOM.option({value: 1}, 'FOOBAR'),
        //             DOM.option({value: 1}, 'HELLO'),
        //             DOM.option({value: 1}, 'WORLD')
        //         ),
        //         create(MnmoSelect, {name: 'foobarSelector'}),
        //         create(MnmoCheckbox, {
        //                 id: 'mycheckbox01',
        //                 checked: true
        //             },
        //             'checked checkbox'
        //         ),
        //         create(MnmoCheckbox, {
        //                 id: 'mycheckbox02',
        //                 checked: false
        //             },
        //             'unchecked checkbox'
        //         )
        //     ),
        //     create(MnmoFieldSet, {legend: 'Quanto é 3 + 5?'},
        //         create(RadioGroup, null, 
        //             create(MnmoRadioButton, {
        //                 name: 'group-0', 
        //                 id: 'radio-mnmo-1',
        //                 isBox: true,
        //                 value: 8,
        //                 onChange: function(event){console.log('foo', event.target.value);}
        //             }, '8'),
        //             create(MnmoRadioButton, {
        //                 name: 'group-0', 
        //                 id: 'radio-mnmo-2',
        //                 checked: true,
        //                 isBox: true,
        //                 value: 4,
        //                 onChange: function(event){console.log('foo', event.target.value);}
        //             }, '4'),
        //             create(MnmoRadioButton, {
        //                 name: 'group-0', 
        //                 id: 'radio-mnmo-3',
        //                 isBox: true,
        //                 value: 35,
        //                 onChange: function(event){console.log('foo', event.target.value);}
        //             }, '35')
        //         )
        //     ),
        //     create(MnmoSubmit, {
        //         value: 'Já respondeu a pergunta?',
        //         disabled: true
        //     }),
        //     create(MnmoSubmit, {
        //         value: 'Acessar'
        //     }),
        //     //------------------------------------------------------------------
        //     create(Drawer, null,
        //         create(List, null,
        //             create(LI, null,
        //                 create(Checkbox, {
        //                     id: 'menu-check-1'
        //                 }, 'Item A')
        //             ),
        //             create(MnmoLI, null,
        //                 create(Checkbox, {
        //                     id: 'menu-check-2', checked: true
        //                 }, 'Item B')
        //             ),
        //             create(MnmoLI, null,
        //                 create(Checkbox, {
        //                     id: 'menu-check-3'
        //                 }, 'Item C')
        //             )
        //         )
        //     ),
        //     create(FieldSet, {styles: {fieldset: { borderColor: '#0bb' }}},
        //         create(RadioButton, {
        //             name: 'group-1', 
        //             id: 'radio-1',
        //             value: 'A',
        //             onChange: function(){console.log('foo');}
        //         }, 'A'),
        //         create(RadioButton, {
        //             name: 'group-1', 
        //             id: 'radio-2',
        //             value: 'B',
        //             onChange: function(){console.log('foo');}
        //         }, 'B'),
        //         create(RadioButton, {
        //             name: 'group-1', 
        //             id: 'radio-3',
        //             value: 'C',
        //             onChange: function(){console.log('foo');}
        //         }, 'C'),
        //         create(Select, {name: 'foobarSelector'},
        //             DOM.option({value: 1}, 'FOOBAR'),
        //             DOM.option({value: 1}, 'HELLO'),
        //             DOM.option({value: 1}, 'WORLD')
        //         ),
        //         create(TextInput, {placeholder: 'my placeholder'}),
        //         create(Checkbox, {
        //                 id: 'mycheckbox02',
        //                 checked: false
        //             },
        //             'unchecked checkbox'
        //         ),
        //         create(Checkbox, {
        //                 id: 'mycheckbox02b',
        //                 checked: true
        //             },
        //             'checked checkbox'
        //         ),
        //         create(Checkbox, {
        //                 id: 'mycheckbox03',
        //             },
        //             'checked property not defined'
        //         ),
        //         create(Submit, {value: 'OK', disabled: true})
        //     )
        // )
    ),
    document.getElementById('main')
);

