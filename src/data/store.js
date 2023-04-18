import { reactive } from "vue";
import data from './dc-comics.json';
export const store = {
    arrayCards: [...data]
}