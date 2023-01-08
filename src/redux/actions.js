import { ADD_ASSOCIATION, DELETE_ASSOCIATION, EDIT_ASSOCIATION } from "./action-types"
//Addassociation
export const Addassociation = association => {
    return {
        type: ADD_ASSOCIATION,
        payload: association
    }
}
//editAssociation
export const editAssociation = key => {
    return {
        type: EDIT_ASSOCIATION,
        payload: key
    }
}
//deleteAssociation
export const deleteAssociation = key => {
    return {
        type: DELETE_ASSOCIATION,
        payload: key
    }
}
