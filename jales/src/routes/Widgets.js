import './Widgets.css';

import Quantity from "../widgets/Quantity";
import EfficiencyType from "../widgets/EfficiencyType";
import StyleBase from "../widgets/StyleBase";

import React from 'react';

// UI Widgets, they have to be loaded to work.
const name2widget = {
    'Quantity': Quantity,
    'EfficiencyType': EfficiencyType,
    'StyleBase': StyleBase,
};

// Examples to use
const examples = [
    { name: 'Quantity', props: { val: '5', unit: 'g' } },
    { name: 'EfficiencyType', props: { conversion: { val: '92', unit: '%' }, lauter: { val: '80.5', unit: '%' }, mash: { val: '74', unit: '%' }, brewhouse: { val: '74.1', unit: '%' } }},
    { name: 'StyleBase', props: { name: "Specialty", category: "Experimental and Historic", category_number: 24, style_letter: "A", style_guide: "BJCP 1999", type: "beer" }},
];

/** Lists all UI Widgets with examples */
export default function Widgets() {
    // Dynamically load quantity with given properties, format for debugging.
    function CreateExample({name, props}) {
        const Widget = name2widget[name];
        return (
            <div key={name} className='widgets-el'>
                <div>{name}</div>
                <div>{<Widget {...props} />}</div>
            </div>
        );
    }

    return (<div className="widgets-list">
        <div className='widgets-title'>Widgets</div>
        <div className='widgets-els'>
            {examples.map(CreateExample)}
        </div>
    </div>);
}