import medAle from '../examples/MedievalAle.json';
import bds from '../examples/BrettDosedKegsSaison.json';

import { Doc } from '../model/doc';

const examples = [
    new Doc('MedievalAle.json', medAle),
    new Doc('BrettDosedKegsSaison.json', bds)
];

export default examples;