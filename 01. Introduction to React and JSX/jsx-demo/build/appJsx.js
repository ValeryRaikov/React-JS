var htmlRoot = document.getElementById('root');

var reactRoot = ReactDOM.createRoot(htmlRoot);

// const headerReactElement = React.createElement('h1', null, 'Hello there from React');
// const headerReactElement = <h1>Hello there from React</h1>

// const paragraphReactElement = React.createElement('p', null, 'This is awesome!');
// const paragraphReactElement = <p>This is awesome!</p>

var headingSectionReactElement = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        null,
        'Hello there from React'
    ),
    React.createElement(
        'p',
        null,
        'This is awesome!'
    ),
    React.createElement(
        'p',
        null,
        'Testing the reload...'
    )
);

reactRoot.render(headingSectionReactElement);