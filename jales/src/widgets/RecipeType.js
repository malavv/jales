import './RecipeType.css';

import Quantity from "./Quantity";
import EfficientyType from './EfficiencyType';
import StyleBase from './StyleBase';
import IngredientsType from './IngredientsType';
import MashProcedureType from './MashProcedureType';
import BoilProcedureType from './BoilProcedureType';

export default function RecipeType(props) {
    const {
        name,
        type,
        author,
        coauthor,
        created,
        batch_size,
        efficiency,
        style,
        ingredients,
        mash,
        notes,
        original_gravity,
        final_gravity,
        alcohol_by_volume,
        ibu_estimate,
        color_estimate,
        beer_pH,
        carbonation,
        apparent_attenuation,
        fermentation,
        packaging,
        boil,
        taste,
        calories_per_pint } = props;

    return (
        <div className='recipe col'>
            <div>{name}</div>
            <div>{type}</div>
            <div>{author}</div>
            {coauthor && <div>{coauthor}</div>}
            {created && <div>{created}</div>}
            <Quantity {...batch_size} legend="batch_size" />
            <EfficientyType {...efficiency} />
            {style && <StyleBase {...style} />}
            <IngredientsType {...ingredients} />
            <MashProcedureType {...mash} />
            {notes && <div>{notes}</div>}
            {original_gravity && <Quantity {...original_gravity} legend="original_gravity" />}
            {final_gravity && <Quantity {...final_gravity} legend="final_gravity" />}
            {alcohol_by_volume && <Quantity {...alcohol_by_volume} legend="alcohol_by_volume" />}
            {ibu_estimate && <Quantity {...ibu_estimate} legend="ibu_estimate" />}
            {color_estimate && <Quantity {...color_estimate} legend="color_estimate" />}
            {beer_pH && <Quantity {...beer_pH} legend="beer_pH" />}
            {carbonation && <div>{carbonation}</div>}
            {apparent_attenuation && <Quantity {...apparent_attenuation} legend="apparent_attenuation" />}
            {boil && <BoilProcedureType {...boil} legend="boil" />}
            {calories_per_pint && <div>{calories_per_pint}</div>}
        </div>
    );
}