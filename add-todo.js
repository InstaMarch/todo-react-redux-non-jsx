const { connect } = ReactRedux;

let AddTodo = function({ dispatch }) {
    let input;

    return createElement("div", null,
        createElement("form", {
            onSubmit: function(event) {
                event.preventDefault();
                if(!input.value.trim()) {
                    return;
                }
                dispatch(addTodo(input.value));
                input.value = "";
            }
        }, [
            createElement("input", {
                ref: function(node) {
                    input = node;
                }
            }, null
            ),
            createElement("button", {
                type: "submit"
            }, "add todo"
            )
        ]
        ));
};

AddTodo = connect()(AddTodo);
