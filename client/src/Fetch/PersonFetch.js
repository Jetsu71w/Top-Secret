import axios from "axios";
import { PEOPLE_FETCH, PERSON_FETCH, PERSON_CREATE, PERSON_UPDATE } from "./types"

export const personFetch = id => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "/people/" + id).then(
            res => {
                dispatch({ type : PERSON_FETCH, payload : res.data });
            }
        )
    }
}

export const peopleFetch =() => {
    return dispatch => {
        axios.get(process.env.REACT_APP_API_URL + "/people").then(
        res =>{
            dispatch({ type : PEOPLE_FETCH, payload : res.data });
        }
      )
    }
}

export const personDelete = id => {
    return dispatch => {
        axios.delete(process.env.REACT_APP_API_URL + "/people/" + id).then(res => {
            axios.get(process.env.REACT_APP_API_URL + "/people").then(
                res => {
                    dispatch({ type : PEOPLE_FETCH , payload : res.data });
              });
        })
    }
}

export const personCreate = values => {
    return dispatch => {
        axios.post(process.env.REACT_APP_API_URL + "/people", values).then(
            res => {
                dispatch({type: PERSON_CREATE});
            }
        )
    }
}

export const personUpdate = (id, values) => {
    return dispatch => {
        axios.put(process.env.REACT_APP_API_URL + "/people/" + id, values).then(
            res => {
                dispatch({type : PERSON_UPDATE});
            }    
        );
    }
}