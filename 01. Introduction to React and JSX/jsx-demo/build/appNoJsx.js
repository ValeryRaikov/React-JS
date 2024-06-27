var htmlRoot = document.getElementById('root');

var reactRoot = ReactDOM.createRoot(htmlRoot);

var headerReactElement = React.createElement('h1', null, 'Hello there from React');
var paragraphReactElement = React.createElement('p', null, 'This is awesome!');
var headingSectionReactElement = React.createElement('header', null, headerReactElement, paragraphReactElement);

reactRoot.render(headingSectionReactElement);