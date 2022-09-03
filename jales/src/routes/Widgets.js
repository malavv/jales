import './Widgets.css';

import Quantity from "../widgets/Quantity";
import EfficiencyType from "../widgets/EfficiencyType";
import StyleBase from "../widgets/StyleBase";
import FermentableBase from "../widgets/FermentableBase";
import MiscellaneousAdditionType from '../widgets/MiscellaneousAdditionType';
import Plabel from '../widgets/general/Plabel';
import MashStep from '../widgets/MashStep';

import React from 'react';

// UI Widgets, they have to be loaded to work.
const name2widget = {
    'Quantity': Quantity,
    'EfficiencyType': EfficiencyType,
    'StyleBase': StyleBase,
    "FermentableBase": FermentableBase,
    "MiscellaneousAdditionType": MiscellaneousAdditionType,
    "Plabel": Plabel,
    "MashStep": MashStep,
};

// Examples to use
const examples = [
    { name: 'Quantity', props: { value: '5', unit: 'g'} },
    { name: 'Quantity', desc: 'with legend', props: { value: '5', unit: 'g', legend: 'legend'} },
    { name: 'Plabel', desc: 'with legend', props: { text: 'test', legend: 'legend'} },
    { name: 'EfficiencyType', props: { conversion: { value: '92', unit: '%' }, lauter: { value: '80.5', unit: '%' }, mash: { value: '74', unit: '%' }, brewhouse: { value: '74.1', unit: '%' } }},
    { name: 'StyleBase', props: { name: "Specialty", category: "Experimental and Historic", category_number: 24, style_letter: "A", style_guide: "BJCP 1999", type: "beer" }},
    { name: 'FermentableBase', props: {
        name: "Flaked Barley",
        type: "grain",
        color: {value: 2.2, unit: "Lovi"},
        origin: "America",
        amount: {value: 0.5, unit: "lb"},
        yield_type: { potential: {value: 1033, unit: "sg"} }
      }},
    { name: 'MiscellaneousAdditionType', props: {
        name: "Juniper Berries",
        type: "spice",
        amount: {value: 1, unit: "oz"},
        timing: {
          time: {value: 15, unit: "day"},
          duration: {value: 14, unit: "day"},
          use: "add_to_fermentation"
        }
    }},
    { name: 'MashStep', props: {
        "name": "Saccharification Rest",
        "type": "infusion",
        "amount": {"value": 22.5, "unit": "qt"},
        "step_temperature": {"value": 158, "unit": "F"},
        "step_time": {"value": 70, "unit": "min"},
        "ramp_time": {"value": 5, "unit": "min"},
        "end_temperature": {"value": 158, "unit": "F"},
        "description": "Add 22.50 qt of water at 165.0 F",
        "water_grain_ratio": {"value": 2.09, "unit": "qt/lb"},
        "infuse_temperature": {"value": 165, "unit": "F"}
      }},
];

/** Lists all UI Widgets with examples */
export default function Widgets() {
    // Dynamically load quantity with given properties, format for debugging.
    function CreateExample({name, props, desc}) {
        const Widget = name2widget[name];
        return (
            <div key={`${name}+${desc}`} className='widgets-el'>
                <div>{desc ? `${name} (${desc})`: name}</div>
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