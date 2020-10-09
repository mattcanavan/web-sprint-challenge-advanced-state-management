import { bindActionCreators } from 'redux';
import { FETCH_CHARS, NEW_CHAR } from './types';

const fetchChars = () => dispatch => { 
    //returning another function because middleware enables async
        
    console.log('fetching after Mount ...')
    fetch('http://localhost:3333/smurfs')
        .then(res => res.json())
        .then(chars => 
            dispatch({
            type: FETCH_CHARS,
            payload: chars
        }))
     
    }
export default fetchChars;


export const postChar = (newSmurf) => dispatch => { 
    //returning another function because middleware enables async
        
    console.log('POSTing character ...')
    fetch('http://localhost:3333/smurfs', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newSmurf)
    })
    .catch(err => alert(err))
    .then(res => res.json())
    .then(data => dispatch({
        type: NEW_CHAR,
        payload: data
    }));
     
    }
