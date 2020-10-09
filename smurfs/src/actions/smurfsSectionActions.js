import { FETCH_CHARS, NEW_CHAR } from './types';

const fetchChars = () => dispatch => { 
    //returning another function because middleware enables async
        
    console.log('fetching inside reducer ...')
    fetch('http://localhost:3333/smurfs')
        .then(res => res.json())
        .then(chars => 
            dispatch({
            type: FETCH_CHARS,
            payload: chars
        }))
     
    }

export default fetchChars;