const todos = function(state = [], action) {
    if(action.type === "ADD_TODO") {
        return [...state, {
            id: action.id,
            text: action.text,
            completed: false
        }];
    }
    return state;
}
