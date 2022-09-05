import './RecipeType.css';

import Quantity from "./Quantity";
import EfficientyType from './EfficiencyType';
import StyleBase from './StyleBase';
import IngredientsType from './IngredientsType';
import MashProcedureType from './MashProcedureType';
import BoilProcedureType from './BoilProcedureType';
import Plabel from './Plabel';

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
            <section className='row'>
                <div className='recipe-section-head'>
                    Summary
                </div>
                <div className='recipe-section-main'>
                    <div className='row'>
                        <Plabel text={name} legend={author || "no author"} className="auto"/>
                        <div className='recipe-type'>{type}</div>
                    </div>
                    <div className='row'>
                        <Quantity {...batch_size} legend="batch_size" />
                        {original_gravity && <Quantity {...original_gravity} legend="original_gravity" />}
                        {final_gravity && <Quantity {...final_gravity} legend="final_gravity" />}
                        {alcohol_by_volume && <Quantity {...alcohol_by_volume} legend="alcohol_by_volume" />}
                        {ibu_estimate && <Plabel text={ibu_estimate?.method} legend="ibu_estimate" />}
                        {color_estimate && <Quantity {...color_estimate} legend="color_estimate" />}
                        {beer_pH && <Quantity {...beer_pH} legend="beer_pH" />}
                        {apparent_attenuation && <Quantity {...apparent_attenuation} legend="apparent_attenuation" />}
                    </div>
                    {style && <StyleBase {...style} />}
                    {notes && <div>{notes}</div>}
                    {carbonation && <div>{carbonation}</div>}
                    {coauthor && <div>{coauthor}</div>}
                    {created && <div>{created}</div>}
                    {calories_per_pint && <div>{calories_per_pint}</div>}
                </div>
            </section>

            <section className='row'>
                <div className='recipe-section-head'>
                    Ingredients
                </div>
                <div className='recipe-section-main'>
                    <IngredientsType {...ingredients} />
                </div>
            </section>

            <section className='row'>
                <div className='recipe-section-head'>
                    Mash
                </div>
                <div className='recipe-section-main'>
                    <MashProcedureType {...mash} />
                </div>
            </section>
            {boil &&
                <section className='row'>
                    <div className='recipe-section-head'>
                        Boil
                    </div>
                    <div className='recipe-section-main'>
                        <BoilProcedureType {...boil} legend="boil" />
                    </div>
                </section>
            }
            <section className='row'>
                <div className='recipe-section-head'>
                    Eff.
                </div>
                <div className='recipe-section-main'>
                    <EfficientyType {...efficiency} />
                </div>
            </section>
        </div>
    );
}