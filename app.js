const App = function() {
    return createElement("div", null, [
        createElement(Todos, null, null),
        createElement(AddTodo, null, null)
    ]);
};
