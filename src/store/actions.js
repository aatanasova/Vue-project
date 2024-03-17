export const addItem = ({commit}, item) => {
    commit('ADD_ITEM', item)
}

export const deleteItem = ({commit}, itemId) => {
    commit('DELETE_ITEM', itemId)
}

export const completeItem = ({commit}, itemId) => {
    commit('COMPLETE_ITEM', itemId)
}

export const updateItem = ({commit}, updatedItem) => {
    commit('UPDATE_ITEM', updatedItem)
}