import { REMOVE } from "./actionTypes"

export const remove = (id) => {
    return({
        type: REMOVE,
        payload:{id: id}
    })
}