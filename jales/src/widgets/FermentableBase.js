import CellLegend from './CellLegend';
import './FermentableBase.css';
import Quantity from './Quantity';

export default function FermentableBase({name, type, origin, producer, product_id, grain_group, yield_type, color}) {
    return(
        <div className='ferment-base'>
            <div className='ferment-title'>{name}</div>
            <CellLegend legend="type">
                <span className='ferment-lbl'>{type}</span>
            </CellLegend>
            <Quantity {...yield_type.potential} legend="yield" />
            <Quantity {...color} legend="color" />
            <CellLegend legend="origin">
                <span className='ferment-lbl'>{origin}</span>
            </CellLegend>
            {producer && <div>{producer}</div>}
            {product_id && <div>{product_id}</div>}
            {grain_group && <div>{grain_group}</div>}
        </div>
    );
}