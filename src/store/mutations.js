import { completeItem } from "./actions";

export const ADD_ITEM = (state, item) => {
    state.toDoList.push(item);
}

export const DELETE_ITEM = (state, itemId) => {
    state.toDoList = state.toDoList.filter(item => item.id !== itemId)
}
export const COMPLETE_ITEM = (state, itemId) => {
    const targetItem = state.toDoList.find(item => item.id === itemId);
    // Check if the item is found before modifying
    if (targetItem) {
    // Modify the property of the found element
    targetItem.complited = true;
    }

    state.completedItems.push(targetItem);
    state.toDoList = state.toDoList.filter(item => item.id !== itemId)

    console.log("STAte.completed", state.completedItems)
}

export const UPDATE_ITEM = (state, updatedItem) => {
    const index = state.toDoList.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
        state.toDoList[index] = { ...updatedItem }; 
    }
}