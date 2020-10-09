import { FETCH_CHARS, NEW_CHAR } from '../actions/types';


const initalState = {
    allSmurfs = [], // characters that come in from our action (which has fetch request)
    singleSmurf = {}, // single character that we POST 
}

export default function(state = initalState, action) {
    switch(action.type){
        default:
            return state
    }
}