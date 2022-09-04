import './Widgets.css';

import Quantity from "../widgets/Quantity";
import EfficiencyType from "../widgets/EfficiencyType";
import StyleBase from "../widgets/StyleBase";
import FermentableBase from "../widgets/FermentableBase";
import MiscellaneousAdditionType from '../widgets/MiscellaneousAdditionType';
import Plabel from '../widgets/general/Plabel';
import MashStep from '../widgets/MashStep';
import BoilProcedureType from '../widgets/BoilProcedureType';
import MashProcedureType from '../widgets/MashProcedureType';
import IngredientsType from '../widgets/IngredientsType';
import CultureAdditionType from '../widgets/CultureAdditionType';

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
    "BoilProcedureType": BoilProcedureType,
    "MashProcedureType": MashProcedureType,
    "IngredientsType": IngredientsType,
    "CultureAdditionType": CultureAdditionType,
};

// Examples to use
const examples = [
    { name: 'Quantity', props: { value: '5', unit: 'g'} },
    { name: 'Quantity', desc: 'with legend', props: { value: '5', unit: 'g', legend: 'legend'} },
    { name: 'Quantity', desc: 'with long legend', props: { value: '5', unit: 'g', legend: 'looong legend'} },
    { name: 'Plabel', desc: 'with legend', props: { text: 'test', legend: 'legend'} },
    { name: 'EfficiencyType', props: { conversion: { value: '92', unit: '%' }, lauter: { value: '80.5', unit: '%' }, mash: { value: '74', unit: '%' }, brewhouse: { value: '74.1', unit: '%' } }},
    { name: 'StyleBase', props: { name: "Specialty", category: "Experimental and Historic", category_number: 24, style_letter: "A", style_guide: "BJCP 1999", type: "beer" }},
    { name: 'FermentableBase', props: {
        name: "Flaked Barley",
        type: "grain",
        color: {value: 2.2, unit: "Lovi"},
        origin: "America",
        amount: {value: 0.5, unit: "lb"},
        'yield': { potential: {value: 1033, unit: "sg"} }
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
    { name: 'CultureAdditionType', props: {
      "name": "English Ale",
      "type": "ale",
      "form": "liquid",
      "producer": "Ithaca Beer C",
      "product_id": "",
      "amount": {"value": 0, "unit": "ml"}
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
    {
        name: 'BoilProcedureType',
        props: {
            "name": "60 minute boil",
            "description": "A standard 60 min boil",
            "pre_boil_size": {"value": 5.5, "unit": "gal"},
            "boil_time": {"value": 90, "unit": "min"}
        },
    },
    {
        name: 'MashProcedureType',
        props: {
            "name": "Simple Mash Type - Single Step",
            "grain_temperature": {"value": 80, "unit": "F"},
            "notes": "",
            "mash_steps": [
              {
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
              }
            ]
          }
    },
    {name: 'IngredientsType', props: {
        "fermentable_additions": [
          {
            "name": "Buckwheat Honey",
            "type": "honey",
            "color": {"value": 0, "unit": "Lovi"},
            "origin": "America",
            "amount": {"value": 2.148, "unit": "lb"},
            "yield": {
              "potential": {"value": 1037, "unit": "sg"}
            }
          },
          {
            "name": "Flaked Barley",
            "type": "grain",
            "color": {"value": 2.2, "unit": "Lovi"},
            "origin": "America",
            "amount": {"value": 0.5, "unit": "lb"},
            "yield": {
              "potential": {"value": 1033, "unit": "sg"}
            }
          },
          {
            "name": "Roasted Barley",
            "type": "grain",
            "color": {"value": 450, "unit": "Lovi"},
            "origin": "America",
            "amount": {"value": 0.25, "unit": "lb"},
            "yield": {
              "potential": {"value": 1037, "unit": "sg"}
            }
          },
          {
            "name": "Unmalted Wheat",
            "type": "grain",
            "color": {"value": 2.7, "unit": "Lovi"},
            "origin": "America",
            "amount": {"value": 1.5, "unit": "lb"},
            "yield": {
              "potential": {"value": 1037, "unit": "sg"}
            }
          },
          {
            "name": "Pale Malt(2-row)",
            "type": "grain",
            "color": {"value": 1.8, "unit": "Lovi"},
            "origin": "America",
            "amount": {"value": 8, "unit": "lb"},
            "yield": {
              "potential": {"value": 1037, "unit": "sg"}
            }
          },
          {
            "name": "Crystal Malt",
            "type": "grain",
            "color": {"value": 60, "unit": "Lovi"},
            "origin": "America",
            "amount": {"value": 1, "unit": "lb"},
            "yield": {
              "potential": {"value": 1037, "unit": "sg"}
            }
          }
        ],
        "miscellaneous_additions": [
          {
            "name": "Bitter Orange Peel",
            "type": "spice",
            "amount": {"value": 0.63, "unit": "oz"},
            "timing": {
              "time": {"value": 60, "unit": "min"},
              "use": "add_to_boil"
            }
          },
          {
            "name": "Licorice Stick",
            "type": "spice",
            "amount": {"value": 0.75, "unit": "oz"},
            "timing": {
              "time": {"value": 60, "unit": "min"},
              "use": "add_to_boil"
            }
          },
          {
            "name": "Mugwort",
            "type": "herb",
            "amount": {"value": 1, "unit": "oz"},
            "timing": {
              "time": {"value": 60, "unit": "min"},
              "use": "add_to_boil"
            }
          },
          {
            "name": "Juniper Berries",
            "type": "spice",
            "amount": {"value": 1, "unit": "oz"},
            "timing": {
              "time": {"value": 15, "unit": "day"},
              "duration": {"value": 14, "unit": "day"},
              "use": "add_to_fermentation"
            }
          },
          {
            "name": "Lemon Balm",
            "type": "herb",
            "amount": {"value": 3, "unit": "oz"},
            "timing": {
              "time": {"value": 0, "unit": "min"}
            }
          }
        ],
        "culture_additions": [
          {
            "name": "English Ale",
            "type": "ale",
            "form": "liquid",
            "producer": "Ithaca Beer C",
            "product_id": "",
            "amount": {"value": 0, "unit": "ml"}
          }
        ]
      }}
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