const { createElement } = React;
const { createStore } = Redux;
const { Provider } = ReactRedux;

let store = createStore(todos);

ReactDOM.render(
    createElement(Provider, {store},
        createElement(App, undefined, "Hello World")
    ),
    document.getElementById("app")
);
