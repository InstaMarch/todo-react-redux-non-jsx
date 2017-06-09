let nextIdNumber = 0;

const ADD_TODO = "ADD_TODO";
const addTodo = function(text) {
    return {
        type: ADD_TODO,
        id: nextIdNumber += 1,
        text
    };
}
