import { PEOPLE_FETCH, PERSON_FETCH, PERSON_CREATE, PERSON_UPDATE } from "../Fetch/types";
export default function(state = {}, action) {
    switch (action.type) {
        case PEOPLE_FETCH :
        case PERSON_FETCH :
            return action.payload;
        case PERSON_CREATE :
            return{ saved : true, msg: "Saved" }
        case PERSON_UPDATE :
            return{ ...state, saved : true, msg: "Edited" }
        default:
            return state;
    }
}