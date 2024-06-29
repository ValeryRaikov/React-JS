var htmlRoot = document.getElementById('root');

var reactRoot = ReactDOM.createRoot(htmlRoot);

var headerReactElement = React.createElement('h1', null, 'Hello there from React');
var paragraphReactElement = React.createElement('p', null, 'This is awesome!');

var headingSectionReactElement = React.createElement('header', null, headerReactElement, paragraphReactElement);

function Main(props) {
    return React.createElement('main', null, React.createElement('h2', null, props.title), React.createElement('ul', null, React.createElement('li', null, 'First line of code'), React.createElement('li', null, 'Second line of code'), React.createElement('li', null, 'Third line of code')));
}

var siteContent = React.createElement('div', null, headingSectionReactElement, React.createElement(Main, { title: 'Test purpose' }));

reactRoot.render(siteContent);