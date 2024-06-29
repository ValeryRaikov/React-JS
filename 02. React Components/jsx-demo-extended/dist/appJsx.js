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

function Main(title) {
    return React.createElement(
        'main',
        null,
        React.createElement(
            'h2',
            null,
            title
        ),
        React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                'First line of code'
            ),
            React.createElement(
                'li',
                null,
                'Second line of code'
            ),
            React.createElement(
                'li',
                null,
                'Third line of code'
            )
        )
    );
}

var siteContent = React.createElement(
    'div',
    null,
    headingSectionReactElement,
    React.createElement(Main, { title: 'Test purpose' })
);

reactRoot.render(headingSectionReactElement);